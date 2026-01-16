import axios from 'axios';
import crypto from 'crypto';

interface CreatePaymentParams {
  amount: number;
  currency?: string;
  reference: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  description: string;
  redirectUrl: string;
  backUrl: string;
}

interface DPOTokenResponse {
  success: boolean;
  transToken?: string;
  transRef?: string;
  error?: string;
}

interface VerifyPaymentResponse {
  success: boolean;
  status?: 'Paid' | 'Pending' | 'Failed' | 'Cancelled';
  amount?: number;
  currency?: string;
  transactionId?: string;
  error?: string;
}

const DPO_API_URL = process.env.DPO_API_URL || 'https://secure.3gdirectpay.com';
const DPO_COMPANY_TOKEN = process.env.DPO_COMPANY_TOKEN || '';
const DPO_SERVICE_TYPE = process.env.DPO_SERVICE_TYPE || '';

/**
 * Create a payment token with DPO
 */
export async function createPaymentToken({
  amount,
  currency = 'USD',
  reference,
  customerName,
  customerEmail,
  customerPhone,
  description,
  redirectUrl,
  backUrl,
}: CreatePaymentParams): Promise<DPOTokenResponse> {
  try {
    if (!DPO_COMPANY_TOKEN) {
      console.error('DPO_COMPANY_TOKEN is not configured');
      return { success: false, error: 'Payment gateway not configured' };
    }

    // Build XML request for DPO
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<API3G>
  <CompanyToken>${DPO_COMPANY_TOKEN}</CompanyToken>
  <Request>createToken</Request>
  <Transaction>
    <PaymentAmount>${amount.toFixed(2)}</PaymentAmount>
    <PaymentCurrency>${currency}</PaymentCurrency>
    <CompanyRef>${reference}</CompanyRef>
    <RedirectURL>${redirectUrl}</RedirectURL>
    <BackURL>${backUrl}</BackURL>
    <CompanyRefUnique>0</CompanyRefUnique>
    <PTL>5</PTL>
  </Transaction>
  <Services>
    <Service>
      <ServiceType>${DPO_SERVICE_TYPE}</ServiceType>
      <ServiceDescription>${description}</ServiceDescription>
      <ServiceDate>${new Date().toISOString().split('T')[0]}</ServiceDate>
    </Service>
  </Services>
  <Customer>
    <CustomerFirstName>${customerName.split(' ')[0] || customerName}</CustomerFirstName>
    <CustomerLastName>${customerName.split(' ')[1] || ''}</CustomerLastName>
    <CustomerEmail>${customerEmail}</CustomerEmail>
    ${customerPhone ? `<CustomerPhone>${customerPhone}</CustomerPhone>` : ''}
  </Customer>
</API3G>`;

    const response = await axios.post(`${DPO_API_URL}/API/v6/`, xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
      timeout: 30000,
    });

    // Parse XML response
    const transToken = extractXMLValue(response.data, 'TransToken');
    const transRef = extractXMLValue(response.data, 'TransRef');
    const result = extractXMLValue(response.data, 'Result');
    const resultExplanation = extractXMLValue(response.data, 'ResultExplanation');

    if (result === '000' && transToken) {
      return {
        success: true,
        transToken,
        transRef,
      };
    }

    return {
      success: false,
      error: resultExplanation || 'Failed to create payment token',
    };
  } catch (error) {
    console.error('DPO createPaymentToken error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Payment initialization failed',
    };
  }
}

/**
 * Verify payment status with DPO
 */
export async function verifyPayment(transToken: string): Promise<VerifyPaymentResponse> {
  try {
    if (!DPO_COMPANY_TOKEN) {
      return { success: false, error: 'Payment gateway not configured' };
    }

    const xml = `<?xml version="1.0" encoding="utf-8"?>
<API3G>
  <CompanyToken>${DPO_COMPANY_TOKEN}</CompanyToken>
  <Request>verifyToken</Request>
  <TransToken>${transToken}</TransToken>
</API3G>`;

    const response = await axios.post(`${DPO_API_URL}/API/v6/`, xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
      timeout: 30000,
    });

    const result = extractXMLValue(response.data, 'Result');
    const resultExplanation = extractXMLValue(response.data, 'ResultExplanation');

    // Get transaction details
    const transactionApproval = extractXMLValue(response.data, 'TransactionApproval');
    const transactionCurrency = extractXMLValue(response.data, 'TransactionCurrency');
    const transactionAmount = extractXMLValue(response.data, 'TransactionAmount');
    const transactionId = extractXMLValue(response.data, 'TransactionRef');

    // Determine status
    let status: 'Paid' | 'Pending' | 'Failed' | 'Cancelled' = 'Pending';
    if (result === '000' && transactionApproval === '1') {
      status = 'Paid';
    } else if (result === '801') {
      status = 'Pending';
    } else if (result === '900') {
      status = 'Cancelled';
    } else {
      status = 'Failed';
    }

    return {
      success: true,
      status,
      amount: transactionAmount ? parseFloat(transactionAmount) : undefined,
      currency: transactionCurrency,
      transactionId,
    };
  } catch (error) {
    console.error('DPO verifyPayment error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Payment verification failed',
    };
  }
}

/**
 * Cancel a payment token
 */
export async function cancelPayment(transToken: string): Promise<boolean> {
  try {
    if (!DPO_COMPANY_TOKEN) {
      return false;
    }

    const xml = `<?xml version="1.0" encoding="utf-8"?>
<API3G>
  <CompanyToken>${DPO_COMPANY_TOKEN}</CompanyToken>
  <Request>cancelToken</Request>
  <TransToken>${transToken}</TransToken>
</API3G>`;

    const response = await axios.post(`${DPO_API_URL}/API/v6/`, xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
      timeout: 30000,
    });

    const result = extractXMLValue(response.data, 'Result');
    return result === '000';
  } catch (error) {
    console.error('DPO cancelPayment error:', error);
    return false;
  }
}

/**
 * Get payment URL for redirect
 */
export function getPaymentUrl(transToken: string): string {
  const paymentUrl = process.env.NEXT_PUBLIC_DPO_PAYMENT_URL || 'https://secure.3gdirectpay.com/payv2.php';
  return `${paymentUrl}?ID=${transToken}`;
}

/**
 * Extract value from XML string
 */
function extractXMLValue(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}>([^<]*)</${tag}>`);
  const match = xml.match(regex);
  return match ? match[1] : '';
}

/**
 * Generate a unique reference for transactions
 */
export function generateTransactionReference(prefix: string = 'UCESCO'): string {
  const timestamp = Date.now();
  const random = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}
