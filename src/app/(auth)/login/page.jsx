"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [isShowPassword, setisShowPassword] = useState(false)

    const handleLoginFunc = async(data) => {
        
        const {data: res, error} = await authClient.signIn.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            callbackURL: "/",
        })
        if(error){
            toast.error(error.message);
        }
        if(res){
            alert("Wellcome to our news site")
        }
    }
    // console.log(errors, "errors")

    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100 mt-6'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" className="input" name="email" placeholder="Enter Your Email Address" {...register("email",{ required: "Email is required" })} />
                         {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input" name="password" placeholder="Enter Your Password" {...register("password",{ required: "Must put your password" })} />
                        <span className='absolute right-1 top-4 mr-2 cursor-pointer' onClick={()=>setisShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <div>
                        <button className="btn w-full text-white bg-slate-800">Login</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
                <p className='mt-4'>Don't have an account <Link className='text-red-500' href={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;