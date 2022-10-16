import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import Store from "./../../GlobalStore";

import { IIconType, IFontDefType, ISelectedType } from "../../types/Interfaces";

const FontCategory: Component<{
  name: string,
  category: IFontDefType
}> = ({name, category}) => {

  const { icons } = category;
  const [fIcons, setFIcons] = createSignal(category.icons);
  const [limit, setLimit] = createSignal(50);
  const categoryName = category.metadata.name.replace('fa-', '') as keyof ISelectedType;

  const { selected, setSelected, searchTerm } = Store;

  createEffect(() => {
    if (searchTerm().length > 2) {
      let _icons = icons.filter((icon) => icon.tags[0].indexOf(searchTerm()) > -1);
      if (_icons.length > 0) {
        setFIcons(_icons);
      } else {
        setFIcons(icons);
      }

    } else if (icons.length !== fIcons.length) {
      setFIcons(icons);
    }
  });

  const toggleSelection = (icon: IIconType) => {
      let _selected = selected();
      let index = _selected[categoryName].findIndex((s) => s.defaultCode === icon.defaultCode);

      if (index > -1) {
        _selected[categoryName].splice(index, 1);
      } else {
        _selected[categoryName].push(icon);
      }
      
      setSelected(_selected);
  }

  const IsSelected = (icon: IIconType) => {
    let _selected = selected();
    let index = _selected[categoryName].findIndex((s) => s.defaultCode === icon.defaultCode);
    return index > -1;
  }


  return (
    <>
      {fIcons().length > 0 && <div class={`${name.toLowerCase()} icons`}>
        <div class="name"><h3>{name}</h3></div>
        <ul class="icon-list">
          {fIcons().slice(0, limit()).map((icon) => <li data-code={icon?.defaultCode} onClick={() => toggleSelection(icon)} class={IsSelected(icon) ? "active" : ""} >
            <svg width={32} height={32} viewBox={`0 0 ${icon.width || 1024} 1024`}>
              {icon.paths.map((path) => <path d={path} /> )}
            </svg>
            <span>{icon?.tags[0] || ""}</span>
          </li>)}
        </ul>
      </div>}
    </>
  );
};

export default FontCategory;
