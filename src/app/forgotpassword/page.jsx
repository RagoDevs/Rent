'use client';
import './forgot.css';
import { useState } from "react";
import { base_url } from "@/Components/constant";
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
            const response = await fetch(`${base_url}/v1/tokens/password/reset`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status >= 200 && response.status < 300)
                { 
                setSubmitted(true); 
                toast.success('Email Submitted');
                setMessage('Link sent to your email');
            } else {
                setMessage('Something went wrong');
            }
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

                    
                    {submitted && <div className="forgot-note"><p>{message}</p></div>}
                    
                    
                    {!submitted && message && <div className="forgot-note"><p>{message}</p></div>}
                </div>
            </div>
        </>
    );
}
