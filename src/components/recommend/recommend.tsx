// "use client";

// import RecommendedCard from "../recommendCard/recommendcard";
// import { RecommendData } from "@/data/recommendData";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import "swiper/css";


// const Recommended = () => {
//   return (
//     <section className="mt-10">
//       <h5 className="text-[#00754a] font-bold px-36 text-md">Recommended</h5>
//       <div className="bg-[#f2f0eb] px-10 py-10">
//         <div className="relative mx-auto max-w-6xl">

//           {/* Left Button */}
//           <button
//             className="recommended-prev absolute -left-1 top-1/2 z-10
//             flex h-9 w-9 -translate-y-1/2 items-center justify-center
//             rounded-full bg-white shadow-lg
//             transition-transform duration-300 hover:scale-105"
//           >
//             <FiChevronLeft className="text-xl text-[#00754a]" />
//           </button>

//           {/* Right Button */}
//           <button
//             className="recommended-next absolute -right-1 top-1/2 z-10
//             flex h-9 w-9 -translate-y-1/2 items-center justify-center
//             rounded-full bg-white shadow-lg
//             transition-transform duration-300 hover:scale-105"
//           >
//             <FiChevronRight className="text-xl text-[#00754a]" />
//           </button>

//           <Swiper
//             modules={[Navigation]}
//             navigation={{
//               prevEl: ".recommended-prev",
//               nextEl: ".recommended-next",
//             }}
//             spaceBetween={20}
//             slidesPerView={3}
//           >
//             {RecommendData.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <RecommendedCard RecommendData={item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Recommended;

"use client";

import RecommendedCard from "../recommendCard/recommendcard";
import { RecommendData } from "@/data/recommendData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

const Recommended = () => {
  return (
    <section className="mt-10">
      <h5 className="px-36 text-md font-bold text-[#00754a]">
        Recommended
      </h5>

      <div className="bg-[#f2f0eb] px-10 py-10">
        <div className="relative mx-auto max-w-6xl">

          {/* Previous Button */}
          <button
            type="button"
            className="recommended-prev absolute -left-1 top-1/2 z-10
            flex h-9 w-9 -translate-y-1/2 items-center justify-center
            rounded-full bg-white shadow-lg
            transition-transform duration-300 hover:scale-105"
          >
            <FiChevronLeft className="text-xl text-[#00754a]" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="recommended-next absolute -right-1 top-1/2 z-10
            flex h-9 w-9 -translate-y-1/2 items-center justify-center
            rounded-full bg-white shadow-lg
            transition-transform duration-300 hover:scale-105"
          >
            <FiChevronRight className="text-xl text-[#00754a]" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".recommended-prev",
              nextEl: ".recommended-next",
            }}
            spaceBetween={20}
            slidesPerView={3}
          >
            {RecommendData.map((item) => (
              <SwiperSlide key={item.id}>
                <RecommendedCard RecommendData={item} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Recommended;