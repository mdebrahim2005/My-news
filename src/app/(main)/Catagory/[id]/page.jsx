import LeftSidebar from "@/app/component/Homepage/All/leftsidber";
import RightSidebar from "@/app/component/Homepage/All/rightsidber";
import { getCategories, getNewsByCategory } from "@/lib/api";

export default async function NewsCatagorie({ params }) {
  const { id } = await params;

  const Catagories = await getCategories();
  const news = await getNewsByCategory(id);

  const activeCategory = Catagories.news_category.find(
    (c) => c.category_id === id
  );

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <LeftSidebar Catagories={Catagories} activeId={id} />
      </div>

      <div className="col-span-6">
        <h2 className="text-2xl font-bold mb-4">
          {activeCategory?.category_name || "News"}
        </h2>
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





// // import LeftSidebar from '@/app/component/Homepage/All/leftsidber';
// // import RightSidebar from '@/app/component/Homepage/All/rightsidber';
// import LeftSidebar from '@/app/component/Homepage/All/leftsidber';
// import React from 'react'


// const NewsCatagorie = async({params}) => {
// const {id} = await params;
  

//       const Catagories = await getapi();
//       console.log(Catagories.news_category , "catagories");
//       const news = await getnewsapi(id);
//       console.log(news, "news");

//   return (
//          <div>

//             <LeftSidebar Catagories={Catagories} activeId={id} />
//          </div>

//   )

// }

// export default NewsCatagorie;