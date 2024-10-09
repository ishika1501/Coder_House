import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    linkedin: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      program: event.target.program.value,
      linkedin: event.target.linkedin.value,
    });

    // Clear form fields
    event.target.reset();

    // Show the popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_image}>
        <img src="/images/Coder.png" alt="contact image" />
      </div>

      <div className={styles.contact_form}>
        <form onSubmit={onSubmit}>
          <div className="text-container">
            <h2 className="subheading">BE A PART OF</h2>
            <h1 className="main-title">
              CODER HOUSE <span className="family">FAMILY</span>
            </h1>
          </div>
          <div className={styles.form_control}>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className={styles.form_control}>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className={styles.form_control}>
            <input type="tel" name="phone" placeholder="Phone Number" required />
          </div>
          <div className={styles.form_control}>
            <select name="program" required>
              <option value="" disabled defaultValue>
                Select a Program:
              </option>
              <option value="web">Web Development</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="ml">Machine Learning</option>
            </select>
          </div>
          <div className={styles.form_control}>
            <input type="url" name="linkedin" placeholder="LinkedIn Profile URL" required />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>

        {showPopup && (
          <div className={styles.popup}>
            Thank you for your submission!
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
