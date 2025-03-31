'use client';
import './forgot.css';
import { useState } from "react";
import { submitRequest } from "@/Components/constant";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please fill out your email');
            return;
        }

        setMessage('');

        try {
            await submitRequest('/v1/tokens/password/reset', 'POST', { email });

            setSubmitted(true);
            toast.success('Email Submitted');
            setMessage('Link sent to your email');

        } catch (error) {
            setMessage('Error submitting the request');

        }
    };

    return (
        <>
            <ToastContainer />
            <div className="forgot-bg">
                <div className="forgot-container">
                    <div className="logo">Rent</div>
                    <form onSubmit={handleSubmit}>
                        <p>Enter your email</p>
                        <div className="email-wrapper">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn" type="submit">Submit</button>
                    </form>


                    {submitted && <div className="forgot-note1"><p>{message}</p></div>}


                    {!submitted && message && <div className="forgot-note"><p>{message}</p></div>}
                </div>
            </div>
        </>
    );
}
