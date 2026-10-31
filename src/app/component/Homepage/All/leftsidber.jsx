import Link from "next/link";

export default function LeftSidebar({ Catagories, activeId }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Catagories</h2>
      <ul className="flex flex-col gap-2 text-md font-semibold">
        {Catagories.news_category.map((catagory) => (
          <li
            key={catagory.category_id}
            className={`text-black p-2 rounded-md cursor-pointer hover:bg-slate-300 ${
              activeId === catagory.category_id ? "bg-slate-300" : ""
            }`}
          >
            <Link href={`/catagory/${catagory.category_id}`} className="block">
              {catagory.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}




// import Link from 'next/link'
// import React from 'react'

// export default function LeftSidebar({Catagories, activeId}) {
//   return (
//     <div>
//          <h2 className="text-xl font-bold mb-4">All Catagories</h2>
//        <ul className="flex flex-col gap-2 text-md font-semibold">
//        {
//         Catagories.news_category.map((catagory) => (
//           <li key={catagory.category_id} className={`${activeId === catagory.category_id && "bg-slate-200" }
//            text-black  p-2 rounded-md cursor-pointer hover:bg-slate-200`}>
//            <Link href={`/catagory/${catagory.category_id}`} className='block' >{catagory.category_name}</Link>
//           </li>
//         ))
//        }

//        </ul>


//     </div>
//   )
// }
