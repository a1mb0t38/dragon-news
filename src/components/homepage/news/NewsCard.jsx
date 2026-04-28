import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsCard = ({ news }) => {
    // console.log(news, "news")
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-between items-center bg-slate-100 p-4 rounded-md'>
                    <div className='flex gap-1 items-center'>
                        <Image className='rounded-full' src={news.author?.img} alt="this is author image" height={40} width={40}></Image>
                        <div>
                            <h2 className='font-semibold'>{news.author?.name}</h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiShare2 className='text-xl' />
                        <CiBookmark className='text-xl' />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title} width={300} height={300} className='w-full' />
                </figure>
                <p className='line-clamp-2'>{news.details}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <h2 className='flex gap-2 items-center'>
                            <IoIosStar className='text-lg text-yellow-500'></IoIosStar>{news.rating.number}
                        </h2>
                        <h2 className='flex gap-2 items-center'>
                            <FaEye className='text-lg text-green-500'></FaEye>
                            {news.total_view}
                        </h2>
                    </div>
                    <Link href={`/news/${news._id}`}>
                        <button className='btn bg-purple-500 text-white'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;