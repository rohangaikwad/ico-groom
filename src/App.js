import React, { Component } from 'react';
import MainContext from './Contexts/MainContext';

import { NavigateTo } from './Utils/Helpers';

import Router from './Components/Router';

import Fa47 from './Data/Fa47.json';
import FaSolid from './Data/FaSolid.json';
import FaRegular from './Data/FaRegular.json';
import FaLight from './Data/FaLight.json';
import FaBrands from './Data/FaBrands.json';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: '/',
            fa47: Fa47,
            brands: FaBrands,
            solid: FaSolid,
            regular: FaRegular,
            light: FaLight,
            activeCategory: 'all',
            customicons: [],
            keyword: '',
            selected: {
                fa47: [],
                solid: [],
                regular: [],
                light: [],
                brands: []
            },
            defaultsLoaded: false
        }
    }

    componentDidMount() {
        window.onpopstate = (evt) => {
            console.log(evt);
            console.log(this.state.route);

            if (evt.state) {
                let path = evt.state.page_name;
                NavigateTo(path, () => {
                    evt.state.page_name && this.setState({ route: path });
                    console.log(this.state.route);
                })
            }
        }

        this.setRouteFromURL();
    }

    setRouteFromURL = () => {
        let pathname = window.location.pathname;
        let path = pathname.length < 2 ? pathname : pathname.replace(/^\//, '').replace(/\/$/, '');

        NavigateTo(path, () => {
            this.setState({ route: path });
        })
    }

    render() {
        return (
            <MainContext.Provider value={{
                brands: this.state.brands,
                solid: this.state.solid,
                regular: this.state.regular,
                light: this.state.light,
                fa47: this.state.fa47,
                setIcons: (key, data) => this.setState({ [key]: data }),

                selected: this.state.selected,
                setSelected: (data) => this.setState({ selected: data }),

                customicons: this.state.customicons,
                activeCategory: this.state.activeCategory,
                setActiveCategory: (name) => this.setState({ activeCategory: name }),
                keyword: this.state.keyword,
                search: (data) => this.setState({ keyword: data }),

                route: this.state.route,
                navTo: (path) => this.setState({ route: path }),

                defaultsLoaded: this.state.defaultsLoaded,
                setDefaultsLoaded: (val) => this.setState({ defaultsLoaded: val }),
            }}>
                <Router />
            </MainContext.Provider>
        )
    }
}