import { createSignal, createRoot } from "solid-js";

import Fa47 from "./assets/data/Fa47.json";

import FaSolid6 from "./assets/data/FaSolid62.json";
import FaRegular6 from "./assets/data/FaRegular62.json";
import FaLight6 from "./assets/data/FaLight62.json";
import FaBrands6 from "./assets/data/FaBrands62.json";
import FaThin6 from "./assets/data/FaThin62.json";
import FaDuotone6 from "./assets/data/FaDuotone62.json";
import FaSharpSolid6 from "./assets/data/FaSharpSolid62.json";
import { IFontDefType, ISelectedType } from "./types/Interfaces";

const Store = () => {
  const [activeCategory, setActiveCategory] = createSignal<string>("solid6");
  const [searchTerm, setSearchTerm] = createSignal<string>("");

  const fa47 = Fa47 as IFontDefType;
  const solid6 = FaSolid6 as IFontDefType;
  const regular6 = FaRegular6 as IFontDefType;
  const light6 = FaLight6 as IFontDefType;
  const brands6 = FaBrands6 as IFontDefType;
  const thin6 = FaThin6 as IFontDefType;
  const duotone6 = FaDuotone6 as IFontDefType;
  const sharpSolid6 = FaSharpSolid6 as IFontDefType;

  const [selected, setSelected] = createSignal<ISelectedType>({
    solid6: [],
    sharpSolid6: [],
    regular6: [],
    light6: [],
    thin6: [],
    brands6: [],
    duotone6: [],
    fa47: fa47.icons.filter((icon) =>
      [
        61442, 61443, 61444, 61445, 61446, 61452, 61453, 61459, 61523, 61524,
        61543, 61544, 61562, 61559, 61560, 61578, 61579, 61580, 61569, 61570,
        61584, 61589, 61594, 61596, 61664, 61700, 61701, 61702, 61703, 61798,
        61802, 62144, 61550, 61555, 61505, 61487, 61449, 61450, 61451, 61475,
        61504, 61508, 61593, 61616, 61944, 62000,
      ].includes(icon.defaultCode)
    ),
  });

  return {
    activeCategory,
    setActiveCategory,
    fa47,
    solid6,
    regular6,
    light6,
    brands6,
    thin6,
    duotone6,
    sharpSolid6,
    keyword: "",
    selected,
    setSelected,
    searchTerm,
    setSearchTerm,
  };
};

export default createRoot(Store);
