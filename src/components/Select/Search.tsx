import { Component, createEffect } from "solid-js";
import store from "./../../GlobalStore";

const Search: Component = () => {
  const { setSearchTerm } = store;
  let searchInput: any;

  createEffect(() => {
    searchInput.addEventListener("search", function (event: InputEvent) {
      let value = (event.target as HTMLInputElement).value;
      if(value.length === 0) setSearchTerm("");
    });
  })

  return (
    <section id="search">
      <input ref={searchInput} type="search" onKeyUp={(event) => setSearchTerm((event.target as HTMLInputElement).value)} placeholder="Search icons" />
    </section>
  );
};

export default Search;
