'use client';
import './HouseLocation.css';

export default function HouseLocation() {
    return (
        <>
            <div className="mapswrapper--one">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.814982589421!2d39.2083284!3d-6.792354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4fb59e4c2e6d%3A0xbc7fa655992ac5c3!2sKivule!5e0!3m2!1sen!2stz!4v1735670755565!5m2!1sen!2stz"
                    width="100%"
                    height="100%"
                    style={{ border: 0,  borderRadius: "13px", }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    )
}