import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class Sidebar extends Component {
    static contextType = MainContext;

    render() {
        let ac = this.context.activeCategory;
        return (
            <aside>
                <ul>
                    <li onClick={() => this.context.setActiveCategory('all')} className={ac === 'all' ? 'active' : ''}>All</li>
                    <li onClick={() => this.context.setActiveCategory('solid6')} className={ac === 'solid6' ? 'active' : ''}>Fa 6-beta3 - Solid</li>
                    <li onClick={() => this.context.setActiveCategory('regular6')} className={ac === 'regular6' ? 'active' : ''}>Fa 6-beta3 - Regular</li>
                    <li onClick={() => this.context.setActiveCategory('light6')} className={ac === 'light6' ? 'active' : ''}>Fa 6-beta3 - Light</li>
                    <li onClick={() => this.context.setActiveCategory('thin6')} className={ac === 'thin6' ? 'active' : ''}>Fa 6-beta3 - Thin</li>
                    <li onClick={() => this.context.setActiveCategory('duotone6')} className={ac === 'duotone6' ? 'active' : ''}>Fa 6-beta3 - Duotone</li>
                    <li onClick={() => this.context.setActiveCategory('brands6')} className={ac === 'brands6' ? 'active' : ''}>Fa 6-beta3 - Brands</li>

                    <li onClick={() => this.context.setActiveCategory('solid')} className={ac === 'solid' ? 'active' : ''}>Fa 5.15.1 - Solid</li>
                    <li onClick={() => this.context.setActiveCategory('regular')} className={ac === 'regular' ? 'active' : ''}>Fa 5.15.1 - Regular</li>
                    <li onClick={() => this.context.setActiveCategory('light')} className={ac === 'light' ? 'active' : ''}>Fa 5.15.1 - Light</li>
                    <li onClick={() => this.context.setActiveCategory('brands')} className={ac === 'brands' ? 'active' : ''}>Fa 5.15.1 - Brands</li>
                    <li onClick={() => this.context.setActiveCategory('fa47')} className={ac === 'fa47' ? 'active' : ''}>Fa 4.7</li>
                </ul>
            </aside>
        )
    }
}