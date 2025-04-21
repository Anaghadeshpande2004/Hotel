import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

const RegisterWithFacePhotos = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [photos, setPhotos] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const webcamRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }
    setCurrentStep(1); // Start capturing photos
  };

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhotos([...photos, imageSrc]);
      if (photos.length < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        submitForm();
      }
    }
  };

  const submitForm = () => {
    console.log("User Registered:", formData);
    console.log("Captured Photos:", photos);
    alert("Registration successful with face images!");
  };

  const photoSteps = ["Front", "Left Side", "Right Side", "Back"];

  return (
    <div>
      <h2>Register</h2>
      {currentStep === 0 ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button onClick={handleRegister}>Register</button>
        </>
      ) : (
        <>
          <h3>Capture {photoSteps[currentStep - 1]} Photo</h3>
          <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={300} height={300} />
          <button onClick={capturePhoto}>Capture</button>
        </>
      )}
      
      {photos.length > 0 && (
        <div>
          <h3>Captured Photos:</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Captured ${photoSteps[index]}`} width={100} height={100} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterWithFacePhotos;