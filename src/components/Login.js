// Login.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; // Import your CSS file for styling

const Login = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to navigate to the signup page
    const goToSignup = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" action="#" method="post">
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Login" />
                {/* Link to the signup page */}
                <p className="forgot-password"><a href="#" onClick={goToSignup}>Don't Have an account?</a></p>
            </form>
        </div>
    );
}

export default Login;
