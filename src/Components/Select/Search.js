import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class Search extends Component {
    static contextType = MainContext;


    search = (val) => {
        this.context.search(val);
    }

    render() {
        return (
            <section id="search">
                <input type="text" onKeyUp={(e) => this.search(e.target.value)} />
            </section>
        )
    }
}