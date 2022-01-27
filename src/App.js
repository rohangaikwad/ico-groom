import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';


import MainContext from './Contexts/MainContext';

import { NavigateTo } from './Utils/Helpers';

import Router from './Components/Router';

import Fa47 from './Data/Fa47.json';
import FaSolid from './Data/FaSolid.json';
import FaRegular from './Data/FaRegular.json';
import FaLight from './Data/FaLight.json';
import FaBrands from './Data/FaBrands.json';

import FaSolid6 from './Data/FaSolid6.json';
import FaRegular6 from './Data/FaRegular6.json';
import FaLight6 from './Data/FaLight6.json';
import FaBrands6 from './Data/FaBrands6.json';
import FaThin6 from './Data/FaThin6.json';
import FaDuotone6 from './Data/FaDuotone6.json';

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
            solid6: FaSolid6,
            regular6: FaRegular6,
            light6: FaLight6,
            brands6: FaBrands6,
            thin6: FaThin6,
            duotone6: FaDuotone6,
            activeCategory: 'solid6',
            customicons: [],
            keyword: '',
            selected: {
                solid6: [],
                regular6: [],
                light6: [],
                thin6: [],
                brands6: [],
                duotone6: [],
                solid: [],
                regular: [],
                light: [],
                brands: [],
                fa47: []
            },
            defaultsLoaded: false
        }
    }

    componentDidMount() {
        let uuid = Cookies.get('uuid');
        if (uuid === undefined) {
            uuid = uuidv4();
            Cookies.set('uuid', uuid, { expires: 9999 })
        }

        ReactGA.initialize('G-7S16PWJKD4', {
            gaOptions: {
                userId: uuid
            }
            //gaAddress: `${window.location.origin}/static-content/js/libs/analytics.js`
        });


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
                solid6: this.state.solid6,
                regular6: this.state.regular6,
                light6: this.state.light6,
                thin6: this.state.thin6,
                brands6: this.state.brands6,
                duotone6: this.state.duotone6,

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