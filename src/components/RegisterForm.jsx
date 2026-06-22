import { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

const RegisterForm = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    expected_neet_score: "",
    degree_pref: "",
    country_pref: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${API_URL}/students/`,
        formData
      );

      alert("Application Submitted Successfully ✅");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        expected_neet_score: "",
        degree_pref: "",
        country_pref: ""
      });

    } catch (error) {
      console.error(error);
      alert("Submission Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="register-section"
    >

      <div className="register-container">

        <div className="register-content">

          <span>
            STUDENT REGISTRATION
          </span>

          <h1>
            Start Your Global Education Journey
          </h1>

          <p>
            Get expert guidance for studying abroad.
            Choose the right university and country with our experts.
          </p>

          <div className="benefit-box">
            <div>✓ Free Counselling</div>
            <div>✓ University Selection</div>
            <div>✓ Visa Assistance</div>
            <div>✓ Career Guidance</div>
          </div>

        </div>

        <div className="form-card">

          <h2>
            Start Your Application
          </h2>

          <form
            onSubmit={handleSubmit}
            className="register-form"
          >

            <input
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />

            <input
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="mobile"
              placeholder="Mobile Number (Whatsapp)"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              name="expected_neet_score"
              placeholder="Expected NEET Score"
              value={formData.expected_neet_score}
              onChange={handleChange}
              required
            />

            <select
              name="degree_pref"
              value={formData.degree_pref}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Course
              </option>

              <option value="MBBS">
                MBBS
              </option>


            </select>

            <select
              name="country_pref"
              value={formData.country_pref}
              onChange={handleChange}
              required
            >
              <option value="">
                Preferred Country
              </option>

              <option value="Georgia">
                Georgia
              </option>

              <option value="Russia">
                Russia
              </option>

              <option value="Kazakhstan">
                Kazakhstan
              </option>

              <option value="Romania">
                Romania
              </option>

              <option value="Kyrgyzstan">
                kyrgyzstan
              </option>

              <option value="Uzbekistan">
                Uzbekistan
              </option>
            </select>

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Start My Journey"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default RegisterForm;