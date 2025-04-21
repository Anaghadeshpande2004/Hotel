import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GuestInfoForm = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    roomNumber: "",
    purposeOfVisit: "Personal Visit",
    numberOfGuests: 1,
    maleAdults: 0,
    maleChildren: 0,
    femaleAdults: 0,
    femaleChildren: 0,
    bookingWebsite: "",
    bookingId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: Math.max(0, parseInt(value) || 0),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/page3"); // Redirect to Page 3
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1 style={styles.heading}>Guest Primary Info</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Allocated Room Number <span style={styles.required}>*</span>
            </label>
            <input type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} required style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Purpose Of Visit <span style={styles.required}>*</span>
            </label>
            <select name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} required style={styles.input}>
              <option value="Personal Visit">Personal Visit</option>
              <option value="Business">Business</option>
              <option value="Tourism">Tourism</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Number Of Guests <span style={styles.required}>*</span>
            </label>
            <input type="number" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} min="1" required style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Total Number Of Males <span style={styles.required}>*</span>
            </label>
            <div style={styles.subGroup}>
              {["maleAdults", "maleChildren"].map((type, index) => (
                <div key={index} style={styles.counter}>
                  <span style={styles.counterLabel}>{type === "maleAdults" ? "Adult" : "Child"}</span>
                  <div style={styles.numberInput}>
                    <button type="button" onClick={() => handleNumberChange(type, formData[type] - 1)} style={styles.button}>-</button>
                    <input type="number" value={formData[type]} onChange={(e) => handleNumberChange(type, e.target.value)} min="0" style={styles.inputNumber} />
                    <button type="button" onClick={() => handleNumberChange(type, formData[type] + 1)} style={styles.button}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Total Number Of Females <span style={styles.required}>*</span>
            </label>
            <div style={styles.subGroup}>
              {["femaleAdults", "femaleChildren"].map((type, index) => (
                <div key={index} style={styles.counter}>
                  <span style={styles.counterLabel}>{type === "femaleAdults" ? "Adult" : "Child"}</span>
                  <div style={styles.numberInput}>
                    <button type="button" onClick={() => handleNumberChange(type, formData[type] - 1)} style={styles.button}>-</button>
                    <input type="number" value={formData[type]} onChange={(e) => handleNumberChange(type, e.target.value)} min="0" style={styles.inputNumber} />
                    <button type="button" onClick={() => handleNumberChange(type, formData[type] + 1)} style={styles.button}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Booking Website Name <span style={styles.required}>*</span>
            </label>
            <input type="text" name="bookingWebsite" value={formData.bookingWebsite} onChange={handleChange} required style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              Booking ID <span style={styles.required}>*</span>
            </label>
            <input type="text" name="bookingId" value={formData.bookingId} onChange={handleChange} required style={styles.input} />
          </div>

          <div style={styles.formActions}>
            <button type="submit" style={styles.submitButton}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Updated Styles with Vertical Scrolling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    Height: "100vh",
    backgroundColor: "#f3f3f3",
    padding: "50px",
    overflowY: "hidden", // Enables vertical scrolling
  },
  formBox: {
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    width: "80%",
    maxWidth: "900px",
    maxHeight: "80vh", // Limits height to enable scrolling
    overflowY: "scroll", // Enables internal scrolling
    scrollbarWidth: "none", // Hides scrollbar in Firefox
    "-ms-overflow-style": "none", // Hides scrollbar in Edge/IE
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "blue",
    marginBottom: "5px",
  },
  required: {
    color: "red",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  subGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  counter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flex: "1",
  },
  counterLabel: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  numberInput: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ddd",
    border: "none",
    padding: "10px 15px",
   
    fontSize: "18px",
    borderRadius: "5px",
  },
  inputNumber: {
    width: "50px",
    textAlign: "center",
    border: "1px solid #ccc",
    fontSize: "16px",
    margin: "0 10px",
  },
  submitButton: {
    backgroundColor: "teal",
    color: "white",
    padding: "12px 25px",
    fontSize: "18px",
    borderRadius: "5px",
    width: "100%",
  },
};

export default GuestInfoForm;
