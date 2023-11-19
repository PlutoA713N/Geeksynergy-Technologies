import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({
        name:'',
        password:'',
    });

    const [loginError, setLoginError] = useState('');

    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,[name]:value,
        }));
    };


    const handleLogin = (e) => {
        e.preventDefault();

        setSubmitting(true);

        const storedData = localStorage.getItem('userSignupData');
        const registeredData = storedData ? JSON.parse(storedData) : {};

        console.log("This data is used to test",storedData,registeredData)

        if (
            loginData.name === registeredData.name &&
            loginData.password === registeredData.password
        ) {
            console.log('Login Successful');
            alert('Login Successful');
            setLoginError('');
            navigate('/MovieList');
        } else {
            setLoginError('Invalid Credentials');
            alert('Login failed. Please check your credentials.');
        }

        setSubmitting(false);
    };


    return(
    <div>
        <form onSubmit={handleLogin}>
            <label htmlFor="name">
                Username:
                <input type="text"
                       name="name"
                       value={loginData.name} 
                       onChange={handleChange}
                       required
                />
            </label>
            <br />
            <label htmlFor="password">
                Password:
                <input type="password"
                       name="password"
                       value={loginData.password} 
                       onChange={handleChange}
                       required
                />
            </label>
            <br />
            <button type="submit" disabled={submitting}>Sign in</button>
        </form>

        {loginError && <p>{loginError}</p>}
        </div>
    );
};

export default Login;