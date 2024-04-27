// SignUp.js
import React from 'react';
import './styles.css'; // Import the CSS file for styling

const SignUp = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form" action="#" method="post">
                <input type="text" name="fname" placeholder="First Name" required />
                <input type="text" name="lname" placeholder="Last Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                <select name="accountType" required>
                    <option value="" disabled selected>Select Account Type</option>
                    <option value="user">User</option>
                    <option value="donator">Donator</option>
                </select>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default SignUp;
