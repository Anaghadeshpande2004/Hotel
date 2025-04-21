
import React, { Component } from "react";
import axios from "axios";


class CustomerCheckinForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            aadhaar: '',
            passport: '',
            nationality: '',
            locality: '',
            dob: '',
            age: '',
            address: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit () {
        const requestData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phoneNumber,
            aadhar_number: 'dummyAadhaar',
            passport_number: 'dummyPassport',
            nationality: 'IND',
            locality: 'HUBBALI',
            date_of_birth: new Date(),
            age: 20,
            address: 'Vidyagiri'
        }
        console.log('handleSubmit data: ', requestData)
        let allFieldsValid = true
        if (this.state.name.length === 0) {
            alert('Name cannont be empty')
            allFieldsValid = false
        }
        
        if (allFieldsValid) {
            axios.post("http://localhost:5000/customer", requestData)
            .then(async response => {
                console.log("Data submitted successfully:", response);
            })
            .catch(error => {
                console.error("There was an error submitting the data!", error);
            });
        }
    }

    handleNameChange (event) {
        const name = event.target.value
        console.log('handleNameChange: ', name)
        this.setState({name: name})
    }

    handleEmailChange (event) {
        console.log('handleEmailChange: ', event.target.value)
        this.setState({email: event.target.value})
    }

    handlePhoneNumber (event) {
        console.log('handlerPhoneNumber: ', event)
        this.setState({phoneNumber: event.target.value})
    }

    render () {
        return (
            <div className="customerCheckinForm">
                    {/* Name Input */}
                    <div className="nameInput">
                        <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                        </label>
                    </div>
                    {/* Email Input */}
                    <div className="emailInput">
                        <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                        </label>
                    </div>
                    {/* Password Input */}
                    <div className="phoneNumberInput">
                        <label>
                        Phone number:
                        <input
                            type="text"
                            name="phonenumber"
                            value={this.state.phoneNumber}
                            onChange={this.handlePhoneNumber}
                        />
                        </label>
                    </div>
                    {/* Submit Button */}
                    <button type="submit" onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}

export default CustomerCheckinForm