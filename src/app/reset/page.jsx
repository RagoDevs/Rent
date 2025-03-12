'use client';

import { useState } from "react";
import './reset.css'
import Image from "next/image";

export default function Reset() {

    const show = '/Assets/show.png'
    const eyeSlashIcon = '/Assets/hide.png'
    const [showPassword, setShowPassword] = useState(false);


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
                    <form>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
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

                </div>
            </div>
        </>
    )
}