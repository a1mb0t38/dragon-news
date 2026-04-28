import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json()
  return data.data;
}



export default async function Home() {

  const categories = await getCategories()
  console.log(categories.news_category, "object categories")

  return (
    <div className="grid grid-cols-12 container mx-auto gap-4 mt-14">
      {/* news categories section */}
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>

      {/* All news section */}
      <div className="font-bold text-3xl bg-amber-200 col-span-6">
        <h1>All News</h1>
      </div>

      {/* secial news section */}
      <div className=" col-span-3">
        <h1>social links</h1>
        <RightSideBar></RightSideBar>
      </div>


    </div>
  );
}
