import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { BiSliderAlt } from "react-icons/bi";

import FilterElement from "./FilterElement";
import CastomSelect from "../inputs/castom-select/CastomSelect";
import Option from "../inputs/castom-select/Option";
import OptionList from "../inputs/castom-select/OptionList";
import DropDown from "../inputs/castom-select/DropDown";

import CastomChecked from "../inputs/castom-checked/CastomChecked";
import RadioItem from "../inputs/castom-checked/RadioItem";
import Button from "../navbar/Button";
import useWindowWidth from "@/hooks/useWindowWidth";
import RangeFilter from "../utils-component/RangeFilter";
import useTypeAndBrand from "@/hooks/useTypeAndBrand";

const brandsArray = [
  { id: 4, name: "Не выбрано", value: null },
  { id: 1, name: "Energolux", value: "6" },
  { id: 2, name: "Royal Clima", value: "2" },
  { id: 3, name: "Kentatsu", value: "99" },
];
const typeArray = [
  { id: 4, name: "Не выбрано", value: null },
  { id: 1, name: "Сплит-система", value: "1" },
  { id: 3, name: "Внутренний блок", value: "3" },
  { id: 2, name: "Мульти сплит-система", value: "2" },
];
const sArray = [
  { id: 3, name: "Не выбрано", value: null },
  { id: 1, name: "от 20м до 25м", value: "20,21,22,23,24,25" },
  { id: 2, name: "от 26м до 30м", value: "26,27,28,29,30" },
  { id: 4, name: "от 31м до 40м", value: "31,32,33,34,35,36,37,38,39,40" },
  { id: 5, name: "от 41м до 60м", value: "41,53,55,58,60" },
  { id: 6, name: "от 61м до 100м", value: "61,70, 100" },
];
const compressorArray = [
  { id: 3, name: "Все", value: null },
  { id: 1, name: "Инвертор", value: "инвертор" },
  { id: 2, name: "Не инвертор", value: "не инвертор" },
];
const WiFiArray = [
  { id: 4, name: "Все", value: null },
  { id: 1, name: "Да", value: "да" },
  { id: 2, name: "Нет", value: "нет" },
  { id: 3, name: "Да (опция)", value: "да (опция)" },
];
const colorArray = [
  { id: 4, name: "Все", value: null },
  { id: 2, name: "Черный", value: "черный" },
];

function FilterBlock({ className, price, setPrice }) {
  const { fetchTypes, fetchBrands, types, brands } = useTypeAndBrand();
  const { width } = useWindowWidth();
  const [showFilters, setShowFilter] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const brandQuery = searchParams.get("brand");
  const typeQuery = searchParams.get("type");
  const squareQuery = searchParams.get("square");
  const compressorQuery = searchParams.get("compressor");
  const wifiQuery = searchParams.get("wifi");
  const colorQuery = searchParams.get("color");

  const [selectBrand, setSelectBrand] = useState(brandQuery);
  const [selectType, setSelectType] = useState(typeQuery);
  const [selectS, setSelectS] = useState(squareQuery);
  const [compressor, setCompressor] = useState(compressorQuery);
  const [wiFi, setWiFi] = useState(wifiQuery);
  const [color, setColor] = useState(colorQuery);

  useEffect(() => {
    (async () => {
      await fetchTypes();
      await fetchBrands();
    })();
  }, []);

  useEffect(() => {
    setSelectBrand(brands?.filter((el) => `${el.id}` === brandQuery)[0]?.name);
    setSelectType(types.filter((el) => `${el.id}` === typeQuery)[0]?.typeName);
    setSelectS(sArray.filter((el) => el.value === squareQuery)[0]?.name);
    setCompressor(
      compressorArray.filter((el) => el.value === compressorQuery)[0]?.name
    );
    setWiFi(WiFiArray.filter((el) => el.value === wifiQuery)[0]?.name);
    setColor(colorArray.filter((el) => el.value === colorQuery)[0]?.name);
  }, [
    brandQuery,
    typeQuery,
    squareQuery,
    compressorQuery,
    wifiQuery,
    colorQuery,
  ]);

  const createQueryString = useCallback(
    (name, value) => {
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const choiceFunc = (name, value, title, setShowPlaceholder) => {
    setShowPlaceholder(name);
    if (value !== null) {
      router.push(
        pathname + "?" + createQueryString(title, value.toLowerCase()),
        undefined,
        { scroll: false }
      );
      return;
    }
    params.delete(title);
    if (params.toString() === "") {
      router.push(pathname, undefined, { scroll: false });
      return;
    }
    router.push(pathname + "?" + params, undefined, { scroll: false });
    return;
  };

  const getFilters = useCallback(() => {
    setShowFilter(!showFilters);
  }, [showFilters]);

  const allFiltersBlock = (
    <div
      className="
        w-full 
        flex 
        flex-col 
        gap-1"
    >
      <div
        className="
          text-lg
          font-bold
          text-slate-900
          mb-4
          "
      >
        Фильтры
      </div>
      {/** RANGE FILTER */}
      <FilterElement className="mb-3" title={"Ценовой диапазон"}>
        <RangeFilter price={price} setPrice={setPrice} />
      </FilterElement>
      {/** BRAND FILTER */}

      <FilterElement className="mb-3" title={"Бренды"}>
        <CastomSelect>
          <DropDown>{selectBrand ? selectBrand : "Выберете бренд"}</DropDown>
          <OptionList>
            <Option
              onClick={() => choiceFunc(null, null, "brand", setSelectBrand)}
            >
              Показать все
            </Option>
            {brands?.map((l) => (
              <Option
                key={l.id}
                onClick={(e) =>
                  choiceFunc(l.name, `${l.id}`, "brand", setSelectBrand)
                }
                active={`${l.id}` === brandQuery}
              >
                {l.name}
              </Option>
            ))}
          </OptionList>
        </CastomSelect>
      </FilterElement>

      {/** TYPE FILTER */}

      <FilterElement className="mb-3" title={"Типы"}>
        <CastomSelect>
          <DropDown>{selectType ? selectType : "Выберете тип"}</DropDown>
          <OptionList>
            <Option
              onClick={() => choiceFunc(null, null, "type", setSelectType)}
            >
              Показать все
            </Option>
            {types.map((l) => (
              <Option
                key={l.id}
                onClick={(e) =>
                  choiceFunc(l.typeName, `${l.id}`, "type", setSelectType)
                }
                active={`${l.id}` === brandQuery}
              >
                {l.typeName}
              </Option>
            ))}
          </OptionList>
        </CastomSelect>
      </FilterElement>

      {/** SQUARE FILTER */}

      <FilterElement className="mb-3" title={"Рекомендуемая площадь"}>
        <CastomSelect>
          <DropDown>{selectS ? selectS : "Выберете площадь"}</DropDown>
          <OptionList>
            {sArray.map((l) => (
              <Option
                key={l.id}
                onClick={(e) =>
                  choiceFunc(l.name, l.value, "square", setSelectS)
                }
              >
                {l.name}
              </Option>
            ))}
          </OptionList>
        </CastomSelect>
      </FilterElement>

      {/**  COMPRESSOR FILTER */}

      <FilterElement
        // sleep
        className="mb-3"
        title={"Технология компрессора"}
      >
        <CastomChecked>
          {compressorArray.map((i) => (
            <RadioItem
              key={i.id}
              value={"Технология компрессора" + i.name}
              onClick={(e) =>
                choiceFunc(i.name, i.value, "compressor", setCompressor)
              }
              checked={i.name === compressor}
            >
              {i.name}
            </RadioItem>
          ))}
        </CastomChecked>
      </FilterElement>

      {/** WIFI FILTER */}

      <FilterElement
        // sleep
        className="mb-3"
        title={"Наличие WiFi"}
      >
        <CastomChecked>
          {WiFiArray.map((i) => (
            <RadioItem
              key={i.id}
              value={"Наличие WiFi" + i.name}
              onClick={(e) => choiceFunc(i.name, i.value, "wifi", setWiFi)}
              checked={i.name === wiFi}
            >
              {i.name}
            </RadioItem>
          ))}
        </CastomChecked>
      </FilterElement>

      {/** COLOR FILTER */}

      <FilterElement
        // sleep
        className="mb-3"
        title={"Цвет внутреннего блока"}
      >
        <CastomChecked>
          {colorArray.map((i) => (
            <RadioItem
              key={i.id}
              value={"Цвет внутреннего блока" + i.name}
              onClick={(e) => choiceFunc(i.name, i.value, "color", setColor)}
              checked={i.name === color}
            >
              {i.name}
            </RadioItem>
          ))}
        </CastomChecked>
      </FilterElement>
    </div>
  );

  return (
    <div className={`${className}`}>
      {width < 640 && (
        <div
          className="
        w-full
        mb-4
        "
        >
          <Button
            onClick={getFilters}
            outline
            Icon={BiSliderAlt}
            label="Фильтры"
          />
        </div>
      )}
      {width >= 640 ? allFiltersBlock : <>{showFilters && allFiltersBlock}</>}
    </div>
  );
}

export default FilterBlock;
