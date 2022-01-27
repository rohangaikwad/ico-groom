import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';
import FontCategory from "./FontCategory";
import Sidebar from './Sidebar';
import Selected from './Selected';
import Search from './Search';

import { NavigateTo } from './../../Utils/Helpers';
import ReactGA from 'react-ga';

export default class Select extends Component {
    static contextType = MainContext;

    componentDidMount(){
        ReactGA.pageview('/home');
    }

    navigate = (path) => {
        ReactGA.event({
            category: 'User',
            action: 'Selected icons',
            value: 1
        });

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
                    {(ac === 'all' || ac === 'solid6') && <FontCategory keyword={this.context.keyword} name="Solid6" category={this.context.solid6} />}
                    {(ac === 'all' || ac === 'regular6') && <FontCategory keyword={this.context.keyword} name="Regular6" category={this.context.regular6} />}
                    {(ac === 'all' || ac === 'light6') && <FontCategory keyword={this.context.keyword} name="Light6" category={this.context.light6} />}
                    {(ac === 'all' || ac === 'thin6') && <FontCategory keyword={this.context.keyword} name="Thin6" category={this.context.thin6} />}
                    {(ac === 'all' || ac === 'duotone6') && <FontCategory keyword={this.context.keyword} name="Duotone6" category={this.context.duotone6} />}
                    {(ac === 'all' || ac === 'brands6') && <FontCategory keyword={this.context.keyword} name="Brands6" category={this.context.brands6} />}

                    {(ac === 'all' || ac === 'solid') && <FontCategory keyword={this.context.keyword} name="Solid" category={this.context.solid} />}
                    {(ac === 'all' || ac === 'regular') && <FontCategory keyword={this.context.keyword} name="Regular" category={this.context.regular} />}
                    {(ac === 'all' || ac === 'light') && <FontCategory keyword={this.context.keyword} name="Light" category={this.context.light} />}
                    {(ac === 'all' || ac === 'brands') && <FontCategory keyword={this.context.keyword} name="Brands" category={this.context.brands} />}
                    {(ac === 'all' || ac === 'fa47') && <FontCategory keyword={this.context.keyword} name="Fa47" category={this.context.fa47} />}
                </section>

                <Selected />

                <button id="generate" onClick={() => this.navigate('generate')}>
                    Generate
                </button>
            </div>
        )
    }
}