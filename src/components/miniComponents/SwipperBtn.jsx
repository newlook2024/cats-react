import { useSwiper } from "swiper/react";

export default function swipperBtn() {

    let swiper = useSwiper()

  return (
    <>
      <div className="lg:flex hidden items-center gap-2.5 relative z-50 justify-end top-7 w-[80%]">
        <button
          onClick={() => swiper.slidePrev()}
          className="before rounded-full w-9 h-9 flex items-center justify-center"
        >
          <svg
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00049 1L1.00049 5L5.00049 9"
              stroke="#FF7236"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={() => swiper.slideNext()} className="after rounded-full w-9 h-9 flex items-center justify-center">
          <svg
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00049 9L5.00049 5L1.00049 1"
              stroke="#FF7236"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
