"use client";

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handleLoginFunc = (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // console.log(email)
        // const password = e.target.password.value;
        // console.log(password)
        console.log(data, "data")
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" name="password" placeholder="Enter Your Password" {...register("password",{ required: "Must put your password" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full text-white bg-slate-800">Login</button>
                </form>
                <p className='mt-4'>Don't have an account <Link className='text-red-500' href={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;