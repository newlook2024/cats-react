import { useCallback, useEffect, useState } from "react";
import Map from "../components/Map";
import data from "../data/katalogData";
import paw from "../img/home/number/paw.svg";
import { checkData, checkData2 } from "../data/checkboxData";

export default function NumberPages() {
  const [visible, setVisible] = useState(false);
  const [cardData, setCardData] = useState(data);
  // const [filteredData, setFilteredData] = useState([]);
  const [prevData, setPrevData] = useState([]);

  const [checkboxData, setcheckboxData] = useState([
    {
      title: "0,90 м2",
      id: 1,
      isCheacked: false,
    },
    {
      title: "0,63 м2",
      id: 2,
      isCheacked: false,
    },
    {
      title: "1,13 м2",
      id: 3,
      isCheacked: false,
    },
    {
      title: "1,56 м2",
      id: 4,
      isCheacked: false,
    },
    {
      title: "2,56 м2",
      id: 5,
      isCheacked: false,
    },
    {
      title: "2,88 м2",
      id: 6,
      isCheacked: false,
    },
  ]);

  const [equipmentData, setEquipmentData] = useState([
    {
      title: "Пустой номер",
      id: 1,
      isCheacked: false,
    },
    {
      title: "Лежак",
      id: 2,
      isCheacked: false,
    },
    {
      title: "Когтеточка",
      id: 3,
      isCheacked: false,
    },
    {
      title: "Игровой-комплекс",
      id: 4,
      isCheacked: false,
    },
    {
      title: "Домик",
      id: 5,
      isCheacked: false,
    },
  ]);

  function filterIsOpen() {
    setVisible(!visible);
  }

  function checkboxDataIschecked(info) {
    setcheckboxData((prewData) =>
      prewData.map((item) => {
        if (item.id === info.id) {
          return { ...item, isCheacked: !item.isCheacked };
        }
        return item;
      })
    );

    if (!info.isCheacked) {
      filterData(info);
    } else {
      deleteFilterData(info);
    }
  }

  const filterData = useCallback(
    (info) => {
      const filteredData = data.filter(
        (dataItem) => info.title === dataItem.square_for_filter
      );

      setPrevData((prev) => {
        const newData = [...prev, ...filteredData];
        setCardData(newData.length ? newData : filteredData);
        console.log(newData);
        return newData;
      });
    },
    [data]
  );

  const deleteFilterData = useCallback(
    (info) => {
      const filteredData = prevData.filter(
        (dataItem) =>
          info.title.toLowerCase() !== dataItem.square_for_filter.toLowerCase()
      );
      setPrevData(filteredData);
      setCardData(filteredData);
    },
    [prevData]
  );

  function equipmentIschecked(info) {
    setEquipmentData((prevData) =>
      prevData.map((item) => {
        // Highlighted: Added 'return' keyword
        if (item.id === info.id) {
          return { ...item, isCheacked: !item.isCheacked };
        }
        return item;
      })
    );

    if (!info.isCheacked) {
      equipmentFilterData(info);
    } else {
      equipmentDeleteFilterData(info);
    }
  }

  const equipmentFilterData = useCallback(
    (info) => {
      const filteredData = data.filter(
        (dataItem) => info.title === dataItem.number
      );

      setPrevData((prev) => {
        const newData = [...prev, ...filteredData];
        setCardData(newData.length ? newData : filteredData);
        console.log(newData);
        return newData;
      });
    },
    [data]
  );

  const equipmentDeleteFilterData = useCallback(
    (info) => {
      const filteredData = prevData.filter(
        (dataItem) => info.title.toLowerCase() !== dataItem.number.toLowerCase()
      );
      setPrevData(filteredData);
      setCardData(filteredData);
    },
    [prevData]
  );

  function unChecked() {
    setcheckboxData(null);
    setcheckboxData(checkData);
    setEquipmentData(null)
    setEquipmentData(checkData2)
    setPrevData([])
    setCardData(null)
    setCardData(data)
  }

  useEffect(() => {
    if (cardData.length == 0) {
      setCardData(data);
    }
  }, [cardData]);

  return (
    <>
      <section
        className="bg-white pt-7 md:pt-10 pb-[659px]"
      >
        <div className="max-w-[1192px] px-4 mx-auto">
          <div className="flex md:flex-row flex-col md:items-center justify-between mb-7 md:mb-[60px]">
            <h1 className="text-black1 font-bold text-3xl leading-8 md:text-4xl mb-10 md:mb-0">
              Наши номера
            </h1>
            <div className="flex md:justify-end justify-between gap-7">
              <button
                onClick={filterIsOpen}
                id="filterBtn"
                className="flex items-center lg:translate-y-2 justify-between py-3 px-5 lg:hidden bg-white rounded-3xl"
                style={{ boxShadow: "0px 2px 12px 0px #ad988f2e" }}
              >
                <div className="flex items-center gap-1.5 text-black1 text-xs leading-4">
                  <svg
                    width={12}
                    height={15}
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 8.68421L0 1.57895V0H12V1.57895L7.5 8.68421V13.4211L4.5 15V8.68421Z"
                      fill="#1A212F"
                    />
                  </svg>
                  <span>Фильтры</span>
                </div>
              </button>
              <button
                className="flex items-center lg:translate-y-2 justify-between py-3 px-5 ml-auto bg-white rounded-3xl"
                style={{ boxShadow: "0px 2px 12px 0px #ad988f2e" }}
              >
                <div className="flex items-center gap-1.5 text-black1 text-xs leading-4">
                  <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 1L1 3.35294M3.5 1L6 3.35294M3.5 1V11"
                      stroke="#1A212F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>По площади</span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-start gap-20">
            <div className="w-full hidden lg:block max-w-[210px]">
              <h3 className="font-medium text-black1 text-[16px] leading-5 md:mb-5">
                Цена за сутки, ₽
              </h3>
              <div className="flex items-center md:mb-9 gap-2.5 justify-start">
                <input
                  className="text-[14px] w-full leading-4 text-black1 py-2 px-1 border-2 border-[#E1E1E1]"
                  type=""
                />
                <input
                  className="text-[14px] w-full leading-4 text-black1 py-2 px-1 border-2 border-[#E1E1E1]"
                  type="text"
                />
              </div>
              <ul className="flex flex-col md:mb-9 gap-4">
                <h3 className="font-medium text-black1 text-[16px] leading-5 md:mb-1">
                  Площадь
                </h3>
                {checkboxData.map((data) => {
                  return (
                    <li
                      className="flex checkInput items-center gap-2.5 justify-start"
                      key={data.id}
                      onClick={() => checkboxDataIschecked(data)}
                    >
                      <div
                        id="checkbox"
                        className="w-5 h-5 cursor-pointer flex items-center border-2 border-[#e1e1e1] justify-center"
                      >
                        <svg
                          id="checked"
                          className={`${data.isCheacked ? "flex" : "hidden"}`}
                          width={11}
                          height={8}
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3.25L4.46154 7L10 1"
                            stroke="#141312"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-black1 leading-4 text-[14px]">
                        {data.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex flex-col md:mb-9 gap-4">
                <h3 className="font-medium text-black1 text-[16px] leading-5 md:mb-1">
                  Оснащение номера
                </h3>

                {equipmentData.map((data) => {
                  return (
                    <li
                      key={data.id}
                      onClick={() => equipmentIschecked(data)}
                      className="flex checkInput items-center gap-2.5 justify-start"
                    >
                      <div
                        id="checkbox"
                        className="w-5 h-5 flex cursor-pointer items-center border-2 border-[#e1e1e1] justify-center"
                      >
                        <svg
                          id="checked"
                          className={`${data.isCheacked ? "flex" : "hidden"}`}
                          width={11}
                          height={8}
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3.25L4.46154 7L10 1"
                            stroke="#141312"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-black1 leading-4 text-[14px]">
                        {data.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button  onClick={unChecked} className="border-2 text-[14px] leading-[10px] text-black1 font-semibold border-[#FAC663] px-9 py-4 rounded-3xl flex">
                Сбросить фильтр
              </button>
            </div>
            <div
              id="cardBox"
              className="grid lg:grid-cols-3 md:grid-cols-2 w-full gap-7"
            >
              {cardData.map((element) => {
                return (
                  <div
                    key={element.id}
                    className="border-2 border-[#e1e1e1] rounded-md overflow-hidden"
                  >
                    <img className="w-full" src={element.img} alt="img" />
                    <div className="px-5 py-6">
                      <h4 className="text-xl leading-6 text-black1 font-medium mb-5">
                        {element.catigory}
                      </h4>
                      <ul className="flex flex-col mb-6 gap-4">
                        <li className="flex text-[14px] leading-4 text-[#353433]">
                          {element.size}
                        </li>
                        <li className="flex text-[14px] leading-4 text-[#353433]">
                          {element.square}
                        </li>
                        <li className="flex gap-3 text-[14px] leading-4 text-[#353433]">
                          Оснащение номера
                          <div className="w-4 h-4">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 8C16 10.1369 15.1678 12.1458 13.6569 13.6569C12.1458 15.1678 10.1369 16 8 16C6.50409 16 5.07116 15.5917 3.82756 14.8287L4.74475 13.9115C5.71069 14.4455 6.82037 14.75 8 14.75C11.722 14.75 14.75 11.722 14.75 8C14.75 6.82037 14.4455 5.71069 13.9115 4.74478L14.8287 3.82759C15.5917 5.07116 16 6.50409 16 8ZM0.910688 15.9732L0.0268125 15.0893L1.91831 13.1978C0.677094 11.7502 0 9.92716 0 8C0 5.86312 0.832156 3.85416 2.34313 2.34313C3.85416 0.832156 5.86312 0 8 0C9.92716 0 11.7502 0.677094 13.1978 1.91831L15.0893 0.0268125L15.9732 0.910688L0.910688 15.9732ZM2.80791 12.3082L12.3082 2.80791C11.1385 1.83559 9.63641 1.25 8 1.25C4.27803 1.25 1.25 4.27803 1.25 8C1.25 9.63641 1.83556 11.1385 2.80791 12.3082Z"
                                fill="#777777"
                              />
                            </svg>
                          </div>
                        </li>
                        <li className="flex gap-2.5 text-[14px] leading-4 text-[#353433]">
                          Цена за сутки:{" "}
                          <span className="font-medium">{element.price}</span>
                        </li>
                      </ul>
                      <button className="flex pr-2 pl-7 py-2 leading-4 justify-end items-center gap-5 text-[#FFFDFB] font-semibold bg-[#FF7236] rounded-3xl">
                        Забронировать
                        <img className="w-9 h-9 flex" src={paw} alt="paw" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Map />

      <div>
        <div className={`blur lg:hidden ${!visible ? "hidden" : "flex"}`} />
        <div
          id="modaFilter"
          className={`absolute top-0 lg:hidden ${
            !visible ? "hidden" : "flex"
          } left-0 px-4 w-full pt-[136px]`}
        >
          <div
            style={{ boxShadow: "0px 4px 25px 0px #99999940" }}
            className="mx-auto w-full max-w-[280px] bg-white relative pt-5 px-5 rounded-md flex flex-col min-h-[825px]"
          >
            <div
              onClick={filterIsOpen}
              id="filterClose"
              className="w-[14px] h-[14px] flex items-center ml-auto cursor-pointer mb-6 justify-center"
            >
              <svg
                width={16}
                height={16}
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
            </div>
            <div className="w-full block max-w-[210px]">
              <h3 className="font-medium text-black1 text-[16px] leading-5 mb-5">
                Цена за сутки, ₽
              </h3>
              <div className="flex items-center mb-7 gap-2.5 justify-start">
                <span className="text-[14px] w-full leading-4 text-black1 py-2 px-1 border-2 border-[#E1E1E1]">
                  от 100
                </span>
                <span className="text-[14px] w-full leading-4 text-black1 py-2 px-1 border-2 border-[#E1E1E1]">
                  до 600
                </span>
              </div>
              <ul className="flex flex-col mb-9 gap-4">
                <h3 className="font-medium text-black1 text-[16px] leading-5 mb-1">
                  Площадь
                </h3>
                {checkboxData.map((data) => {
                  return (
                    <li
                      key={data.id}
                      onClick={() => checkboxDataIschecked(data)}
                      className="flex checkInput items-center gap-2.5 justify-start"
                    >
                      <div
                        id="checkbox"
                        className="w-5 h-5 flex cursor-pointer items-center border-2 border-[#e1e1e1] justify-center"
                      >
                        <svg
                          id="checked"
                          className={`${data.isCheacked ? "flex" : "hidden"}`}
                          width={11}
                          height={8}
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3.25L4.46154 7L10 1"
                            stroke="#141312"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-black1 leading-4 text-[14px]">
                        {data.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex flex-col mb-9 gap-4">
                <h3 className="font-medium text-black1 text-[16px] leading-5 md:mb-1">
                  Оснащение номера
                </h3>
                {equipmentData.map((data) => {
                  return (
                    <li
                      key={data.id}
                      onClick={() => equipmentIschecked(data)}
                      className="flex checkInput items-center gap-2.5 justify-start"
                    >
                      <div
                        id="checkbox"
                        className="w-5 h-5 flex cursor-pointer items-center border-2 border-[#e1e1e1] justify-center"
                      >
                        <svg
                          id="checked"
                          className={`${data.isCheacked ? "flex" : " hidden"}`}
                          width={11}
                          height={8}
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 3.25L4.46154 7L10 1"
                            stroke="#141312"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-black1 leading-4 text-[14px]">
                        {data.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button className="border-2 w-full text-[14px] justify-center mb-4 leading-[10px] text-black1 font-semibold bg-orange border-[#FAC663] px-9 py-4 rounded-3xl flex">
                Подобрать
              </button>
              <button onClick={unChecked} className="border-2 w-full justify-center text-[14px] leading-[10px] text-black1 font-semibold border-[#FAC663] px-9 py-4 rounded-3xl flex">
                Сбросить фильтр
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
