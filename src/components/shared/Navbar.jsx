import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avater from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center mt-6'>
            <div>

            </div>
            <ul className='flex items-center gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'} className={"text-yellow-500"}>Career</NavLink></li>
            </ul>
            <div className='flex items-center gap-4'>
                <Image className='rounded-full' src={avater} alt='avater image' width={50} height={50}></Image>
                <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;