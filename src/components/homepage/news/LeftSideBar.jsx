import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {
            categories.news_category.map(category => {
              return <li className={`${activeId === categories.category_id && "bg-slate-100"}  rounded-md font-bold text-center text-md cursor-pointer`} key={category.category_id}>
                <Link className='block p-2' href={`/category/${category.category_id}`}>{category.category_name}</Link>
                </li>
            })
          }
        </ul>
        </div>
    );
};

export default LeftSideBar;