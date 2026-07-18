import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Terms.css";

const Terms = () => {
  return (
    <>
      <Navbar />

      <div className="page terms">
        <h1>Terms and Conditions of Service</h1>
        <p><em>Last updated: 20 June 2026</em></p>

        <p>
          These Terms and Conditions (“Terms”) govern the relationship between
          <strong> Upbrainiacs Global Pvt. Ltd </strong> (“the Company,” “we,” “us,” or “our”)
          and any individual or guardian (“the Client,” “you,” or “your”) who engages
          the Company for overseas MBBS admission consultancy and related services.
          By signing an engagement form, making a payment, or availing any service
          from the Company, you agree to be bound by these Terms in full.
        </p>

        <h2>1. Nature of Services</h2>
        <p>
          The Company acts solely as an educational consultancy and facilitator. We assist
          students and their guardians with career counseling, university shortlisting,
          admissions processing, visa documentation support, travel arrangements, local
          on-ground assistance, scholarship guidance, internship and licensing exam (NExT)
          preparation support, health insurance facilitation, and dedicated student support
          services, as outlined in our service offerings.
        </p>
        <p>
          The Company is an intermediary between the Client and third-party universities,
          governments, immigration authorities, airlines, insurance providers, and hospitals.
          We do not own, operate, govern, or control any university, hospital, embassy,
          consulate, airline, or insurance company.
        </p>

        <h2>2. Scholarships, Placements, and Guarantees</h2>
        <p>
          Where the Company communicates a “guarantee” (including but not limited to
          scholarship guarantees, internship guarantees, job placement guarantees, or
          NExT exam success rates), such guarantees are extended solely by the Company
          as a service commitment, and are strictly subject to conditions such as
          university approval, regulatory clearance, and client performance.
        </p>

        <h2>3. Client Responsibilities</h2>
        <ul>
          <li>Provide accurate, complete, and truthful academic records and documents.</li>
          <li>Meet eligibility, attendance, and conduct requirements of the chosen university.</li>
          <li>Comply with visa, immigration, and travel regulations of the destination country.</li>
          <li>Take responsibility for personal conduct, safety, and well-being while abroad.</li>
        </ul>

        <h2>4. Fees and Payments</h2>
        <p>
          Consultancy fees and service charges are payable as per the agreed schedule.
          Fees once paid are non-refundable once services are rendered, except where
          required by applicable Indian consumer protection law.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted under applicable law, the Company shall not be
          held liable for rejection of applications, visa denials, delays, cancellations,
          losses from third-party providers, or any indirect, incidental, or consequential
          damages. In any event, liability shall not exceed the consultancy fee paid.
        </p>

        <h2>6. Disclaimer Regarding Outcomes</h2>
        <p>
          Information provided is subject to change by universities or government authorities.
          The Company shall not be held responsible for adverse outcomes beyond its control.
        </p>

        <h2>7. Intellectual Property and Confidentiality</h2>
        <p>
          All content, branding, and proprietary processes remain the property of the Company.
          Client information will be kept confidential and shared only as necessary for
          application processing.
        </p>

        <h2>8. Termination of Services</h2>
        <p>
          The Company may discontinue services for false information, abusive conduct,
          non-payment, or breach of Terms. Clients may discontinue services at any time,
          but no refund will be due for services already rendered.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          The Client agrees to indemnify and hold harmless the Company from any claims,
          losses, or damages arising out of breach of these Terms or violation of laws.
        </p>

        <h2>10. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by the laws of India, with exclusive jurisdiction
          of the courts at the Company’s registered office location.
        </p>

        <h2>11. Amendments</h2>
        <p>
          The Company reserves the right to amend these Terms at any time. Continued use
          of services after amendments constitutes acceptance of the revised Terms.
        </p>

        <h2>12. Acknowledgement</h2>
        <p>
          By engaging the services of Upbrainiacs Global Pvt. Ltd, the Client confirms
          they have read, understood, and agreed to these Terms in full.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
