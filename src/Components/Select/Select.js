import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';
import FontCategory from "./FontCategory";
import Sidebar from './Sidebar';
import Selected from './Selected';
import Search from './Search';

import { NavigateTo } from './../../Utils/Helpers';

export default class Select extends Component {
    static contextType = MainContext;

    navigate = (path) => {
        NavigateTo(path, () => {
            this.context.navTo(path);
        })
    }


    render() {
        let ac = this.context.activeCategory;
        return (
            <div id="selection">
                <Search />

                <Sidebar />

                <section id="icons">
                    {(ac === 'all' || ac === 'solid') && <FontCategory keyword={this.context.keyword} name="Solid" category={this.context.solid} />}
                    {(ac === 'all' || ac === 'regular') && <FontCategory keyword={this.context.keyword} name="Regular" category={this.context.regular} />}
                    {(ac === 'all' || ac === 'light') && <FontCategory keyword={this.context.keyword} name="Light" category={this.context.light} />}
                    {(ac === 'all' || ac === 'brands') && <FontCategory keyword={this.context.keyword} name="Brands" category={this.context.brands} />}
                </section>

                <Selected />

                <button id="generate" onClick={() => this.navigate('generate')}>
                    Generate
                </button>
            </div>
        )
    }
}