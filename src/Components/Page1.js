import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const HotelPage1 = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [isOtpValid, setIsOtpValid] = useState(false);
    const navigate = useNavigate();

    const handleSendOtp = () => {
        setShowOtpModal(true);
    };

    const handleSubmitOtp = () => {
        if (otp === '1234') { // Example OTP validation
            setIsOtpValid(true);
            alert("OTP Verified! Proceeding to the next page.");
            navigate("/page2"); // Navigate to Page 2 after OTP verification
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2 className="title">Check In</h2>
            <div className="card">
                <h3 className="label">Nationality</h3>
                <div className="radio-group">
                    <label><input type="radio" name="nationality" value="Indian" defaultChecked /> Indian</label>
                    <label><input type="radio" name="nationality" value="Foreigner" /> Foreigner</label>
                </div>

                <p className="info-text">Verify Guest Phone Number First</p>
                <label className="label">Enter Mobile No.</label>
                <input 
                    type="text" 
                    className="input-field" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Mobile Number" 
                />
                <button className="send-btn" onClick={handleSendOtp}>Send OTP</button>
            </div>

            {showOtpModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3 className="modal-title">Guest Mobile OTP Verification</h3>
                        <p>Enter The OTP The Guest Has Received</p>
                        <input 
                            type="text" 
                            className="otp-input" 
                            value={otp} 
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={4}
                        />
                        <div className="modal-buttons">
                            <button className="back-btn" onClick={() => setShowOtpModal(false)}>← Back</button>
                            <button className="resend-btn">Resend OTP</button>
                        </div>
                        <button className="submit-btn" onClick={handleSubmitOtp}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelPage1;

// CSS Styles
const styles = `
.container {
    width: 90%;
    max-width: 1000px;
    margin: 50px auto;
    padding: 50px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.title {
    color:black;
    font-size: 28px;
    font-weight: bold;
}
.card {
    background-color: #e3f2fd;
    padding: 30px;
    border-radius: 10px;
}
.label {
    font-weight: bold;
    color: #333;
    display: block;
    margin-top: 10px;
    font-size: 18px;
}
.radio-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;
    font-size: 16px;
}
.input-field {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
}
.send-btn, .submit-btn {
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    margin-top: 15px;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
}
.submit-btn {
    border: 1px solid teal;
    background-color: #fff;
    color: teal;
}
.send-btn:hover, .submit-btn:hover {
    background-color: darkcyan;
    color: #fff;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
}
.modal-title {
    font-weight: bold;
    font-size: 20px;
}
.otp-input {
    width: 60%;
    padding: 12px;
    margin: 10px auto;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
}
.modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.back-btn, .resend-btn {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: teal;
}
.resend-btn {
    text-decoration: underline;
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
