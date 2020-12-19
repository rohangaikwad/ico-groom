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
                    <li onClick={() => this.context.setActiveCategory('fa47')} className={ac === 'fa47' ? 'active' : ''}>Fa 4.7</li>
                    <li onClick={() => this.context.setActiveCategory('solid')} className={ac === 'solid' ? 'active' : ''}>Fa 5.15.1 - Solid</li>
                    <li onClick={() => this.context.setActiveCategory('regular')} className={ac === 'regular' ? 'active' : ''}>Fa 5.15.1 - Regular</li>
                    <li onClick={() => this.context.setActiveCategory('light')} className={ac === 'light' ? 'active' : ''}>Fa 5.15.1 - Light</li>
                    <li onClick={() => this.context.setActiveCategory('brands')} className={ac === 'brands' ? 'active' : ''}>Fa 5.15.1 - Brands</li>
                </ul>
            </aside>
        )
    }
}