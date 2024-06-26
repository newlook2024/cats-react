import { useState } from "react";
import Cat from "../img/number/cat.png";
import StandingCat from "../img/number/standingCat.png";
import SleepingCat from "../img/number/sleepingCat.png";
import MainCat from "../img/katalog/6.png";
import paw from "../img/home/number/paw.svg";
import Swipper from "../components/Swipper";
import Map from "../components/Map";
import { data } from "autoprefixer";

export default function LastPage() {
  const [ChangeUrl, setChangeUrl] = useState(MainCat);

  function ImgUrlChange(url) {
    setChangeUrl(url);
    console.log(ChangeUrl);
  }

  let imgUrls = [Cat, StandingCat, SleepingCat];

  return (
    <>
      <section className="lg:pt-10 md:pt-8 pt-7 pb-6 bg-white md:pb-14 lg:pb-17.5">
        <div className="max-w-[1212px] px-4 mx-auto flex md:flex-row flex-col justify-start md:items-start gap-10 md:gap-[70px]">
          <div className="flex md:block items-center justify-center w-full md:max-w-[354px] lg:max-w-[600px]">
            <div className="flex items-cente lg:flex-row flex-col-reverse md:items-start md:justify-start gap-7">
              <div className="flex flex-row lg:flex-col gap-5 lg:gap-7">
                {imgUrls.map((ImgUrlData, index) => {
                  return (
                    <img
                      key={index}
                      onClick={() => ImgUrlChange(ImgUrlData)}
                      id="changeImg"
                      className="lg:max-w-[70px] w-[104px] object-cover rounded max-h-[78px] flex lg:min-h-[112px] lg:w-full"
                      src={ImgUrlData}
                      alt="cat"
                    />
                  );
                })}
              </div>
              <img
                id="mainImg"
                src={ChangeUrl}
                alt="big cat png"
                className="lg:max-w-[500px] lg:min-w-[500px] max-w-full object-cover rounded md:max-w-[354px] w-full min-h-[288px] max-h-[288px] lg:min-h-[396px] flex"
              />
            </div>
          </div>
          <div className="md:max-w-[300px] max-w-none">
            <h1 className="text-black1 text-3xl leading-8 mb-7 md:text-4xl font-bold md:mb-10">
              Супер-Люкс
            </h1>
            <ul className="flex flex-col gap-6 mb-4 md:mb-5">
              <li className="text-black1 text-[16px] leading-3">
                Размеры (ШхГхВ) - 180х160х180 см
              </li>
              <li className="text-black1 text-[16px] leading-3">
                Площадь - 2,88 м2
              </li>
              <li className="text-black1 text-[16px] leading-3">
                Оснащение номера
              </li>
            </ul>
            <ul className="flex flex-col gap-3 mb-6 md:mb-7">
              <li className="flex leading-5 items-center gap-2 justify-start">
                <div className="w-4 h-3">
                  <svg
                    width={16}
                    height={12}
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9954 3.3624C15.903 1.47693 14.4576 0 12.7047 0H3.29498C1.54228 0 0.0970314 1.47693 0.00468751 3.36237C0.0015625 3.4248 0 10.3773 0 10.3773C0 11.2721 0.675001 12 1.50469 12H14.495C15.3248 12 16 11.2721 16 10.3773C16 10.3773 15.9985 3.42517 15.9954 3.3624ZM3.29498 0.750004H12.7047C13.9626 0.750004 15.0197 1.71375 15.2554 3.00713H14.5399C14.3158 2.12209 13.5737 1.49987 12.7049 1.49987H8.14773C7.95567 1.49987 8.49555 1.66779 8.49555 1.87486C8.49555 2.08193 7.95567 2.24984 8.14773 2.24984H12.7049C13.1885 2.24984 13.6103 2.5535 13.8027 3.00709H13.4564C12.5889 3.00709 11.8775 3.7413 11.8288 4.66366C10.613 4.2499 9.30636 4.04297 7.99992 4.04297C6.69345 4.04297 5.38698 4.24987 4.17129 4.66363C4.1226 3.74129 3.41104 3.00709 2.54335 3.00709H2.1971C2.38941 2.55354 2.81129 2.24984 3.29491 2.24984H8.14773C8.3398 2.24984 8.49555 2.08193 8.49555 1.87486C8.49555 1.66779 8.3398 1.49987 8.14773 1.49987H3.29491C2.4261 1.49987 1.68394 2.12209 1.45988 3.00713H0.744658C0.980283 1.71375 2.03729 0.750004 3.29498 0.750004ZM11.8261 5.45181V6.72524C11.8261 7.28085 11.4067 7.73285 10.8911 7.73285H5.10854C4.5932 7.73285 4.17395 7.28081 4.17395 6.72524V5.45181C6.58804 4.57165 9.41174 4.57165 11.8261 5.45181ZM15.3044 10.3773C15.3044 10.8585 14.9413 11.25 14.495 11.25H1.50469C1.05856 11.25 0.695658 10.8585 0.695658 10.3773V10.1235V9.74847V9.37349V3.75713H2.54332C3.05888 3.75713 3.47829 4.20917 3.47829 4.7647V6.72521C3.47829 7.69441 4.20963 8.48282 5.10854 8.48282H11.4286C11.8288 8.48282 12.5217 8.00893 12.5217 6.72524V4.76474C12.5217 4.20917 12.941 3.75716 13.4563 3.75716H15.3043L15.3044 10.3773Z"
                      fill="#777777"
                    />
                  </svg>
                </div>
                Лежак
              </li>
              <li className="flex leading-5 items-center gap-2 justify-start">
                <div className="w-4 h-3">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8627 7.1665L9.18872 0.492432C8.87146 0.174927 8.44934 0 8 0C7.55066 0 7.12854 0.174927 6.81152 0.49231L0.137329 7.1665C0.0493164 7.25439 0 7.37366 0 7.49805C0 7.62231 0.0494385 7.74158 0.137451 7.82959C0.137451 7.82959 0.363037 8.05493 0.639526 8.33142C1.17004 8.86206 1.90076 8.98718 2.5105 8.80786V15.5312C2.5105 15.7902 2.72034 16 2.97925 16H13.0209C13.2797 16 13.4896 15.7902 13.4896 15.5312V8.80786C14.0992 8.98718 14.8301 8.86206 15.3604 8.33142C15.637 8.05493 15.8625 7.82959 15.8625 7.82959C15.9504 7.74158 16 7.62244 16 7.49805C16 7.37366 15.9507 7.25439 15.8627 7.1665ZM12.5521 8.19421V13.0542H10.4771V10.0083C10.4771 8.64026 9.37061 7.53125 8 7.53125C6.63171 7.53125 5.52295 8.6377 5.52295 10.0083V13.0542H3.44788V8.19421L8 3.64209L12.5521 8.19421ZM3.44788 13.9917H5.52295V15.0625H3.44788V13.9917ZM6.46045 15.0625V10.0083C6.46045 9.15967 7.14636 8.46875 8 8.46875C8.85046 8.46875 9.53955 9.15649 9.53955 10.0083V15.0625H6.46045ZM10.4771 15.0625V13.9917H12.5521V15.0625H10.4771ZM14.6974 7.66858C14.3262 8.04004 13.7244 8.04053 13.3525 7.66858C13.3496 7.66565 13.3464 7.6626 13.3434 7.65967L8.33142 2.64771C8.14844 2.4646 7.85156 2.4646 7.66858 2.64771L2.65662 7.65967C2.65344 7.6626 2.65039 7.66553 2.64746 7.66858C2.27612 8.04004 1.67432 8.04065 1.30249 7.66858C1.24268 7.60864 1.18518 7.55115 1.13184 7.4978L7.47461 1.15503C7.76416 0.865112 8.23511 0.86438 8.52563 1.15515L14.8682 7.4978C14.8148 7.55115 14.7573 7.60864 14.6974 7.66858Z"
                      fill="#777777"
                    />
                  </svg>
                </div>
                Домик
              </li>
              <li className="flex leading-5 items-center gap-2 justify-start">
                <div className="w-4 h-4">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.90277 13.4917C8.4454 13.4163 8.96692 13.2743 9.4588 13.0742L8.73799 13.4917H7.90277Z"
                      fill="#777777"
                      stroke="black"
                    />
                  </svg>
                </div>
                Игровой комплекс - 3 яруса
              </li>
              <li className="flex leading-5 items-center gap-2 justify-start">
                <div className="w-4 h-3">
                  <svg
                    width={14}
                    height={16}
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2277 13.6119H8.89656V2.38817H10.591V6.82783C10.0818 6.94627 9.69958 7.42672 9.69958 8.00003C9.69958 8.66196 10.2089 9.20049 10.8351 9.20049C11.4611 9.20049 11.9705 8.66199 11.9705 8.00003C11.9705 7.42672 11.5883 6.94627 11.0792 6.82783V2.38817H12.5675C12.9933 2.38817 13.3398 2.02189 13.3398 1.57169V0.816485C13.3398 0.366281 12.9933 0 12.5674 0H1.43256C1.00673 0 0.660269 0.366281 0.660269 0.816485V1.57165C0.660269 2.02189 1.00673 2.38814 1.43256 2.38814H5.10344V13.6119H0.772294C0.346457 13.6119 0 13.9781 0 14.4283V15.1835C0 15.6338 0.346457 16 0.772294 16H13.2277C13.6536 16 14 15.6337 14 15.1835V14.4283C14 13.9781 13.6536 13.6119 13.2277 13.6119ZM11.4823 8.00003C11.4823 8.37736 11.1919 8.68436 10.835 8.68436C10.4781 8.68436 10.1877 8.37736 10.1877 8.00003C10.1877 7.62271 10.4781 7.31571 10.835 7.31571C11.1919 7.31571 11.4823 7.62271 11.4823 8.00003ZM1.43256 1.57169V0.816485C1.43256 0.650876 1.67148 0.59375 1.82812 0.59375H12.4034C12.56 0.59375 12.6875 0.650876 12.6875 0.816485V1.57165C12.6875 1.73726 12.56 1.78125 12.4034 1.78125H1.82812C1.67148 1.78128 1.43256 1.7373 1.43256 1.57169ZM5.73438 11.78H6.00781C6.00781 11.78 6.2519 11.6645 6.2519 11.522C6.2519 11.3794 6.14261 11.2639 6.00781 11.2639H5.73438V9.43209H8.30999C8.44483 9.43209 9.26954 9.28545 8.62165 9.1429C9.26954 9.00034 8.44483 8.91596 8.30999 8.91596H5.73438V7.08407H7.99223C8.12703 7.08407 7.74813 6.96856 7.74813 6.82601C7.74813 6.68345 8.12703 6.56794 7.99223 6.56794L5.73438 6.56794V2.38817L8.30999 2.38814V4.21996L5.52138 4.21996C5.38657 4.21996 5.52138 4.19291 5.52138 4.33547C5.52138 4.73609 5.37864 4.73612 5.37864 4.73612L8.30999 4.73609V6.56791L7.99223 6.56794C7.85739 6.56794 7.74813 6.68345 7.74813 6.82601C7.74813 6.96856 7.85739 7.08407 7.99223 7.08407L8.30999 7.08404V9.17396V11.2639L6.00781 11.2639C5.873 11.2639 6.2519 11.3794 6.2519 11.522C6.2519 11.6645 5.873 11.78 6.00781 11.78L8.30999 11.78V13.6118L5.73438 13.6119V11.78ZM13.4029 15.1836C13.4029 15.3492 13.1566 15.3906 13 15.3906H0.909098C0.752452 15.3906 0.625 15.3492 0.625 15.1836V14.4284C0.625 14.2628 0.752452 14.2188 0.909098 14.2188H13.1187C13.2754 14.2188 13.4028 14.2628 13.4028 14.4284L13.4029 15.1836Z"
                      fill="#777777"
                    />
                  </svg>
                </div>
                Когтеточка
              </li>
            </ul>
            <h3 className="text-black1 md:mb-7 mb-7 text-[16px] leading-5">
              Цена за сутки:
              <span className="text-[18px] leading-5 text-black1 font-medium">
                600₽
              </span>
            </h3>
            <button className="flex pr-2 pl-7 py-2 md:ml-0 leading-4 justify-end items-center gap-5 text-[#FFFDFB] font-semibold bg-[#FF7236] rounded-3xl">
              Забронировать
              <img className="w-9 h-9 flex" src={paw} alt="paw" />
            </button>
          </div>
        </div>
      </section>
      <Swipper />
      <Map />
    </>
  );
}
