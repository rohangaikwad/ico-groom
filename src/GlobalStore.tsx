import { createSignal, createRoot } from "solid-js";

import Fa47 from "./assets/data/Fa47.json";

import FaSolid6 from "./assets/data/FaSolid62.json";
import FaRegular6 from "./assets/data/FaRegular62.json";
import FaLight6 from "./assets/data/FaLight62.json";
import FaBrands6 from "./assets/data/FaBrands62.json";
import FaThin6 from "./assets/data/FaThin62.json";
import FaDuotone6 from "./assets/data/FaDuotone62.json";
import FaSharpSolid6 from "./assets/data/FaSharpSolid62.json";
import { FontDefType } from "./Interfaces";

const createStore = () => {
  const [activeCategory, setActiveCategory] = createSignal<string>("solid6");
  const [searchTerm, setSearchTerm] = createSignal<string>("");


  const fa47 = Fa47 as FontDefType;
  const solid6 = FaSolid6 as FontDefType;
  const regular6 = FaRegular6 as FontDefType;
  const light6 = FaLight6 as FontDefType;
  const brands6 = FaBrands6 as FontDefType;
  const thin6 = FaThin6 as FontDefType;
  const duotone6 = FaDuotone6 as FontDefType;
  const sharpSolid6 = FaSharpSolid6 as FontDefType;

  const [selected, setSelected] = createSignal({
    solid6: [],
    sharpSolid6: [],
    regular6: [],
    light6: [],
    thin6: [],
    brands6: [],
    duotone6: [],
    solid: [],
    regular: [],
    light: [],
    brands: [],
    // fa47: [ "f002", "f003", "f004", "f005", "f006", "f00c", "f00d", "f013", "f053", "f054", "f067", "f068", "f07a", "f077", "f078", "f08a", "f08b", "f08c", "f081", "f082", "f090", "f095", "f09a", "f09c", "f0e0", "f104", "f105", "f106", "f107", "f166", "f16a", "f2c0", "f06e", "f073", "f041", "f02f", "f009", "f00a", "f00b", "f023", "f040", "f044", "f099", "f0b0", "f1f8", "f230" ],
    // fa47: [61442, 61443, 61444, 61445, 61446, 61452, 61453, 61459, 61523, 61524, 61543, 61544, 61562, 61559, 61560, 61578, 61579, 61580, 61569, 61570, 61584, 61589, 61594, 61596, 61664, 61700, 61701, 61702, 61703, 61798, 61802, 62144, 61550, 61555, 61505, 61487, 61449, 61450, 61451, 61475, 61504, 61508, 61593, 61616, 61944, 62000]
    fa47: fa47.icons.filter(icon => [61442, 61443, 61444, 61445, 61446, 61452, 61453, 61459, 61523, 61524, 61543, 61544, 61562, 61559, 61560, 61578, 61579, 61580, 61569, 61570, 61584, 61589, 61594, 61596, 61664, 61700, 61701, 61702, 61703, 61798, 61802, 62144, 61550, 61555, 61505, 61487, 61449, 61450, 61451, 61475, 61504, 61508, 61593, 61616, 61944, 62000].includes(icon.defaultCode))
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
    setSearchTerm
  };
}

export default createRoot(createStore);
