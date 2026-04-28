import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import React from 'react';


async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json()
    return data.data;
}

async function getNewsByCategoryId(catetory_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catetory_id}`);
    const data = await res.json()
    return data.data;
}


// to get the id of the page we use server components "params"
const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)

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
            <div className="font-bold bg-amber-200 col-span-6">
                <h1>All News</h1>
                <div className="space-y-4">

                    {
                        news.length > 0 ? news.map(n => {
                            return <div className="p-6 rounded-md border" key={n._id}>
                                {n.title}

                            </div>
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