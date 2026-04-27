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

      <div className="col-span-3">
        <h2 className="font-bold text-lg">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {
            categories.news_category.map(category => {
              return <li className="bg-slate-100 p-2 rounded-md font-bold text-center text-md" key={category.category_id}>{category.category_name}</li>
            })
          }
        </ul>
      </div>


      <div className="font-bold text-3xl bg-amber-200 col-span-6">
        <h1>all news</h1>
      </div>


      <div className="font-bold text-3xl bg-pink-200 col-span-3">
        <h1>social links</h1>
      </div>


    </div>
  );
}
