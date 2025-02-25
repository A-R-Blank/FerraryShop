import photo12Cilindri from '../images/models/Ferrari 12Cilindri1.png';
import photoRoma from '../images/models/Ferrari Roma 11.png';
import photoPurosangue from "../images/models/Ferrari-Purosangue1 (1).png";
import photoStardale from "../images/models/Ferrari SF90 Stradale1.png";
import photoLusso from "../images/models/Ferrari GTC4Lusso I1.png";
import photoFF11 from "../images/models/Ferrari FF 11.png";
import photoF80 from "../images/models/Ferrari F80 red 1.png"
import photoCalifornia from "../images/models/ferrari-california-red -1.png";

export const data = [
    {
        id: 1,
        name: "Ferrari 12Cilindri",
        year: "2024",
        isNew: true,
        img: photo12Cilindri,
        engine: "6.5",
        drive: "Задний",
        typeBody: "Кабриолет",
        price: 650000,
        description: 'Ferrari 12Cilindri сочетает в себе активную и пассивную аэродинамику для улучшения значений коэффициента лобового сопротивления по сравнению с 812 Superfast. Сзади расположен спойлер для улучшения прижимной силы на высоких скоростях. Боковая часть спойлера может наклоняться на 10° до скорости 60 км/ч (38 миль/ч), действуя как аэродинамический тормоз и создавая 50 кг прижимной силы на высоких скоростях. Ferrari 12Cilindri разгоняется до 100 км/ч за 2,9 секунды, а до 200 км/ч — за 7,9 секунды. Максимальная скорость составляет 340 км/ч',
    },

    {
        id: 2,
        name: "Ferrari Roma",
        year: "2020",
        isNew: true,
        img: photoRoma,
        engine: "3.9",
        drive: "Задний",
        typeBody: "Кабриолет",
        price: 375000,
        description: 'Автомобиль Ferrari Roma приводится в движение восьмицилиндровым двигателем Ferrari F154 объёмом 3,9 л (3855 см3) с турбонаддувом мощностью 456 кВт (620 л. с.) при 5750—7500 об/мин и крутящим моментом 761 Н⋅м при 3000—5750 об/мин. Двигатель сочетается в паре с восьмиступенчатой трансмиссией с двойным сцеплением. Заявленная максимальная скорость 320 км/ч',
    },

    {
        id: 3,
        name: "Ferrari Purosangue",
        year: "2022",
        isNew: true,
        img: photoPurosangue,
        engine: "6.5",
        drive: "Полный",
        typeBody: "Внедорожник",
        price: 1000000,
        description: 'Purosangue оснащен бензиновым двигателем F140IA V12 объёмом 6,5 л с максимальной мощностью 533 кВт (715 л. с., 725 л. с.) при 7750 об/мин и максимальным крутящим моментом 716 Нм (73,0 кгм; 528 фунт-фут) при 6250 об/мин. Ferrari заявляет, что он разгоняется до 100 км/ч (62 миль в час) за 3,3 секунды и достигает максимальной скорости 311 км/ч (193 мили в час).',
    },

    {
        id: 4,
        name: "Ferrari SF90 Stradale",
        year: "2019",
        isNew: true,
        img: photoStardale,
        engine: "4.0",
        drive: "Полный",
        typeBody: "Купе",
        price: 850000,
        description: 'Ferrari SF90 XX оснащён восьмицилиндровым ДВС мощностью 797 л. с. и электродвигателем мощностью 230 л. с. Максимальная скорость составляет 250 км/ч'
    },

    {
        id: 5,
        name: "Ferrari GTC4Lusso I",
        year: "2020",
        isNew: true,
        img: photoLusso,
        engine: "6.3",
        drive: "Полный",
        typeBody: "Хэтчбек",
        price: 500000,
        description: '12-цилиндровый двигатель GTC4Lusso отличают рекордные для сегмента характеристики: силовой агрегат развивает впечатляющие 690 л.с. при 8000 об/мин, максимальный крутящий момент составляет 697 Нм при 5750 об/мин, при этом 80% тяги доступны уже с 1750 об/мин, обеспечивая невероятную отзывчивость двигателя даже на малых оборотах.',
    },

    {
        id: 6,
        name: "Ferrari FF 1",
        year: "2016",
        isNew: true,
        img: photoFF11,
        engine: "6.3",
        drive: "Полный",
        typeBody: "Хэтчбек",
        price: 200000,
        description: 'На Ferrari FF стоит самый большой по объёму двигатель, когда-либо выпускавшийся компанией — атмосферный (безнаддувный) V12 с углом развала цилиндров 65° рабочим объёмом 6,3 литра. Этот агрегат выдает мощность 660 л. с. (485,4 кВт) при 8000 оборотах в минуту и крутящий момент 683 Н·м при 6000 оборотах в минуту. FF оснащена 7-ступенчатой роботизированной коробкой передач DSG с двойным сцеплением, подобной тем, что стоят на Ferrari California и Ferrari 458 Italia.',
    },

    {
        id: 7,
        name: "Ferrari F80",
        year: "2024",
        isNew: true,
        img: photoF80,
        engine: "3.0",
        drive: "Полный",
        typeBody: "Купе",
        price: 250000,
        description: 'Ferrari F80 оснащён 3,0-литровым двигателем V6[5] с углом развала цилиндров 120°. Без системы рекуперативного торможения двигатель развивает мощность 900 л. с.[6], а с системой рекуперативного торможения — 1200 л. с.[7] Таким образом, F80 является самым мощным гиперкаром Ferrari (ранее такой статус имел Ferrari SF90 Stradale с двигателем мощностью 1030 л. с.). Благодаря массе 1525 кг автомобиль Ferrari F80 способен разгоняться до 100 км/ч всего за 2,15 секунды. Максимальная скорость составляет более 350 км/ч.',
    },

    {
        id: 8,
        name: "Ferrari California",
        year: "2017",
        isNew: true,
        img: photoCalifornia,
        engine: "3.9",
        drive: "Задний",
        typeBody: "Кабриолет",
        price: 150000,
        description: 'Двигатель атмосферный 4.3 L V8 с углом 90°, мощностью 460 л.с (7750 об/мин) 485 Нм (5000 об/мин) крутящего момента, благодаря непосредственному впрыску топлива увеличилась мощность, снизился выброс CO2, и улучшилась «оборотистость» двигателя. Система глушения двигателя при остановке снизила расход топлива[1]. Впервые использовали 7-ступенчатую КПП с двойным сцеплением DCT, это делает переключения передач более мягкими и быстрыми, по сравнению с одиночным сцеплением.',
    },
];