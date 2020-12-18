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
                    <li onClick={() => this.context.setActiveCategory('solid')} className={ac === 'solid' ? 'active' : ''}>Solid</li>
                    <li onClick={() => this.context.setActiveCategory('regular')} className={ac === 'regular' ? 'active' : ''}>Regular</li>
                    <li onClick={() => this.context.setActiveCategory('light')} className={ac === 'light' ? 'active' : ''}>Light</li>
                    <li onClick={() => this.context.setActiveCategory('brands')} className={ac === 'brands' ? 'active' : ''}>Brands</li>
                </ul>
            </aside>
        )
    }
}