import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Privacy.css";

const Privacy = () => {
  return (
    <>
      <Navbar />

      <div className="page privacy">
        <h1>Privacy Policy</h1>
        <p>
          This page informs you of our policies regarding the collection, use and
          disclosure of Personal Information we receive from users of this Mobile App.
          We use your personal information only for providing and improving the Mobile App.
          By using the mobile app, you agree to the collection and use of information
          in accordance with this policy.
        </p>

        <p>
          This page is used to inform website visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone decided to
          use our Service.
        </p>

        <p>
          If you choose to use our Service, then you agree to the collection and use of
          information in relation to this policy. The Personal Information that we collect
          is used for providing and improving the Service. We will not use or share your
          information with anyone except as described in this Privacy Policy.
        </p>

        <p>
          The terms used in this Privacy Policy have the same meanings as in our Terms
          and Conditions, which is accessible at Upbrainiacs Global unless otherwise
          defined in this Privacy Policy.
        </p>

        <h2>Information Collection and Use</h2>
        <p>
          While using our App, we may ask you to provide us with certain personally
          identifiable information that can be used to contact or identify you.
          Personally identifiable information may include, but is not limited to your
          name ("Personal information").
        </p>
        <p>
          To the extent any Personally Identifiable Information collected by us contains
          images of you, you grant Upbrainiacs Global a limited, non-exclusive right to
          use your data for identification purposes.
        </p>

        <h2>Log Data</h2>
        <p>
          Like many mobile app operators, we collect information that your device sends
          whenever you visit our mobile app ("Log Data").
        </p>
        <p>
          This Log Data may include information such as your mobile's location, device
          IMEI number, contact numbers, messages, the information of the app that you
          have used, the time and date of your visit, the time spent on those apps and
          other statistics.
        </p>
        <p>
          In addition, we may use third party services such as Google Analytics that
          collect, monitor and analyze this.
        </p>

        <h2>Communications</h2>
        <p>
          We may use your Personal Information to contact you with new updates of the app
          and marketing or promotional materials.
        </p>

        <h2>Security</h2>
        <p>
          The security of Personal Information is important to us, but remember that no
          method of transmission over the internet, or method of electronic storage, is
          100% secure. While we strive to use commercially acceptable means to protect
          your Personal Information, we cannot guarantee its absolute security.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          This Privacy Policy is effective as of App Installation Date and will remain in
          effect except with respect to any changes in its provisions in the future,
          which will be in effect immediately after being installed on the device.
        </p>
        <p>
          We reserve the right to update or change our Privacy Policy at any time and you
          should check this Privacy Policy periodically. Your continued use of Service
          after we post any modifications to the Privacy Policy on the app will constitute
          your acknowledgement of the modifications and your consent to abide and be bound
          by the modified Privacy Policy.
        </p>
        <p>
          If we make any material changes to this Privacy Policy, we will notify you either
          through the email address you have provided us, or by placing a prominent notice
          on our app.
        </p>

        <h2>Remarketing Privacy Policy</h2>
        <p>
          We use Google AdWords or Google Ads Remarketing to advertise Upbrainiacs Global
          across the Internet. AdWords remarketing will display relevant ads tailored to
          you based on what parts of the Upbrainiacs Global website you have viewed by
          placing a cookie on your machine.
        </p>
        <p>
          <strong>THIS COOKIE DOES NOT IN ANY WAY IDENTIFY YOU OR GIVE ACCESS TO YOUR COMPUTER.</strong>
          The cookie is used to say "This person visited this page, so show them ads relating
          to that page." Google AdWords Remarketing allows us to tailor our marketing to
          better suit your needs and only display ads that are relevant to you.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
