'use client';

import { useState } from "react";
import './reset.css'
import Image from "next/image";
import { base_url } from "@/Components/constant";
import { useSearchParams } from "next/navigation";

export default function Reset() {

    const show = '/Assets/show.png'
    const eyeSlashIcon = '/Assets/hide.png'
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            return setMessage('Please fill both fields');
        }

        if (password !== confirmPassword) {
            return setMessage('Passwords do not match');
        }

        try {
            const res = await fetch(`${base_url}/v1/admins/password/reset`, {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ token, password }),
            });
            if (response.status === 200) {
                setMessage('Password updated successfully!')
            }
        } catch (error) {
            setMessage('Something went wrong');
        }

    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="reset-bg">
                <Image
                    src='/Assets/reset.jpg'
                    alt="reset password"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                />
                <div className="reset-container">
                    <div className="logo">Pango</div>
                    {token ? (
                        <form onSubmit={handleSubmit}>
                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
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
                                    name='password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                            <button className="btn" type="submit">Reset Password</button>
                        </form>
                    ) : (
                        <p className="red-text">Invalid reset link</p>
                    )
                    }
                    <div className="reset-note">
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}