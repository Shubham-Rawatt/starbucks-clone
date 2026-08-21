"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const categories = [
  {
    name: "New Launch",
    image: "/images/slide-1.jpg",
  },
  {
    name: "Best Seller",
    image: "/images/bestseller.webp",
  },
  {
    name: "Drinks",
    image: "/images/drinks.webp",
  },
  {
    name: "Food",
    image: "/images/food.webp",
  },
  {
    name: "Merchandise",
    image: "/images/merchandise.webp",
  },
  {
    name: "Coffee At Home",
    image: "/images/CoffeeAtHome.webp",
  },
  {
    name: "Ready to Eat",
    image: "/images/ReadyToEat.webp",
  },
  {
    name: "Power Picks",
    image: "/images/power.jpg",
  },
];

const CategorySlider = () => {
  return (
    <div className="w-30 rounded-xl bg-white p-4">

      <Swiper
        direction="vertical"
        modules={[Scrollbar, Mousewheel]}
        scrollbar={{
        draggable: true,}}
        mousewheel={true}
        slidesPerView={4}
        spaceBetween={12}
        className="h-100">
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <div className="flex flex-col items-center rounded-lg bg-white p-2">

              {/* Image */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <p className="mt-2 text-center text-[10px] font-semibold text-gray-700">
                {category.name}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default CategorySlider;