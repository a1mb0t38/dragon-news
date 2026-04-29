"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {

    const handleGoogleSignIn = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data, "google signin")
    }

    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn}> <FaGoogle></FaGoogle> Login With Google</button>
                <button className='btn'> <FaFacebook></FaFacebook>Login With Github</button>
            </div>
        </div>
    );
};

export default RightSideBar;