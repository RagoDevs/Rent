'use client';

import { Suspense, useState } from "react";
import './reset.css';
import Image from "next/image";
import { base_url } from "@/Components/constant";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const dynamic = "force-dynamic";

function ResetForm() {
    const show = '/Assets/show.png';
    const eyeSlashIcon = '/Assets/hide.png';
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false); // ✅ new state

    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            return setMessage('Please fill both fields');
        }

        if (password !== confirmPassword) {
            return setMessage('Passwords do not match');
        }

        setLoading(true);

        try {
            const res = await fetch(`${base_url}/v1/admins/password/reset`, {
                method: 'PUT',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ token, password }),
            });

            if (res.ok) {
                toast.success('Password updated successfully!');
                setMessage('Password updated successfully!');
                setSuccess(true); // ✅ set success true
            } else if (res.status === 500) {
                setMessage('Failed to reset password');
            } else {
                setMessage('Your reset link is invalid or has expired');
            }
        } catch (error) {
            setMessage('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <ToastContainer />
            <div className="reset-bg">
                <div className="reset-container">
                    <div className="logo">Rent</div>
                    {(token && token.length === 26) ? (
                        !success ? (
                            <form onSubmit={handleSubmit}>
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
                                <div className="password-wrapper">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <img
                                        src={showPassword ? eyeSlashIcon : show}
                                        alt="Toggle Password Visibility"
                                        className="eye-icon"
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                                <button className="btn" type="submit" disabled={loading}>
                                    {loading ? 'Resetting...' : 'Reset Password'}
                                </button>
                            </form>
                        ) : (
                            // ✅ Success message with Login button
                            <div className="reset-success">
                                <p className="green-text">{message}</p>
                                <button
                                    className="btn"
                                    onClick={() => router.push('/login')}
                                >
                                    Go to Login
                                </button>
                            </div>
                        )
                    ) : (
                        <p className="red-text">Invalid reset link</p>
                    )}
                    <div className="reset-note">
                        {message && !success && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Reset() {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <ResetForm />
        </Suspense>
    );
}
