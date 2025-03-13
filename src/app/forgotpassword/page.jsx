'use client';
import Image from "next/image";
import './forgot.css';
import { useState } from "react";
import { base_url } from "@/Components/constant";
import { ToastContainer } from "react-toastify";
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

            if (response.status === 200) { 
                setSubmitted(true); 
                success.toast('Email Submitted')
                setMessage('Link sent to your email');
            } else {
                setMessage('Something went wrong');
            }
        } catch (error) {
            console.log('Error submitting', error);
            setMessage('Error submitting the request');
        }
    };

    return (
        <>
        <ToastContainer />
            <div className="forgot-bg">
                <Image
                    src='/Assets/forgot-1.jpg'
                    alt="forgot password"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                />
                <div className="forgot-container">
                    <div className="logo">Pango</div>
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
