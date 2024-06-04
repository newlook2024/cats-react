import footerLogo from "../img/header/headerLogo.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-white pt-3 pb-5">
        <div className="w-full">
          <div className="flex md:flex-row flex-col md:items-center justify-between max-w-[992px] mx-auto px-4 pb-3">
            <a
              target="_blank"
              href="./index.html"
              className="w-[62px] md:mb-0 mb-9 h-[52px] flex"
            >
              <img src={footerLogo} alt="header logo" />
            </a>
            <ul className="md:flex grid grid-cols-2 justify-end gap-5">
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="leading-4 font-semibold text-[16px] text-black1"
                >
                  Почему мы?
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="leading-4 font-semibold text-[16px] text-black1"
                >
                  Номера
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="leading-4 font-semibold text-[16px] text-black1"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="leading-4 font-semibold text-[16px] text-black1"
                >
                  Как нас найти
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="max-w-[992px] pl-4 mx-auto pt-5 flex flex-col md:flex-row gap-5 justify-between md:items-center">
            <span className="text-[#8F8F8F] text-[9px] leading-[9px]">
              © 2019 Все права защищены
            </span>
            <span className="text-[#8F8F8F] text-[9px] leading-[9px]">
              © Политика конфиденциальности
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
