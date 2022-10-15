import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
// import ReactGA from 'react-ga';
// import Cookies from 'js-cookie';
// import { v4 as uuidv4 } from 'uuid';

import Select from "./components/Select/Select";
import Generate from "./components/Generate";

const App: Component = () => {
  
  // let uuid = Cookies.get('uuid');
  // if (uuid === undefined) {
  //   uuid = uuidv4();
  //   Cookies.set('uuid', uuid, { expires: 9999 })
  // }

  // ReactGA.initialize('G-7S16PWJKD4', {
  //   gaOptions: {
  //     userId: uuid
  //   }
  //   //gaAddress: `${window.location.origin}/static-content/js/libs/analytics.js`
  // });

  return (
    <Routes>
      <Route path="/" component={Select} />
      <Route path="/generate" component={Generate} />
    </Routes>
  );
};

export default App;
