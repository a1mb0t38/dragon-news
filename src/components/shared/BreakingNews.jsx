import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: "1",
        title: "Breaking News: Major event unfolds in the city",
    },
    {
        id: "1",
        title: "Breaking News: New policy accounce by the government",
    },
    {
        id: "1",
        title: "Breaking News: Sports Team wins championship",
    }
]

const BreakingNews = () => {
    return (
        <div className=' flex justify-between gap-4 items-center bg-gray-200 py-4 container mx-auto px-2'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n => {
                        return <h2 key={n.id}>{n.title}</h2>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;