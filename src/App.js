import React, { Component } from 'react';
import MainContext from './Contexts/MainContext';

import { NavigateTo } from './Utils/Helpers';

import Router from './Components/Router';

import FaBrands from './Data/FaBrands.json';
import FaLight from './Data/FaLight.json';
import FaSolid from './Data/FaSolid.json';
import FaRegular from './Data/FaRegular.json';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: '/',
            brands: FaBrands,
            solid: FaSolid,
            regular: FaRegular,
            light: FaLight,
            activeCategory: 'all',
            customicons: [],
            keyword: '',
            selected: {
                solid: [],
                regular: [],
                light: [],
                brands: []
            }
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
                setIcons: (key, data) => this.setState({ [key]: data }),

                selected: this.state.selected,
                setSelected: (data) => this.setState({ selected: data }),

                customicons: this.state.customicons,
                activeCategory: this.state.activeCategory,
                setActiveCategory: (name) => this.setState({ activeCategory: name }),
                keyword: this.state.keyword,
                search: (data) => this.setState({ keyword: data }),

                route: this.state.route,
                navTo: (path) => this.setState({ route: path })
            }}>
                <Router />
            </MainContext.Provider>
        )
    }
}