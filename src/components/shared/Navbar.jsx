"use client" ;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avater from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    return (
        <div className='container mx-auto flex justify-between items-center mt-6'>
            <div>

            </div>
            <ul className='flex items-center gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'} className={"text-yellow-500"}>Career</NavLink></li>
            </ul>
            {isPending ? <span className="loading loading-dots loading-xl"></span> : user ? (<div className='flex items-center gap-4'>
                <h2>Hello, {user?.name}</h2>
                <Image className='rounded-full' src={user?.image || avater} alt='avater image' width={50} height={50}></Image>
                <button className='btn bg-purple-500 text-white' onClick={async()=> await authClient.signOut()}>Logout</button>
            </div>) : (<button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button>)}
        </div>
    );
};

export default Navbar;