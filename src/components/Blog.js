// Blog.js
import React from 'react';
import './styles.css';

const Blog = () => {
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form className="login-form" action="#" method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Login" />
        <p className="forgot-password"><a href="/signup">Don't Have account?</a></p>
    </form>
</div>

  );
}

export default Blog;
