import React, { Component } from 'react';
import { MatchRoute } from './../Utils/Helpers';
import MainContext from './../Contexts/MainContext';

import Select from './Select/Select';
import Generate from './Generate';



export default class Router extends Component {
    static contextType = MainContext;

    selectRouteComponent = (path) => {

        // default component
        let component = <Select />

        let routes = [
            { path: '', component: <Select /> },
            { path: '/', component: <Select /> },
            { path: 'generate', component: <Generate /> },
        ]

        let matchedComponent = MatchRoute(routes, path);
        if (matchedComponent !== null) {
            component = matchedComponent;
        }

        return component;
    }

    render() {
        return (
            <>{this.selectRouteComponent(this.context.route)}</>
        )
    }
}