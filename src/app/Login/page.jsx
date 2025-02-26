'use client';

import './Login.css';


export default function Login() {
    return (
        <>

            <div className="login-container">
                <div className="logo">Pango</div>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <button className="btn" type="submit">Login</button>
                    <div className="links">
                        <span>Forgot Password?</span> |
                        <span>Create Account</span>
                    </div>
                </form>
            </div>

        </>
    );
} 