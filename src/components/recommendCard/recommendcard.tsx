// "use client";
// import Image from "next/image";
// import { FiPlus } from "react-icons/fi";

// //  isme data show hoga
// interface Data {
//   id: number;
//   name: string;
//   calory:string;
//   price:string;
//   image1: string;
//   image2: string;
//   // icon: string;
// }


// const RecommendedCard = ({ RecommendData } : {RecommendData : Data }) => {
//   return (
//     <div className="w-sm rounded-xl bg-white p-5 shadow-lg">
// {/* img first  */}
// <div className="flex gap-4">

//       <Image
//         src={RecommendData.image1}
//         alt={RecommendData.name}
//         width={80}
//         height={80}
//         className="rounded-full"
//       />

//     {/* img sec */}
//     <div>
//        <Image
//         src={RecommendData.image2}
//         alt={RecommendData.name}
//         width={16}
//         height={16}
//         className=""
//         />
//       <h3 className="mt-2 font-bold text-sm text-[#000000]"> {RecommendData.name} </h3>
//       <p className=" text-xs text-[#212529bf] font-bold">{RecommendData.calory}</p>
//     </div>

// </div>
//       <div className="mt-3 flex items-center font-bold text-md justify-between">
//         <p>{RecommendData.price}</p>

//         <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00754A] text-white" onClick={()=> alert('item added')}>
//           <FiPlus  />
//         </button>
//       </div>

//     </div>
//   );
// };

// export default RecommendedCard;


"use client";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";

interface Data {
  id: number;
  name: string;
  calory: string;
  price: string;
  image1: string;
  image2: string;
}

const RecommendedCard = ({ RecommendData }: { RecommendData: Data }) => {
  return (
    <div className="w-sm rounded-xl bg-white p-5 shadow-lg">
      <div className="flex gap-4">
        <Image
          src={RecommendData.image1}
          alt={RecommendData.name}
          width={80}
          height={80}
          className="rounded-full"
        />

        <div>
          <Image
            src={RecommendData.image2}
            alt={RecommendData.name}
            width={16}
            height={16}
          />

          <h3 className="mt-2 text-sm font-bold text-[#000000]">
            {RecommendData.name}
          </h3>

          <p className="text-xs font-bold text-[#212529bf]">
            {RecommendData.calory}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-md font-bold">
        <p>{RecommendData.price}</p>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00754A] text-white"
          onClick={() => alert("item added")}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default RecommendedCard;