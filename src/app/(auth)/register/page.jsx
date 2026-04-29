"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = async (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // console.log(email)
        // const password = e.target.password.value;
        // console.log(password)
        // console.log(data, "data")
        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        // console.log(res, "res")
        //  console.log(error, "error");
        if(error){
             toast.error(error.message);
        }
        if(res){
            alert("SignUp Successfull")
        }
    }
    // console.log(errors, "errors")

    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100 mt-6'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" name="name" placeholder="Enter Your name" {...register("name", { required: "name is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo Url</legend>
                        <input type="text" className="input" name="photo" placeholder="Enter Your Photo URL" {...register("photo", { required: "photo is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" className="input" name="email" placeholder="Enter Your Email Address" {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" name="password" placeholder="Enter Your Password" {...register("password", { required: "Must put your password" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full text-white bg-slate-800">Register</button>
                </form>
                <ToastContainer></ToastContainer>
                <p className='mt-4'>Already have an account <Link className='text-red-500' href={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;