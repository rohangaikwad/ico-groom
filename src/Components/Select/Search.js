import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class Search extends Component {
    static contextType = MainContext;    

    componentDidMount() {
        this.searchElem.addEventListener('search', () => {
            this.context.search('');
        })
    }

    search = (val) => {
        this.context.search(val);
    }

    render() {
        return (
            <section id="search">
                <input ref={x => this.searchElem = x} type="search" onKeyUp={(e) => this.search(e.target.value)} placeholder="Search icons"/>
            </section>
        )
    }
}