import { Component, For } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { createVirtualizer } from "@tanstack/solid-virtual";
import Store from "./../../GlobalStore";

import { IIconType, IFontDefType, ISelectedType } from "../../types/Interfaces";

interface IVirtualItem {
  key: string | number;
  index: number;
  start: number;
  end: number;
  size: number;
}

const FontCategory: Component<{
  name: string;
  category: IFontDefType;
}> = ({ name, category }) => {
  let scrollParentRef: HTMLDivElement | undefined;
  const { icons } = category;
  const [fIcons, setFIcons] = createSignal(category.icons);
  const categoryName = category.metadata.name.replace(
    "fa-",
    ""
  ) as keyof ISelectedType;

  const { selected, setSelected, searchTerm } = Store;

  const [rowWidth, setRowWidth] = createSignal(1110);
  const [iconSize] = createSignal(40);
  const [itemsPerRow, setItemsPerRow] = createSignal(
    Math.floor(rowWidth() / (iconSize() * 3 + 10))
  );

  const rowVirtualizer = createVirtualizer({
    count: category.icons.length / itemsPerRow(),
    getScrollElement: () => scrollParentRef,
    estimateSize: () => 73,
  });
  console.log(rowVirtualizer);

  window.addEventListener("resize", () => {
    let width =
      document.querySelector(".icon-list-scroll > .icon-list")?.clientWidth ||
      300;
    setRowWidth(width);
  });

  createEffect(() => {
    if (searchTerm().length > 2) {
      let _icons = icons.filter(
        (icon) => icon.tags[0].indexOf(searchTerm()) > -1
      );
      if (_icons.length > 0) {
        rowVirtualizer.scrollToOffset({ toOffset: 0 });
        setFIcons(_icons);
      } else {
        rowVirtualizer.scrollToOffset({ toOffset: 0 });
        setFIcons(icons);
      }
    } else if (icons.length !== fIcons.length) {
      setFIcons(icons);
    }
  });

  createEffect(() => {
    let _iconSize = iconSize() * 3 + 10;
    setItemsPerRow(Math.floor(rowWidth() / _iconSize));
  });

  const toggleSelection = (icon: IIconType) => {
    setSelected((prev) => {
      let _selected = Object.assign({}, prev);

      let index = _selected[categoryName]?.findIndex(
        (s) => s.defaultCode === icon.defaultCode
      );

      if (index > -1) {
        _selected[categoryName].splice(index, 1);
      } else {
        _selected[categoryName].push(icon);
      }

      return _selected;
    });
  };

  const IsSelected = (icon: IIconType) => {
    let _selected = selected();
    let index = _selected[categoryName].findIndex(
      (s) => s.defaultCode === icon.defaultCode
    );
    return index > -1;
  };

  return (
    <>
      {fIcons().length > 0 && (
        <div class={`${name.toLowerCase()} icons`}>
          <div class="name">
            <h3>{name}</h3>
          </div>

          <div ref={scrollParentRef} class="icon-list-scroll">
            <For each={rowVirtualizer.getVirtualItems()}>
              {(virtualItem: IVirtualItem) => {
                return (
                  <ul
                    class="icon-list"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: `${virtualItem.size}px`,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                  >
                    {fIcons()
                      .slice(
                        virtualItem.index * itemsPerRow(),
                        (virtualItem.index + 1) * itemsPerRow()
                      )
                      .map((icon) => (
                        <li
                          data-code={icon?.defaultCode}
                          onClick={() => toggleSelection(icon)}
                          class={IsSelected(icon) ? "active" : ""}
                        >
                          <svg
                            width={32}
                            height={32}
                            viewBox={`0 0 ${icon.width || 1024} 1024`}
                          >
                            {icon.paths.map((path) => (
                              <path d={path} />
                            ))}
                          </svg>
                          <span>
                            {icon?.tags[0] || ""} -{" "}
                            {selected()[categoryName].findIndex(
                              (s) => s.defaultCode === icon.defaultCode
                            )}
                          </span>
                        </li>
                      ))}
                  </ul>
                );
              }}
            </For>
          </div>
          {/* <ul class="icon-list">
          {fIcons().slice(0, limit()).map((icon) => <li data-code={icon?.defaultCode} onClick={() => toggleSelection(icon)} class={IsSelected(icon) ? "active" : ""} >
            <svg width={32} height={32} viewBox={`0 0 ${icon.width || 1024} 1024`}>
              {icon.paths.map((path) => <path d={path} /> )}
            </svg>
            <span>{icon?.tags[0] || ""}</span>
          </li>)}
        </ul> */}
        </div>
      )}
    </>
  );
};

export default FontCategory;
