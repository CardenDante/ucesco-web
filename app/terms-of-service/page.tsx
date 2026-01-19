import type { Metadata } from "next";
import { Hero, Section, Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Terms of Service | UCESCO Africa",
  description: "Terms and conditions for using UCESCO Africa's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        description="Terms and conditions for using our services"
        size="sm"
      />

      <Section>
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="lead">
              Last updated: January 2026
            </p>

            <p>
              Please read these Terms of Service ("Terms") carefully before using the UCESCO Africa website
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms and our Privacy Policy.
              If you do not agree to these Terms, please do not use our website or services.
            </p>

            <h2>2. Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Infringe the rights of, restrict, or inhibit anyone else's use of the website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Collect or harvest information about other users</li>
            </ul>

            <h2>3. Donations and Payments</h2>
            <ul>
              <li>All donations are voluntary and non-refundable unless required by law</li>
              <li>We reserve the right to use donations where they are most needed</li>
              <li>Designated donations will be used for the specified purpose, with any surplus going to similar programs</li>
              <li>You will receive a receipt for tax purposes</li>
            </ul>

            <h2>4. Child Sponsorship</h2>
            <ul>
              <li>Sponsorship commitments are expected to continue until the child completes their education or turns 18</li>
              <li>You may cancel your sponsorship with 30 days' notice</li>
              <li>We will make every effort to match you with a specific child, but reserve the right to reassign if necessary</li>
              <li>Communication with sponsored children is facilitated through UCESCO Africa to ensure child safety</li>
            </ul>

            <h2>5. Volunteer Programs</h2>
            <ul>
              <li>Volunteer applications are subject to approval and background checks</li>
              <li>Volunteers must comply with UCESCO Africa's code of conduct and safeguarding policies</li>
              <li>Program fees are non-refundable within 30 days of the start date</li>
              <li>We reserve the right to terminate volunteer placements for violation of policies</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property
              of UCESCO Africa and is protected by copyright and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>7. User Content</h2>
            <p>
              If you submit content to our website (reviews, testimonials, etc.), you grant UCESCO Africa a
              non-exclusive, royalty-free, perpetual license to use, reproduce, and publish that content.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" without warranties of any kind, either express or implied.
              We do not warrant that the website will be uninterrupted or error-free.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              UCESCO Africa shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of our website or services.
            </p>

            <h2>10. Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content or
              practices of these websites.
            </p>

            <h2>11. Safeguarding</h2>
            <p>
              UCESCO Africa is committed to safeguarding children and vulnerable adults. All interactions with
              program beneficiaries must comply with our safeguarding policies.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
              posting to the website. Your continued use of the website constitutes acceptance of the modified Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Kenya.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p>
              UCESCO Africa<br />
              Email: <a href="mailto:info@ucesco.org">info@ucesco.org</a><br />
              Phone: +254 110 547 515
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
