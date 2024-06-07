import { useState } from "react";
import headerLogo from "../img/header/headerLogo.svg";
import {Link} from "react-router-dom"

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);
  function menuOpen() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false)
  }
  return (
    <>
      <header className="md:pt-3 py-3 m:pb-7 bg-white">
        <div className="max-w-[1192px] px-4 mx-auto flex items-center justify-between">
          <Link to="/" className="md:w-[62px] w-[] md:h-[52px] flex">
            <img src={headerLogo} alt="header logo" />
          </Link>
          <button
            onClick={menuOpen}
            id="burger"
            className="w-5 h-3 flex md:hidden"
          >
            <svg
              width={24}
              height={16}
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H23M1 8H23M1 15H23"
                stroke="#1A212F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ul className="md:flex hidden justify-end gap-5">
            <li>
              <Link to="About" 
                className="leading-4 font-semibold text-[16px] text-black1"
              >
                Почему мы?
              </Link>
            </li>
            <li>
              <Link to="Last"
                className="leading-4 font-semibold text-[16px] text-black1"
              >
                Номера
              </Link>
            </li>
            <li>
              <Link to="Last"
                className="leading-4 font-semibold text-[16px] text-black1"
              >
                Отзывы
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="leading-4 font-semibold text-[16px] text-black1"
              >
                Как нас найти
              </a>
            </li>
          </ul>
          <div
            id="menu"
            className={`fixed px-4 py-3 top-0 items-start bg-orange w-full min-h-full ${
              isOpen ? "left-0" : "left-full"
            } duration-300 md:hidden block`}
          >
            <div className="flex w-full items-center mb-12 justify-between">
              <Link to="/" className="w-11 h-9 flex">
                <img src={headerLogo} alt="header logo" />
              </Link>
              <button
                id="close" onClick={closeMenu}
                className="w-3 h-3 flex items-center hover:bg-transparent justify-between"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15 15M15 1L1 15"
                    stroke="#1A212F"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-6 mb-10">
              <li>
                <Link
                  to="/About"
                  className="leading-4 font-semibold text-xl text-black1"
                >
                  Почему мы?
                </Link>
              </li>
              <li>
                <Link to="Last"
                  className="leading-4 font-semibold text-xl text-black1"
                >
                  Номера
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="leading-4 font-semibold text-xl text-black1"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="leading-4 font-semibold text-xl text-black1"
                >
                  Как нас найти
                </a>
              </li>
            </ul>
            <a
              href="tel:8 (800) 333-55-99"
              className="text-black1 mb-6 flex text-[16px] leading-[18px]"
            >
              8 (800) 333-55-99
            </a>
            <div className="flex gap-5 justify-start items-center">
              <a href="https://facebook.com" className="w-5 h-5 flex">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={11} cy={11} r={11} fill="#FFFDFB" />
                  <path
                    d="M22 11C22 4.9258 17.0742 0 11 0C4.9258 0 0 4.9258 0 11C0 17.0742 4.9258 22 11 22C11.0646 22 11.1289 21.9987 11.1934 21.9975V13.4344H8.83008V10.6803H11.1934V8.6535C11.1934 6.30298 12.6283 5.02365 14.725 5.02365C15.7291 5.02365 16.5921 5.09851 16.8438 5.13191V7.58852H15.3979C14.2572 7.58852 14.0363 8.13066 14.0363 8.92609V10.6803H16.7639L16.4084 13.4344H14.0363V21.575C18.6342 20.2569 22 16.021 22 11Z"
                    fill="#1A212F"
                  />
                </svg>
              </a>
              <a href="https://instagram.com" className="w-5 h-5 flex">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={11} cy={11} r={11} fill="#FFFDFB" />
                  <path
                    d="M13.1055 11C13.1055 12.1628 12.1628 13.1055 11 13.1055C9.83716 13.1055 8.89453 12.1628 8.89453 11C8.89453 9.83716 9.83716 8.89453 11 8.89453C12.1628 8.89453 13.1055 9.83716 13.1055 11Z"
                    fill="#1A212F"
                  />
                  <path
                    d="M15.924 7.27487C15.8227 7.00061 15.6613 6.75236 15.4515 6.54859C15.2477 6.33879 14.9996 6.17732 14.7252 6.07611C14.5026 5.98967 14.1683 5.88678 13.5524 5.85874C12.8863 5.82836 12.6865 5.82182 11 5.82182C9.31331 5.82182 9.11357 5.8282 8.44756 5.85858C7.83173 5.88678 7.49721 5.98967 7.27481 6.07611C7.00038 6.17732 6.75214 6.33879 6.54854 6.54859C6.33873 6.75236 6.17726 7.00044 6.07588 7.27487C5.98944 7.49743 5.88655 7.83195 5.85852 8.44778C5.82814 9.1138 5.82159 9.31353 5.82159 11.0002C5.82159 12.6867 5.82814 12.8865 5.85852 13.5527C5.88655 14.1685 5.98944 14.5028 6.07588 14.7254C6.17726 14.9998 6.33856 15.2479 6.54837 15.4517C6.75214 15.6615 7.00021 15.823 7.27464 15.9242C7.49721 16.0108 7.83173 16.1137 8.44756 16.1417C9.11357 16.1721 9.31314 16.1785 10.9998 16.1785C12.6867 16.1785 12.8864 16.1721 13.5523 16.1417C14.1681 16.1137 14.5026 16.0108 14.7252 15.9242C15.2761 15.7117 15.7115 15.2763 15.924 14.7254C16.0104 14.5028 16.1133 14.1685 16.1415 13.5527C16.1719 12.8865 16.1782 12.6867 16.1782 11.0002C16.1782 9.31353 16.1719 9.1138 16.1415 8.44778C16.1134 7.83195 16.0106 7.49743 15.924 7.27487ZM11 14.2435C9.20857 14.2435 7.75636 12.7915 7.75636 11.0001C7.75636 9.20863 9.20857 7.75659 11 7.75659C12.7913 7.75659 14.2435 9.20863 14.2435 11.0001C14.2435 12.7915 12.7913 14.2435 11 14.2435ZM14.3717 8.38635C13.9531 8.38635 13.6137 8.04696 13.6137 7.62835C13.6137 7.20974 13.9531 6.87036 14.3717 6.87036C14.7903 6.87036 15.1297 7.20974 15.1297 7.62835C15.1295 8.04696 14.7903 8.38635 14.3717 8.38635Z"
                    fill="#1A212F"
                  />
                  <path
                    d="M11 0C4.9258 0 0 4.9258 0 11C0 17.0742 4.9258 22 11 22C17.0742 22 22 17.0742 22 11C22 4.9258 17.0742 0 11 0ZM17.2783 13.6041C17.2478 14.2765 17.1408 14.7356 16.9847 15.1374C16.6566 15.9859 15.9859 16.6566 15.1374 16.9847C14.7358 17.1408 14.2765 17.2476 13.6043 17.2783C12.9307 17.309 12.7156 17.3164 11.0002 17.3164C9.28461 17.3164 9.0696 17.309 8.39586 17.2783C7.72363 17.2476 7.2644 17.1408 6.86275 16.9847C6.44112 16.8261 6.05943 16.5775 5.74388 16.2561C5.42262 15.9407 5.17404 15.5589 5.01543 15.1374C4.85933 14.7358 4.75241 14.2765 4.72186 13.6043C4.69081 12.9306 4.68359 12.7154 4.68359 11C4.68359 9.28461 4.69081 9.06943 4.72169 8.39586C4.75224 7.72346 4.85899 7.2644 5.01509 6.86258C5.17371 6.44112 5.42245 6.05927 5.74388 5.74388C6.05927 5.42245 6.44112 5.17387 6.86258 5.01526C7.2644 4.85916 7.72346 4.75241 8.39586 4.72169C9.06943 4.69098 9.28461 4.68359 11 4.68359C12.7154 4.68359 12.9306 4.69098 13.6041 4.72186C14.2765 4.75241 14.7356 4.85916 15.1374 5.01509C15.5589 5.17371 15.9407 5.42245 16.2563 5.74388C16.5775 6.05943 16.8263 6.44112 16.9847 6.86258C17.141 7.2644 17.2478 7.72346 17.2785 8.39586C17.3092 9.06943 17.3164 9.28461 17.3164 11C17.3164 12.7154 17.3092 12.9306 17.2783 13.6041Z"
                    fill="#1A212F"
                  />
                </svg>
              </a>
              <a href="https://vk.com/" className="w-5 h-5 flex">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                    fill="#1A212F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5846 15.8244H11.448C11.448 15.8244 11.7088 15.7958 11.8419 15.6522C11.9645 15.5205 11.9606 15.273 11.9606 15.273C11.9606 15.273 11.9437 14.1145 12.4814 13.9439C13.0114 13.7759 13.692 15.0636 14.4134 15.5587C14.9589 15.9334 15.3734 15.8513 15.3734 15.8513L17.3023 15.8244C17.3023 15.8244 18.3114 15.7622 17.8329 14.9689C17.7937 14.904 17.5543 14.382 16.3988 13.3094C15.1893 12.1868 15.3513 12.3684 16.8082 10.4266C17.6955 9.24396 18.0502 8.52198 17.9394 8.21275C17.8337 7.91823 17.1811 7.99608 17.1811 7.99608L15.0093 8.00961C15.0093 8.00961 14.8483 7.98764 14.7289 8.05902C14.6122 8.12902 14.5371 8.29217 14.5371 8.29217C14.5371 8.29217 14.1934 9.2073 13.7349 9.98556C12.7679 11.6278 12.3812 11.7144 12.2231 11.6125C11.8555 11.3748 11.9472 10.6577 11.9472 10.1483C11.9472 8.55688 12.1886 7.89333 11.4772 7.72156C11.2411 7.6645 11.0674 7.62685 10.4637 7.62077C9.68872 7.61273 9.03282 7.62312 8.66143 7.80509C8.41436 7.92607 8.22377 8.19569 8.33985 8.21118C8.48338 8.2304 8.80849 8.29883 8.98085 8.53355C9.20341 8.8363 9.19557 9.51633 9.19557 9.51633C9.19557 9.51633 9.32342 11.3897 8.89693 11.6225C8.60417 11.7821 8.20259 11.4562 7.3404 9.96634C6.89862 9.20318 6.56508 8.35962 6.56508 8.35962C6.56508 8.35962 6.50077 8.20197 6.38606 8.11765C6.24683 8.01549 6.05232 7.98294 6.05232 7.98294L3.98852 7.99647C3.98852 7.99647 3.6787 8.0051 3.56497 8.13981C3.46379 8.25962 3.55693 8.50747 3.55693 8.50747C3.55693 8.50747 5.17268 12.2876 7.00216 14.1926C8.67967 15.9391 10.5846 15.8244 10.5846 15.8244Z"
                    fill="#FFFDFB"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
