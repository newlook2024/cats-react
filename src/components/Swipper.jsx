import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import swiperData from "../data/swiperData";
import paw from "../img/home/number/paw.svg";
import SwipperBtn from "./miniComponents/SwipperBtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Swipper() {
  return (
    <>
      <section className="lg:py-17.5 md:py-14 py-9 bg-white">
        <div className="max-w-[1182] mx-auto px-4">
          <h2 className="text-black1 md:text-4xl text-3xl leading-8 mb-10 font-bold flex justify-center items-center md:mb-14 lg:mb-17.5">
            Номер
          </h2>

          <Swiper
            className="lg:pb-8 md:pb-[70px]"
            modules={[Pagination]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {swiperData.map((i, e) => {
              return (
                <SwiperSlide key={i.id}>
                  <div className="flex flex-col md:flex-row items-center justify-center pt-2">
                    <div className="lg:max-w-[600px] md:max-w-[442px] md:min-h-[326px] flex rounded-lg lg:min-h-[404px] object-cover overflow-hidden">
                      <img
                        className="object-cover"
                        src={i.img}
                        alt="yellow cat"
                      />
                    </div>
                    <div className="lg:py-10 lg:px-24 p-10 md:-translate-x-12 rounded-lg bg-white">
                      <h3 className="text-black1 text-xl leading-[26px] font-medium mb-6 lg:mb-7">
                        Эконом плюс
                      </h3>
                      <ul className="md:mb-7 mb-6 flex md:block flex-col gap-4">
                        <li className="flex md:mb-4 lg:mb-5 gap-2 items-center justify-start">
                          <div className="w-3 h-3 bg-orange rounded-full flex" />
                          <span className="text-black1 leading-[11px] lg:leading-5 md:text-[15px] lg:text-[16px]">
                            Площадь - 0,90 м2
                          </span>
                        </li>
                        <li className="flex md:mb-4 lg:mb-5 gap-2 items-center justify-start">
                          <div className="w-3 h-3 bg-orange rounded-full flex" />
                          <span className="text-black1 leading-5 text-[16px]">
                            Размеры (ШхГхВ) — 90х100х180 см
                          </span>
                        </li>
                        <li className="flex md:mg-4 lg: mb-5 gap-2 items-center justify-start">
                          <div className="w-3 h-3 bg-orange rounded-full flex" />
                          <span className="text-black1 leading-5 text-[16px]">
                            Цена за сутки: 200₽
                          </span>
                        </li>
                      </ul>
                      <button className="flex pr-2 pl-7 py-2 leading-4 justify-end items-center gap-5 text-[#FFFDFB] font-semibold bg-[#FF7236] rounded-3xl">
                        Забронировать
                        <img className="w-9 h-9 flex" src={paw} alt="paw" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwipperBtn />
          </Swiper>
        </div>
      </section>
    </>
  );
}
