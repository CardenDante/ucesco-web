import type { Metadata } from "next";
import { Hero, Section, Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy | UCESCO Africa",
  description: "UCESCO Africa's privacy policy and data protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
        size="sm"
      />

      <Section>
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="lead">
              Last updated: January 2026
            </p>

            <p>
              UCESCO Africa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information</li>
              <li><strong>Donation Information:</strong> Payment details, donation history, and preferences</li>
              <li><strong>Sponsorship Information:</strong> Child sponsorship details and communication preferences</li>
              <li><strong>Volunteer Information:</strong> Application details, skills, availability, and background information</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and time spent on pages</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process donations and sponsorships</li>
              <li>Communicate with you about our programs and your involvement</li>
              <li>Send updates, newsletters, and impact reports</li>
              <li>Process volunteer applications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no electronic transmission
              over the Internet can be guaranteed to be 100% secure.
            </p>

            <h2>Sharing Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers who assist us in operating our website and programs</li>
              <li>Payment processors to handle donations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can control cookie settings through
              your browser preferences.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              While we work with children through our programs, we do not knowingly collect personal information from
              children under 13 through our website without parental consent.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
              new policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:info@ucesco.org">info@ucesco.org</a><br />
              Phone: +254 123 456 789
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
