import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

// to get the id of the page we use server components "params"
const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)

    const categories = await getCategories()
    // console.log(categories.news_category, "object categories")
    const news = await getNewsByCategoryId(id);
    // console.log(news)


    return (
        <div className="grid grid-cols-12 container mx-auto gap-4 mt-14">
            {/* news categories section */}
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
            </div>

            {/* All news section */}
            <div className="col-span-6">
                <h1 className=''>News By Category</h1>
                <div className="space-y-4 mt-6">

                    {
                        news.length > 0 ? news.map(n => {
                            return <NewsCard className="p-6 rounded-md border" key={n._id} news={n}>
                            </NewsCard>
                        }) : <h2 className='text-center text-4xl'>No News Found</h2>
                    }
                </div>
            </div>

            {/* secial news section */}
            <div className=" col-span-3">
                <h1>social links</h1>
                <RightSideBar></RightSideBar>
            </div>


        </div>
    );
};

export default NewsCategoryPage;