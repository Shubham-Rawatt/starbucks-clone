"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay, EffectFade,} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const banners = [
  {
    title: "New this season",
    subtitle:
      "Cozy up with new handcrafted beverages and protein treats",
    button: "Buy Now",
    image: "/images/banner1.png",
    subimg:"/images/cofee1.png",
    textColor: "text-black",
  },
  {
    txt:" Starbucks",
    title: "Beverage Subscription",
    subtitle:
      "Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply.",
    button: "Know More",
    image: "/images/banner2.png",
     subimg:"/images/cofee2.png",
    textColor: "text-white",
  },
  {
    title: "Sip More, Spend Less!",
    subtitle:"Get 5 beverages at ₹1299!",
    button: "Know More",
    image: "/images/banner3.jpg",
    subimg:"/images/cofee3.png",
    textColor:"text-dark",
  },
];

const Hero = () => {
  return (
    <section className="relative mt-6 px-4">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={600}
        navigation={{
          nextEl: ".starbucks-next",
          prevEl: ".starbucks-prev",
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mx-auto max-w-5xl shadow-lg/20"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.title}>
            <div
              className="relative h-55 overflow-hidden rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: `url('${banner.image}')`,
              }}
            >
              {/* Coffee */}
              <div className="absolute bottom-0 left-2">
                <Image
                  src={banner.subimg}
                  alt="Cofee"
                  width={145}
                  height={210}
                  className="h-44 w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div
                className={`ml-26 max-w-170 pt-8 ${banner.textColor}`}
              >
                <p className="text-sm font-semibold">
                {banner.txt}
                </p> 

                <h2 className="mt-3 text-2xl font-bold">
                  {banner.title}
                </h2>

                <p className="mt-3 max-w-150 text-sm">
                  {banner.subtitle}
                </p>
              </div>

              {/* T&C */}
              <p
                className={`absolute right-5 top-3 text-[12px] font-bold ${banner.textColor}`}
              >
                *T&C Apply
              </p>

              {/* Button */}
              <button className="absolute bottom-7 right-5 rounded-full bg-[#00754a] px-8 py-3 text-sm font-semibold text-white hover:bg-[#006241]">
                {banner.button}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;