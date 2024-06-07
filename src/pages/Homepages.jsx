import Header from "../components/Header";
import Swipper1 from "../components/Swipper1";
import Swipper from "../components/Swipper";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { Fragment } from "react";
import cardsInfo from "../data/cardsInfo"

import paw from "../img/home/hero/paw.svg";

export default function Homepages() {
  return (
    <Fragment>
      {/* HERO */}
      <section className="lg:py-[153px] z-10 md:pt-36 pt-12 mb-9 md:mb-0 pb-60 md:pb-[540px] bg_image">
        <div className="max-w-[1092px] mx-auto px-4">
          <span className="text-black1 md:text-3.5 text-xs lg:leading-4 justify-center flex lg:justify-start md:mb-4 mb-3 lg:mb-3">
            Санкт-Петербург
          </span>
          <h1 className="text-[62px] md:leading-[62px] leading-[52px] text-center lg:text-left font-bold text-black1 mb-5 md:mb-3">
            Котейка
          </h1>
          <p className="text-black1 md:text-xl mb-10 md:leading-6 leading-5 text-center lg:text-left font-medium">
            Уютная гостиница для котов и кошек
          </p>
          <button className="flex pr-2 pl-7 py-2 leading-4 justify-end items-center gap-5 text-black1 w-[206px] lg:mx-0 mx-auto font-semibold bg-white rounded-3xl">
            Забронировать
            <img className="w-9 h-9 flex" src={paw} alt="paw" />
          </button>
        </div>
      </section>
      {/* HERO */}
      {/* CARDS SECTION */}
      <section className="relative bg-white lg:py-17.5 py-9 md:py-14">
        <div className="max-w-[1192px] mx-auto px-4">
          <h2 className="md:text-4xl text-3xl leading-8 mb-10 font-bold text-black1 text-center md:mb-16 lg:mb-17.5">
            Почему мы?
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 gap-x-7">
            {/* CARD */}

            {cardsInfo.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="max-w-[370px] mx-auto w-full bg-white p-7 rounded-lg"
                  style={{ boxShadow: "0px 0px 25px 0px #d0d0d040" }}
                >
                  <div className="rounded-full lg:w-[91px] w-16 h-16 lg:h-[91px] md:w-[75px] md:h-[75px] bg-orange flex items-center justify-center mb-7 lg:mb-9">
                    <img src={item.img} alt="svg" />
                  </div>
                  <h3 className="text-black1 md:text-2xl text-xl font-medium mb-5">
                    {item.title}
                  </h3>
                  <p className="text-black1 max-w-[291px]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CARDS SECTION */}
      <Swipper />
      <Swipper1 />
      <Map />
    </Fragment>
  );
}
