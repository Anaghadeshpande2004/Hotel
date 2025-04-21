import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGuest = () => {
    const [idNumber, setIdNumber] = useState("");
    const [uploaded, setUploaded] = useState({
        guestPhoto: false,
        idFront: false,
        idBack: false
    });

    const navigate = useNavigate(); // Initialize navigation

    const handleChange = (e) => {
        setIdNumber(e.target.value);
    };

    const handleFileUpload = (e, field) => {
        if (e.target.files.length > 0) {
            setUploaded((prev) => ({ ...prev, [field]: true }));
        }
    };

    const handleNext = () => {
        navigate("/page4"); // Navigate to page 4 on button click
    };

    return (
        <div className="container">
            <h2>Add Guest</h2>
            <div className="photo-section">
                <div className="photo-upload">
                    <label><b>Upload Photo Of the Guest</b> <span className="required">*</span></label>
                    <div className="file-upload">
                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "guestPhoto")} />
                        {uploaded.guestPhoto && <span className="tick">✔</span>}
                    </div>
                </div>
                <div className="photo-upload">
                    <label><b>Upload Photo Of Guest ID Card - Front Side</b> <span className="required">*</span></label>
                    <div className="file-upload">
                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "idFront")} />
                        {uploaded.idFront && <span className="tick">✔</span>}
                    </div>
                </div>
                <div className="photo-upload">
                    <label><b>Upload Photo Of Guest ID Card - Back Side</b> <span className="required">*</span></label>
                    <div className="file-upload">
                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "idBack")} />
                        {uploaded.idBack && <span className="tick">✔</span>}
                    </div>
                </div>
            </div>

            <div className="form-section">
                <label><b>Identity Proof</b> <span className="required">*</span></label>
                <select className="dropdown">
                    <option value="Aadhar">Aadhar</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">Driving License</option>
                </select>

                <label><b>ID Number</b> <span className="required">*</span></label>
                <input
                    type="text"
                    value={idNumber}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Enter ID Number"
                />

                <button className="next-btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default AddGuest;

// CSS
const styles = `
.container {
    width: 100%;
    max-width: 900px;
    margin: 50px auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.photo-section .photo-upload {
    background-color: #e0e0e0;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}
.file-upload {
    display: flex;
    align-items: center;
    position: relative;
}
.file-upload input {
    margin-right: 10px;
}
.tick {
    position: absolute;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: teal; /* Blue background */
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
}
.required {
    color: red;
    font-weight: bold;
}
.form-section label {
    color: blue;
    display: block;
    margin-top: 15px;
    font-weight: bold;
}
.input-field, .dropdown {
    width: 100%;
    max-width: 900px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}
.next-btn {
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    font-size: 17px;
}
.next-btn:hover {
    background-color: darkcyan;
}`;

// Injecting CSS into the document
const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
