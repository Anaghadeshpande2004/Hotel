import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const RegisterWithFaceRecognition = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [faceDetected, setFaceDetected] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    };
    loadModels();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }
    detectFace();
  };

  const detectFace = async () => {
    if (webcamRef.current) {
      const video = webcamRef.current.video;
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
      if (detections.length > 0) {
        setFaceDetected(true);
        alert("Face recognized! Registration Successful.");
        submitForm();
      } else {
        alert("No face detected. Try again!");
      }
    }
  };

  const submitForm = () => {
    console.log("User Registered:", formData);
    // Send formData to backend
  };

  return (
    <div>
      <h2>Register</h2>
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
      <div style={{ marginTop: "20px" }}>
        <Webcam ref={webcamRef} width={300} height={300} />
      </div>
    </div>
  );
};

export default RegisterWithFaceRecognition;