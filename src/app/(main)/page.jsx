


import { getCategories, getNewsByCategory } from "@/lib/api";
import LeftSidebar from "../component/Homepage/All/leftsidber";
import RightSidebar from "../component/Homepage/All/rightsidber";

export default async function Home() {
  const Catagories = await getCategories();
  const news = await getNewsByCategory("0"); // 0 = All News

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <LeftSidebar Catagories={Catagories} activeId="0" />
      </div>

      <div className="col-span-6">
        <h2 className="text-2xl font-bold mb-4">All News</h2>
        {news?.length > 0 ? (
          news.map((item) => (
            <div key={item._id} className="p-4 rounded-md mb-4 border space-y-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.author?.name} • {item.author?.published_date}
              </p>
            </div>
          ))
        ) : (
          <p>No news found</p>
        )}
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}









// import LeftSidebar from "../component/Homepage/All/leftsidber";
// import RightSidebar from "../component/Homepage/All/rightsidber";





// const getCategories = async () => {
// const res = await fetch("https://openapi.programming-hero.com/api/news/categories", {
//   cache: "force-cache",
// });
//   const data = await res.json();
//   return data.data;
// };

// const getNews = async (id) => {
//   const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`, {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   return data.data;
// };

// export default async function Home() {
//   const Catagories = await getCategories();
//   const news = await getNews("01"); // default category

//   return (
//     <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
//       <div className="col-span-3">
//         <LeftSidebar Catagories={Catagories} activeId="01" />
//       </div>
//       <div className="col-span-6">
//         <h2 className="text-2xl font-bold mb-4">All News</h2>
//         {news?.map((item) => (
//           <div key={item._id} className="p-4 rounded-md mb-4 border">
//             <h3 className="text-xl font-semibold">{item.title}</h3>
//           </div>
//         ))}
//       </div>
//       <div className="col-span-3">
//         <RightSidebar />
//       </div>
//     </div>
//   );
// }



// const getapi = async () => {
// const res = await fetch("https://openapi.programming-hero.com/api/news/categories", {
//     cache: "force-cache", 
//   });
//  const data = await res.json();
//   return data.data;
// }

// const getnewsapi = async (category_Id) => {
// const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_Id}`, {
//     cache: "force-cache", 
//   });
//  const data = await res.json();
//   return data.data;











  // const Catagories = await getapi();
  // console.log(Catagories.news_category , "catagories");
  
  // const news = await getnewsapi("4");
  // console.log(news, "news");












   // <div className="container mx-auto grid grid-cols-12 gap-4 my-10">

    //   <div className=" font-bold col-span-3">
     
    //          <LeftSidebar Catagories={Catagories} activeId={"0"}/>
       
    //   </div>

    //   <div className="bg-gray-800 text-3xl font-bold col-span-6">
    //     All News 
    //     {
    //       news.map((newsItem) => (
    //         <div key={newsItem._id} className="bg-red-400 p-4 rounded-md mb-4 space-y-3">
    //           <h3 className="text-xl font-semibold rounded-md border  ">{newsItem.title}</h3>
    //           {/* <p className="text-gray-300">{newsItem.details}</p> */}
    //         </div>
    //       ))
    //     }

    //   </div>

    //   <div className=" col-span-3">
    //    < RightSidebar />

    //   </div>
      
    // </div>
