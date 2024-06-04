import temperature from "../img/home/we/temperature.svg";
import camera from "../img/home/we/camera.svg";
import car from "../img/home/we/car.svg";
import fish from "../img/home/we/fishFood.svg";
import cat from "../img/home/we/cat.svg";
import hand from "../img/home/we/hand.svg";

let cardsInfo = [
  {
    img: temperature,
    title: " Комфортная температура",
    text: ` Во всех номерах поддерживается комфортная температура в пределах
        23 - 25 градусов. В каждом номере можно дополнительно
        отрегулировать температуру.`,
    id: 1,
  },
  {
    img: camera,
    title: " Видеонаблюдение",
    text: `Мы предоставляем доступ в нашу систему. Вы сможете следить за
    своим питомцем со своего смартфона или компьютера.`,
    id: 2,
  },
  {
    img: car,
    title: " Услуги Зоотакси",
    text: `Мы приедем за вашим питомцем в любой район Санкт-Петербурга.`,
    id: 3,
  },
  {
    img: fish,
    title: " Сбалансированное питание",
    text: `Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.`,
    id: 4,
  },
  {
    img: cat,
    title: "Ежедневные прогулки",
    text: `По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой территории.`,
    id: 5,
  },
  {
    img:hand,
    title: "Лучшие ветеринары",
    text: `В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.`,
    id: 6,
  },
];

export default cardsInfo;
