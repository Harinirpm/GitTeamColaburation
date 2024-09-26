import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [active, setActive] = useState(false);
    const [signupData, setSignupData] = useState({ email: '', password: '', name: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleToggle = () => {
        setActive(!active);
        setSignupData({ email: '', password: '', name: '' });
        setLoginData({ email: '', password: '' });
    };

    const handleSignup = async () => {
        const { email, password, name } = signupData;
        try {
            const response = await axios.post('http://localhost:6999/api/signup', { email, name, password });
            alert(response.data.message);
            navigate('/home');
        } catch (err) {
            console.error(err);
            alert('Error during signup');
        }
    };

    const handleLogin = async () => {
        const { email, password } = loginData;
        try {
            const response = await axios.post('http://localhost:6999/api/login', { email, password });
            if (response.data.success) {
                alert('Logged in successfully!');
                navigate('/home');
            } else {
                alert('Invalid email or password');
            }
        } catch (err) {
            console.error(err);
            alert('Error during login');
        }
    };

    return (
        <div className={`container ${active ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1><br />
                    <span>Use your email for registration</span><br />
                    <input
                        type="text"
                        placeholder="Name"
                        value={signupData.name}
                        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    />
                    <button type="button" onClick={handleSignup}>Sign Up</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1><br />
                    <span>Use your email and password</span><br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                    <button type="button" onClick={handleLogin}>Sign In</button>
                </form>
            </div>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="hidden" id="login" onClick={handleToggle}>
                            Sign In
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="hidden" id="register" onClick={handleToggle}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
