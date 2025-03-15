'use client';

import { Suspense, useState } from 'react';
import './activate.css';
import { base_url } from "@/Components/constant";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ActivateAccount() {
    const [message, setMessage] = useState('');

    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handleSubmit = async () => {
    
        try {
            const res = await fetch(`${base_url}/v1/admins/activate`, {
                method: 'PUT',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (res.status >= 200 && res.status < 300){
                setMessage('Account activated successfully!');
                toast.success('Account activated successfully!')
            } else {
                setMessage('Failed to activate account');
            }
        } catch (error) {
            setMessage('Something went wrong');
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="activate-bg">
                <div className="activate-container">
                    <div className="logo">Pango</div>
                    {token ? (
                        <form onSubmit={handleSubmit}>
                            <button className="btn" type="submit">Activate Account</button>
                        </form>
                    ) : (
                        <p className="red-text">Invalid reset link</p>
                    )}
                    <div className="reset-note">
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </>
    )

}

export default function Activate() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ActivateAccount />
        </Suspense>
    )
}