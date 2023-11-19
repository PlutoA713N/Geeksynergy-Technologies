import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// A formData variable is created to store the userData
const UserSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phoneNumber: '',
        profession: '',
    });

// We will update the state of each formData property
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,[name]: value,
    }));
};

//To store the formData in a local storage
const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
    console.log("This data is stored locally",formData);
    localStorage.setItem('userSignupData', JSON.stringify(formData));
    } catch (error) {
        console.error('Error storing data in localStorage:', error);
    }

    setFormData({
        name: '',
        password: '',
        email: '',
        phoneNumber: '',
        profession: '',
    });
};

return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name:
            <input type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
            />
        </label >
        <br />
        <label htmlFor="password">
            Password:
            <input type="password"
                   name="password"
                   value={formData.password}
                   onChange={handleChange} 
                   required 
            />
        </label>
        <br />
        <label htmlFor="email">
            Email:
            <input type="email"
                   name="email" 
                   value={formData.email}
                   onChange={handleChange} 
                   required 
            />
        </label>
        <br />
        <label htmlFor="number">
            Phone-Number: 
            <input type="tel"
                   name="phoneNumber" 
                   value={formData.phoneNumber}
                   onChange={handleChange}
                   required
            />
        </label>
        <br />
        <label htmlFor="profession">
            Profession:
            <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                >
                <option value="">Select</option>
                <option value="developer">Developer</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
        </label>
        <br />

        <button type="submit">Submit</button>
    </form>

<p>Already have an account? <Link to="/login">Login</Link></p>
</div>
);
};

export default(UserSignup);