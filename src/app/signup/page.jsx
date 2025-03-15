'use client';
import './signup.css'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { base_url } from '@/Components/constant';

export default function signup() {

    const show = '/Assets/show.png';
    const eyeSlashIcon = '/Assets/hide.png';
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleBlur = () => {
        setTouched(true)
        setIsValid(emailRegex.test(email) || email === '');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please fill out your email');
            return;
        }

        if (!password) {
            setMessage('Please fill out your password');
            return;
        }

        setMessage('');

        try {
            const response = await fetch(`${base_url}/v1/admins`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const errorData = await response.json();

            if (response.status >= 200 && response.status < 300) {
                setSubmitted(true);
                toast.success('Link sent to your email');
                setMessage('Form submitted successfully');
            } else {
                setMessage(errorData.error || 'Something went wrong');
            }
        } catch (error) {
            console.log('Error submitting', error);
            setMessage('Error submitting the request');
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="signup-bg">
                <div className="signup-container">
                    <div className="logo">Pango</div>
                    <form onSubmit={handleSubmit}>
                        <p>Create new account</p>
                        <div className="email-wrapper">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmail}
                                onBlur={handleBlur}
                                required
                            />
                            {touched && !isValid && <p className="signup-email-red">Invalid Email format</p>}
                        </div>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            <img
                                src={showPassword ? eyeSlashIcon : show}
                                alt="Toggle Password Visibility"
                                className="eye-icon"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        <button className="btn" type="submit">Submit</button>
                    </form>
                    {submitted && <div className="signup-note-1"><p>{message}</p></div>}


                    {!submitted && message && <div className="signup-note"><p>{message}</p></div>}
                </div>
            </div>
        </>
    )
}