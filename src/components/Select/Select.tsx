import type { Component } from 'solid-js';
import { useNavigate } from "@solidjs/router";

import FontCategory from "./FontCategory";
import Sidebar from './Sidebar';
import Selected from './Selected';
import Search from './Search';
// import ReactGA from 'react-ga';

import Store from "./../../GlobalStore";

const Select: Component = () => {
    const navigate = useNavigate();

    const { activeCategory, sharpSolid6, solid6, regular6, light6, thin6, duotone6, brands6, fa47 } = Store;
    // ReactGA.pageview('/home');

    const navigateTo = (path: string) => {
        // ReactGA.event({
        //     category: 'User',
        //     action: 'Selected icons',
        //     value: 1
        // });
        navigate(path);
    }

    
    return (
        <div id="selection">
            <Search />

            <Sidebar />

            <section id="icons">
                {activeCategory() ==='solid6' && <FontCategory name="Solid6" category={solid6} />}
                {activeCategory() ==='regular6' && <FontCategory name="Regular6" category={regular6} />}
                {activeCategory() ==='light6' && <FontCategory name="Light6" category={light6} />}
                {activeCategory() ==='thin6' && <FontCategory name="Thin6" category={thin6} />}
                {activeCategory() ==='duotone6' && <FontCategory name="Duotone6" category={duotone6} />}
                {activeCategory() ==='brands6' && <FontCategory name="Brands6" category={brands6} />}
                {activeCategory() ==='sharpSolid6' && <FontCategory name="SharpSolid6" category={sharpSolid6} />}
                {activeCategory() ==='fa47' && <FontCategory name="Fa47" category={fa47} />}
            </section>

            <Selected />

            <button id="generate" onClick={() => navigateTo('/generate')}>
                Generate
            </button>
        </div>
    )
}
export default Select;