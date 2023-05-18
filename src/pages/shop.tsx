import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

import Heading from "@/components/Heading";
import FilterBlock from "@/components/shop/FilterBlock";
import Container from "@/components/Container";
import useProductStore from "@/hooks/useProductsStore";
import CardList from "@/components/shop/CardList";
import Path from "@/components/utils-component/Path";

// ПРИМЕР ОБЪЕКТА DTO ДЛЯ СОРТИРОВКИ, КОТОРЫЙ УХОДИТ НА СЕРВЕР
// {
//   filtering: {
//     brandId: 6,
//     typeId: 3,
//     between: [1000, 100000]
//     descriptionFilters: [
//       { title: "Площадь помещения: м².", description: ["20"] },
//       { title: "Мин. температура за окном", description: ["-15 С"] },
//       { title: "Цвет", description: ["черный"] },
//       {
//         title: "Тип компрессора:",
//         description: ["инвертор", "не инвертор"],
//       },
//       { title: "Площадь помещения: м².", description: ["25", "35"] },
//       { title: "Наличие WiFi:", description: ["нет"] },
//       { title: "Класс энегроэффективности:", description: ["A++/A+"] },
//     ],
//   },
// }

const HAVE_COMPRESSOR_TYPE = "Тип компрессора:";
const HAVE_WIFI = "Наличие WiFi:";
const HAVE_COLOR = "Цвет";
const HAVE_SQUARE = "Площадь помещения: м².";

// const products = [
//   {
//     id: 3,
//     name: "Royal Clima RCI-TWN22HN",
//     price: 33000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/Triumph_Inverter_Royal_Clima_2021_dk46-fl_jyls-jf.jpg",
//     imges: [
//       "2524689f-81b8-4c2c-8388-e08c7f8cbaff",
//       "fa1aca6c-4bce-4dfb-be95-c01b98ed414e",
//       "0bb35e6c-44ed-4a5b-ae93-aaf1faad9db5",
//       "44c6e02a-6d2b-420f-81c8-87bb6fcc0fc1",
//       "a81fa00a-ebeb-4b70-a05b-f48993dd5b5e",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 45,
//         productId: 3,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 44,
//         productId: 3,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 43,
//         productId: 3,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 42,
//         productId: 3,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 41,
//         productId: 3,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 40,
//         productId: 3,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 39,
//         productId: 3,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 38,
//         productId: 3,
//         title: "Тип компрессора:",
//         description: "не инвертор",
//       },
//       {
//         id: 37,
//         productId: 3,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 36,
//         productId: 3,
//         title: "Мощность охлаждения: кВт.",
//         description: "2.4",
//       },
//       {
//         id: 35,
//         productId: 3,
//         title: "Мощность обогрева: кВт.",
//         description: "2.6",
//       },
//       {
//         id: 34,
//         productId: 3,
//         title: "Макс. длина трубы: м.",
//         description: "25",
//       },
//       {
//         id: 33,
//         productId: 3,
//         title: "Уровень шума: дб.",
//         description: "26",
//       },
//       {
//         id: 32,
//         productId: 3,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//       {
//         id: 31,
//         productId: 3,
//         title: "Площадь помещения: м².",
//         description: "24",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 1,
//     name: "Royal Clima RCI-TWN28HN",
//     price: 35000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/hisense-zoom-dc-inverter-1_p8s3-c1.jpg",
//     imges: [
//       "1df2c0df-fdec-4122-bc7c-d823c7f9b0b9",
//       "1be49bc9-3888-4c1a-8c23-2d16febac009",
//       "f2457eb3-469d-4aec-82f9-a38adbab4d1d",
//       "d771624d-5811-42c9-a99c-8423469403e7",
//       "75f687ba-9ea5-44b6-908c-7b617d7f5000",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 1,
//         productId: 1,
//         title: "Площадь помещения: м².",
//         description: "28",
//       },
//       {
//         id: 15,
//         productId: 1,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 14,
//         productId: 1,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 13,
//         productId: 1,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 12,
//         productId: 1,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 11,
//         productId: 1,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 10,
//         productId: 1,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 9,
//         productId: 1,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 8,
//         productId: 1,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 7,
//         productId: 1,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 6,
//         productId: 1,
//         title: "Мощность охлаждения: кВт.",
//         description: "2.82",
//       },
//       {
//         id: 5,
//         productId: 1,
//         title: "Мощность обогрева: кВт.",
//         description: "3.07",
//       },
//       {
//         id: 4,
//         productId: 1,
//         title: "Макс. длина трубы: м.",
//         description: "10",
//       },
//       {
//         id: 3,
//         productId: 1,
//         title: "Уровень шума: дб.",
//         description: "24",
//       },
//       {
//         id: 2,
//         productId: 1,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 2,
//     name: "Royal Clima RCI-TWN35HN",
//     price: 39000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/28/ultima-comfort-explorer-1.jpg",
//     imges: [
//       "e6cb9520-3a86-4ce0-bfc9-cc8a925d2a32",
//       "5990e4e6-290c-40c4-85cd-96f3c6ec37e9",
//       "e8593cbf-9d31-47bc-bb4f-8dedadf7b6fa",
//       "5d5b2b69-28d2-4ba3-861d-37d111e0094e",
//       "e279a97d-f81a-4a26-b4fa-6ff84c0d2ab6",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 30,
//         productId: 2,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 29,
//         productId: 2,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 28,
//         productId: 2,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 27,
//         productId: 2,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 26,
//         productId: 2,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 25,
//         productId: 2,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 24,
//         productId: 2,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 23,
//         productId: 2,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 22,
//         productId: 2,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 21,
//         productId: 2,
//         title: "Мощность охлаждения: кВт.",
//         description: "3.45",
//       },
//       {
//         id: 20,
//         productId: 2,
//         title: "Мощность обогрева: кВт.",
//         description: "3.72",
//       },
//       {
//         id: 19,
//         productId: 2,
//         title: "Макс. длина трубы: м.",
//         description: "25",
//       },
//       {
//         id: 18,
//         productId: 2,
//         title: "Уровень шума: дб.",
//         description: "26",
//       },
//       {
//         id: 17,
//         productId: 2,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//       {
//         id: 16,
//         productId: 2,
//         title: "Площадь помещения: м².",
//         description: "35",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 4,
//     name: "Royal Clima RCI-TWN22HN",
//     price: 33000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/Triumph_Inverter_Royal_Clima_2021_dk46-fl_jyls-jf.jpg",
//     imges: [
//       "2524689f-81b8-4c2c-8388-e08c7f8cbaff",
//       "fa1aca6c-4bce-4dfb-be95-c01b98ed414e",
//       "0bb35e6c-44ed-4a5b-ae93-aaf1faad9db5",
//       "44c6e02a-6d2b-420f-81c8-87bb6fcc0fc1",
//       "a81fa00a-ebeb-4b70-a05b-f48993dd5b5e",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 45,
//         productId: 3,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 44,
//         productId: 3,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 43,
//         productId: 3,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 42,
//         productId: 3,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 41,
//         productId: 3,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 40,
//         productId: 3,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 39,
//         productId: 3,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 38,
//         productId: 3,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 37,
//         productId: 3,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 36,
//         productId: 3,
//         title: "Мощность охлаждения: кВт.",
//         description: "2.4",
//       },
//       {
//         id: 35,
//         productId: 3,
//         title: "Мощность обогрева: кВт.",
//         description: "2.6",
//       },
//       {
//         id: 34,
//         productId: 3,
//         title: "Макс. длина трубы: м.",
//         description: "25",
//       },
//       {
//         id: 33,
//         productId: 3,
//         title: "Уровень шума: дб.",
//         description: "26",
//       },
//       {
//         id: 32,
//         productId: 3,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//       {
//         id: 31,
//         productId: 3,
//         title: "Площадь помещения: м².",
//         description: "24",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 5,
//     name: "Royal Clima RCI-TWN28HN",
//     price: 35000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/hisense-zoom-dc-inverter-1_p8s3-c1.jpg",
//     imges: [
//       "1df2c0df-fdec-4122-bc7c-d823c7f9b0b9",
//       "1be49bc9-3888-4c1a-8c23-2d16febac009",
//       "f2457eb3-469d-4aec-82f9-a38adbab4d1d",
//       "d771624d-5811-42c9-a99c-8423469403e7",
//       "75f687ba-9ea5-44b6-908c-7b617d7f5000",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 1,
//         productId: 1,
//         title: "Площадь помещения: м².",
//         description: "28",
//       },
//       {
//         id: 15,
//         productId: 1,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 14,
//         productId: 1,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 13,
//         productId: 1,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 12,
//         productId: 1,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 11,
//         productId: 1,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 10,
//         productId: 1,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 9,
//         productId: 1,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 8,
//         productId: 1,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 7,
//         productId: 1,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 6,
//         productId: 1,
//         title: "Мощность охлаждения: кВт.",
//         description: "2.82",
//       },
//       {
//         id: 5,
//         productId: 1,
//         title: "Мощность обогрева: кВт.",
//         description: "3.07",
//       },
//       {
//         id: 4,
//         productId: 1,
//         title: "Макс. длина трубы: м.",
//         description: "10",
//       },
//       {
//         id: 3,
//         productId: 1,
//         title: "Уровень шума: дб.",
//         description: "24",
//       },
//       {
//         id: 2,
//         productId: 1,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 6,
//     name: "Royal Clima RCI-TWN35HN",
//     price: 39000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/28/ultima-comfort-explorer-1.jpg",
//     imges: [
//       "e6cb9520-3a86-4ce0-bfc9-cc8a925d2a32",
//       "5990e4e6-290c-40c4-85cd-96f3c6ec37e9",
//       "e8593cbf-9d31-47bc-bb4f-8dedadf7b6fa",
//       "5d5b2b69-28d2-4ba3-861d-37d111e0094e",
//       "e279a97d-f81a-4a26-b4fa-6ff84c0d2ab6",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 30,
//         productId: 2,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 29,
//         productId: 2,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 28,
//         productId: 2,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 27,
//         productId: 2,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 26,
//         productId: 2,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 25,
//         productId: 2,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 24,
//         productId: 2,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 23,
//         productId: 2,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 22,
//         productId: 2,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 21,
//         productId: 2,
//         title: "Мощность охлаждения: кВт.",
//         description: "3.45",
//       },
//       {
//         id: 20,
//         productId: 2,
//         title: "Мощность обогрева: кВт.",
//         description: "3.72",
//       },
//       {
//         id: 19,
//         productId: 2,
//         title: "Макс. длина трубы: м.",
//         description: "25",
//       },
//       {
//         id: 18,
//         productId: 2,
//         title: "Уровень шума: дб.",
//         description: "26",
//       },
//       {
//         id: 17,
//         productId: 2,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//       {
//         id: 16,
//         productId: 2,
//         title: "Площадь помещения: м².",
//         description: "35",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 7,
//     name: "Royal Clima RCI-TWN22HN",
//     price: 33000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/Triumph_Inverter_Royal_Clima_2021_dk46-fl_jyls-jf.jpg",
//     imges: [
//       "2524689f-81b8-4c2c-8388-e08c7f8cbaff",
//       "fa1aca6c-4bce-4dfb-be95-c01b98ed414e",
//       "0bb35e6c-44ed-4a5b-ae93-aaf1faad9db5",
//       "44c6e02a-6d2b-420f-81c8-87bb6fcc0fc1",
//       "a81fa00a-ebeb-4b70-a05b-f48993dd5b5e",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 45,
//         productId: 3,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 44,
//         productId: 3,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 43,
//         productId: 3,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 42,
//         productId: 3,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 41,
//         productId: 3,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 40,
//         productId: 3,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 39,
//         productId: 3,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 38,
//         productId: 3,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 37,
//         productId: 3,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 36,
//         productId: 3,
//         title: "Мощность охлаждения: кВт.",
//         description: "2.4",
//       },
//       {
//         id: 35,
//         productId: 3,
//         title: "Мощность обогрева: кВт.",
//         description: "2.6",
//       },
//       {
//         id: 34,
//         productId: 3,
//         title: "Макс. длина трубы: м.",
//         description: "25",
//       },
//       {
//         id: 33,
//         productId: 3,
//         title: "Уровень шума: дб.",
//         description: "26",
//       },
//       {
//         id: 32,
//         productId: 3,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//       {
//         id: 31,
//         productId: 3,
//         title: "Площадь помещения: м².",
//         description: "24",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 8,
//     name: "Royal Clima RCI-TWN28HN",
//     price: 35000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/21/hisense-zoom-dc-inverter-1_p8s3-c1.jpg",
//     imges: [
//       "1df2c0df-fdec-4122-bc7c-d823c7f9b0b9",
//       "1be49bc9-3888-4c1a-8c23-2d16febac009",
//       "f2457eb3-469d-4aec-82f9-a38adbab4d1d",
//       "d771624d-5811-42c9-a99c-8423469403e7",
//       "75f687ba-9ea5-44b6-908c-7b617d7f5000",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 1,
//         productId: 1,
//         title: "Площадь помещения: м².",
//         description: "28",
//       },
//       {
//         id: 15,
//         productId: 1,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 14,
//         productId: 1,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 13,
//         productId: 1,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 12,
//         productId: 1,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 11,
//         productId: 1,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 10,
//         productId: 1,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 9,
//         productId: 1,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 8,
//         productId: 1,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 7,
//         productId: 1,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 6,
//         productId: 1,
//         title: "Мощность охлаждения: кВт.",
//         description: "2.82",
//       },
//       {
//         id: 5,
//         productId: 1,
//         title: "Мощность обогрева: кВт.",
//         description: "3.07",
//       },
//       {
//         id: 4,
//         productId: 1,
//         title: "Макс. длина трубы: м.",
//         description: "10",
//       },
//       {
//         id: 3,
//         productId: 1,
//         title: "Уровень шума: дб.",
//         description: "24",
//       },
//       {
//         id: 2,
//         productId: 1,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
//   {
//     id: 9,
//     name: "Royal Clima RCI-TWN35HN",
//     price: 39000,
//     logo: "https://www.clima-vent.com/images/thumbnails/647/600/detailed/28/ultima-comfort-explorer-1.jpg",
//     imges: [
//       "e6cb9520-3a86-4ce0-bfc9-cc8a925d2a32",
//       "5990e4e6-290c-40c4-85cd-96f3c6ec37e9",
//       "e8593cbf-9d31-47bc-bb4f-8dedadf7b6fa",
//       "5d5b2b69-28d2-4ba3-861d-37d111e0094e",
//       "e279a97d-f81a-4a26-b4fa-6ff84c0d2ab6",
//     ],
//     brandId: 2,
//     typeId: 1,
//     descriptions: [
//       {
//         id: 30,
//         productId: 2,
//         title: "Габариты внутреннего блока: мм",
//         description: "715x285x194",
//       },
//       {
//         id: 29,
//         productId: 2,
//         title: "Мин. температура за окном",
//         description: "-15 С",
//       },
//       {
//         id: 28,
//         productId: 2,
//         title: "Тип Фреона:",
//         description: "R410A",
//       },
//       {
//         id: 27,
//         productId: 2,
//         title: "Вес внутреннего блока: кг.",
//         description: "7.5",
//       },
//       {
//         id: 26,
//         productId: 2,
//         title: "Ионизация воздуха:",
//         description: "да",
//       },
//       {
//         id: 25,
//         productId: 2,
//         title: "Дезодорирующий фильтр:",
//         description: "да",
//       },
//       {
//         id: 24,
//         productId: 2,
//         title: "Производитель:",
//         description: "Китай",
//       },
//       {
//         id: 23,
//         productId: 2,
//         title: "Тип компрессора:",
//         description: "инвертор",
//       },
//       {
//         id: 22,
//         productId: 2,
//         title: "Наличие WiFi:",
//         description: "да (опция)",
//       },
//       {
//         id: 21,
//         productId: 2,
//         title: "Мощность охлаждения: кВт.",
//         description: "3.45",
//       },
//       {
//         id: 20,
//         productId: 2,
//         title: "Мощность обогрева: кВт.",
//         description: "3.72",
//       },
//       {
//         id: 19,
//         productId: 2,
//         title: "Макс. длина трубы: м.",
//         description: "25",
//       },
//       {
//         id: 18,
//         productId: 2,
//         title: "Уровень шума: дб.",
//         description: "26",
//       },
//       {
//         id: 17,
//         productId: 2,
//         title: "Класс энегроэффективности:",
//         description: "A++/A+",
//       },
//       {
//         id: 16,
//         productId: 2,
//         title: "Площадь помещения: м².",
//         description: "35",
//       },
//     ],
//     brand: {
//       id: 2,
//       name: "Royal Clima",
//       brandСountry: "Шведция",
//     },
//     type: {
//       id: 1,
//       typeName: "Сплит-Система",
//     },
//   },
// ];

function Shop() {
  const { fetchProducts, loading, error, products } = useProductStore();
  const searchParams = useSearchParams();

  const [oldProductList, setOldProductList] = useState([]);
  const [productsScroll, setProductsScroll] = useState([]);
  const [productsList, setProductsList] = useState<any>([]);

  const [sortStart, setSortStart] = useState(true);
  const [sort, setSort] = useState(true);
  const [showLimit, setShowLimit] = useState(6);
  const [price, setPrice] = useState<any>([0, 150000]);
  const [fetching, setFetching] = useState(false);

  const brandQuery = searchParams.get("brand");
  const typeQuery = searchParams.get("type");
  const squareQuery = searchParams.get("square");
  const compressorQuery = searchParams.get("compressor");
  const wifiQuery = searchParams.get("wifi");
  const colorQuery = searchParams.get("color");

  const filters = {
    brand: brandQuery,
    type: typeQuery,
    square: squareQuery,
    compressor: compressorQuery,
    wifi: wifiQuery,
    color: colorQuery,
  };

  let page = 1;
  let showOffset = page * showLimit - showLimit;

  let filter: any = {
    filtering: {
      brandId: filters.brand,
      typeId: filters.type,
      descriptionFilters: [],
      limit: showLimit,
      offset: showOffset,
      order: [[sort ? "price" : "name", sortStart ? "ASC" : "DESC"]],
      between: price,
    },
  };

  useEffect(() => {
    if (filters.compressor) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_COMPRESSOR_TYPE,
        description: [filters.compressor],
      });
    }
    if (filters.color) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_COLOR,
        description: [filters.color],
      });
    }
    if (filters.wifi) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_WIFI,
        description: [filters.wifi],
      });
    }
    if (filters.square) {
      filter.filtering.descriptionFilters.push({
        title: HAVE_SQUARE,
        description: filters.square.split(","),
      });
    }

    (async () => {
      console.log(filter);
      console.log(page);
      await fetchProducts(filter).then((d: any) => {
        setProductsList(d);
      });
    })();
  }, [
    filters.brand,
    filters.type,
    filters.compressor,
    filters.color,
    filters.wifi,
    filters.square,
    showLimit,
    sort,
    sortStart,
    price,
    page,
  ]);

  return (
    <>
      <Head>
        <title>Каталог товаров</title>
        <meta name="description" content="Каталог товаров на наших складах." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Path />
        <div
          className="
            w-full 
            pb-12 
            flex
            flex-col
            gap-4
            sm:items-start
            sm:flex-row
            "
        >
          <FilterBlock
            className="
              bg-slate-100
              rounded-md
              flex-none 
              w-full 
              sm:max-w-[300px]
              p-2
              sm:p-6
              shadow-sm
              "
            price={price}
            setPrice={setPrice}
          />
          <div className="flex-1">
            <Heading
              title="Каталог"
              subtitle="Весь список товаров по выбранным параметрам"
            />
            <div
              className="
                mb-1
                flex gap-2
                "
            >
              <div className="py-4 px-2 rounded-sm text-sm flex gap-4 items-center">
                <span className="font-semibold">Сортироваь по:</span>
                <span
                  onClick={() => setSort(false)}
                  className="cursor-pointer py-1 px-2 rounded-sm bg-slate-100"
                >
                  названию
                </span>
                <span
                  onClick={() => setSort(true)}
                  className="cursor-pointer py-1 px-2 rounded-sm bg-slate-100"
                >
                  цене
                </span>
                <span
                  onClick={() => setSortStart(!sortStart)}
                  className="cursor-pointer py-1 px-2 rounded-sm bg-slate-100"
                >
                  <HiOutlineArrowsUpDown size={18} />
                </span>
              </div>
            </div>
            <div
              className="
                grid
                justify-items-center
                grid-cols-auto
                gap-6
                "
            >
              <CardList
                loading={loading}
                error={error}
                products={productsList}
              />
              {/* <div
                onClick={addProducts}
                className="px-2 py-1 h-8 bg-slate-500 rounded-sm cursor-pointer hover:bg-orange-500"
              >
                Показать еще
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Shop;
