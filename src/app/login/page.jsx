'use client';

import './Login.css';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/Components/Require/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    let auth = useAuth();
    const pathname = usePathname
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
    }, [router, pathname]);

    const [loginError, setLoginError] = useState(null);
    
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
            try {
                await auth.signin(values.email, values.password);
                
                toast.success("Login Successfully!");

            } catch (error) {
                setLoginError('Invalid email or password');
                toast.error("Invalid email or password");
            }
        },
    });
    useEffect(() => {
        if (!auth.token) {
          formik.resetForm();
        }
      }, [auth.token]);
    // const handleShowForgotPassword = () => { router.push('/forgotpassword')}                                          
    return (
        <>
            <ToastContainer />
            <div className="login-bg">
                {/* <Image
                    src='/Assets/loginbg.jpg'
                    alt="forgot password"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                /> */}
                <div className="login-container">
                    <div className="logo">Rent</div>
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

                            <Link className='link1' href="/forgotpassword">
                                Forgot Password?
                            </Link> |  <Link className='link2' href="/signup">
                                Create Account
                            </Link> 
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
} 
