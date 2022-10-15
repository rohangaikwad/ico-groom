import type { Component } from 'solid-js';
import Store from "./../../GlobalStore";

const Sidebar: Component = () => {
    const { activeCategory, setActiveCategory } = Store;
    
    return (
        <aside>
            <ul>
                {/* <li onClick={() => setActiveCategory('all')} class={activeCategory() === 'all' ? 'active' : ''}>All</li> */}
                <li onClick={() => setActiveCategory('fa47')} class={activeCategory() === 'fa47' ? 'active' : ''}>Fa 4.7</li>
                <li onClick={() => setActiveCategory('solid6')} class={activeCategory() === 'solid6' ? 'active' : ''}>Fa 6.2.0 - Solid</li>
                <li onClick={() => setActiveCategory('regular6')} class={activeCategory() === 'regular6' ? 'active' : ''}>Fa 6.2.0 - Regular</li>
                <li onClick={() => setActiveCategory('light6')} class={activeCategory() === 'light6' ? 'active' : ''}>Fa 6.2.0 - Light</li>
                <li onClick={() => setActiveCategory('thin6')} class={activeCategory() === 'thin6' ? 'active' : ''}>Fa 6.2.0 - Thin</li>
                <li onClick={() => setActiveCategory('duotone6')} class={activeCategory() === 'duotone6' ? 'active' : ''}>Fa 6.2.0 - Duotone</li>
                <li onClick={() => setActiveCategory('sharpSolid6')} class={activeCategory() === 'sharpSolid6' ? 'active' : ''}>Fa 6.2.0 - Sharp Solid</li>
                <li onClick={() => setActiveCategory('brands6')} class={activeCategory() === 'brands6' ? 'active' : ''}>Fa 6.2.0 - Brands</li>

                {/* <li onClick={() => setActiveCategory('solid')} class={activeCategory() === 'solid' ? 'active' : ''}>Fa 5.15.1 - Solid</li>
                <li onClick={() => setActiveCategory('regular')} class={activeCategory() === 'regular' ? 'active' : ''}>Fa 5.15.1 - Regular</li>
                <li onClick={() => setActiveCategory('light')} class={activeCategory() === 'light' ? 'active' : ''}>Fa 5.15.1 - Light</li>
                <li onClick={() => setActiveCategory('brands')} class={activeCategory() === 'brands' ? 'active' : ''}>Fa 5.15.1 - Brands</li>
                <li onClick={() => setActiveCategory('fa47')} class={activeCategory() === 'fa47' ? 'active' : ''}>Fa 4.7</li> */}
            </ul>
        </aside>
    )
}

export default Sidebar;