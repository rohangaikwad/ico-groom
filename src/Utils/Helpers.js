import React from 'react';
const { pathToRegexp } = require("path-to-regexp");

export const MatchRoute = (routes, path) => {
    let matched = false;
    let result = null;

    routes.forEach(route => {
        if (!matched) {
            let keys = [];
            let regexp = pathToRegexp(route.path, keys);
            let match = regexp.exec(path);

            if (match !== null) {
                matched = true;
                //console.log(`Match found: ${route.path} == ${path}`);
                let props = keys.map((key, i) => {
                    return {
                        [key.name]: match[i + 1]
                    }
                })

                result = React.cloneElement(route.component, ...props);
            }
        }
    })

    return result;
}

export const NavigateTo = (path, callback) => {
    const state = { 'page_name': path };
    const title = path;
    const url = path;
    window.history.pushState(state, title, url);

    callback();
}