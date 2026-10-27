

const getapi = async () => {
const res = await fetch("https://openapi.programming-hero.com/api/news/categories", {
    cache: "force-cache", 
  });
 const data = await res.json();
  return data.data;
}

export default async function Home() {
  const Catagories = await getapi();
  console.log(Catagories.news_category , "catagories");
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

      <div className=" font-bold col-span-3">
      <h2 className="text-3xl font-bold mb-4">All Catagories</h2>
       <ul className="flex flex-col gap-2 ">
       {
        Catagories.news_category.map((catagory) => (
          <li key={catagory.category_id} className="bg-white text-black font-bold rounded-md">
            {catagory.category_name}
          </li>
        ))
       }

       </ul>

       
      </div>

      <div className="bg-gray-800 text-3xl font-bold col-span-6">
        All News

      </div>

      <div className="bg-amber-500 text-3xl font-bold col-span-3">
        All social icons

      </div>
      
    </div>
  );
}
