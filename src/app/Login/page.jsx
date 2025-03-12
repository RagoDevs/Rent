'use client';

import './Login.css';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/Components/Require/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const show = '/Assets/show.png'
    const eyeSlashIcon = '/Assets/hide.png'

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    const isTokenValid = () => {
        const token = localStorage.getItem('rentSiteToken');
        const expiryTime = localStorage.getItem('rentSiteExpiry');

        if (!token || !expiryTime) {
            return false;
        }

        const now = new Date().getTime();
        return now / 1000 < expiryTime;
    };

    useEffect(() => {
        if (isTokenValid() && router.pathname !== '/dashboard') {

            router.push('/dashboard');
        }
    },[]);

    const [loginError, setLoginError] = useState(null);
    let auth = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({

            email: Yup.string(),
            password: Yup.string()


        }),
        onSubmit: async values => {
            console.log('email', values.email)
            try {
                await auth.signin(values.email, values.password);

                toast.success("Login Successfully!");

            } catch (error) {
                setLoginError('Invalid email or password');
                toast.error("Invalid email or password")
            }
        },
    });
    const handleShowForgotPassword = () => { router.push('/forgotpassword')}                                          
    return (
        <>
            <ToastContainer />
            <div className="login-bg">
            <div className="login-container">
                <div className="logo">Pango</div>
                <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>
                    <div className="email-wrapper">
                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>) : null
                    }
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>) : null
                    }
                    {loginError && <div className="login-error">{loginError}</div>}
                    <button className="btn" type="submit">Login</button>
                    <div className="links">
                        <p onClick={handleShowForgotPassword}>Forgot Password </p> | <p>Create Account</p>
                    </div>
                </form>
            </div>
            </div>

        </>
    );
} 
