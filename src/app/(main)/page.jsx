import LeftSidebar from "../component/Homepage/All/leftsidber";
import RightSidebar from "../component/Homepage/All/rightsidber";


const getapi = async () => {
const res = await fetch("https://openapi.programming-hero.com/api/news/categories", {
    cache: "force-cache", 
  });
 const data = await res.json();
  return data.data;
}

const getnewsapi = async (category_Id) => {
const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_Id}`, {
    cache: "force-cache", 
  });
 const data = await res.json();
  return data.data;
}

export default async function Home() {
  const Catagories = await getapi();
  console.log(Catagories.news_category , "catagories");
  
  const news = await getnewsapi("4");
  console.log(news, "news");

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

      <div className=" font-bold col-span-3">
     
             <LeftSidebar Catagories={Catagories} activeId={"0"}/>
       
      </div>

      <div className="bg-gray-800 text-3xl font-bold col-span-6">
        All News 
        {
          news.map((newsItem) => (
            <div key={newsItem._id} className="bg-red-400 p-4 rounded-md mb-4 space-y-3">
              <h3 className="text-xl font-semibold rounded-md border  ">{newsItem.title}</h3>
              {/* <p className="text-gray-300">{newsItem.details}</p> */}
            </div>
          ))
        }

      </div>

      <div className=" col-span-3">
       < RightSidebar />

      </div>
      
    </div>
  );
}
