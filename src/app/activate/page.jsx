'use client';

import { Suspense, useState } from 'react';
import './activate.css';
import { base_url } from "@/Components/constant";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ActivationForm({ token, onSuccess }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${base_url}/v1/admins/activate`, {
                method: 'PUT',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ token }),
            });

            if (res.status >= 200 && res.status < 300) {
                toast.success('Account activated successfully!');
                onSuccess('Account activated successfully!');

            }else if (res.status == 500) {
                 onSuccess('Failed to activate account');
                 toast.error('Failed to activate account');
            }
            else {
                toast.error('Your activation link is invalid or has expired');
                onSuccess('Your activation link is invalid or has expired');
            }
        } catch (error) {
            toast.error('Something went wrong');
            onSuccess('Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button className="btn" type="submit">Activate Account</button>
        </form>
    );
}

function ActivateAccount() {
    const [message, setMessage] = useState('');
    const [isActivated, setIsActivated] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter();

    const handleActivationSuccess = (msg) => {
        setMessage(msg);
        if (msg === 'Account activated successfully!') {
            setIsActivated(true);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="activate-bg">
                <div className="activate-container">
                    <div className="logo">Pango</div>
                    {(token && token.length === 26 )? (
                        <>
                            {!isActivated && <ActivationForm token={token} onSuccess={handleActivationSuccess} />}
                            {message && <p style={{color: 'rgb(6, 215, 6)'}}>{message}</p>}
                            {isActivated && <button className="btn" onClick={() => router.push('/login')}>Login</button>}
                        </>
                    ) : (
                        <p className="red-text">Invalid activation link</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default function Activate() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ActivateAccount />
        </Suspense>
    );
}
