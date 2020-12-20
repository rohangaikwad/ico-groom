import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class Selected extends Component {
    static contextType = MainContext;

    removeAll = () => {

        Object.keys(this.context.selected).forEach((cat, i) => {
            let icons = [...this.context[cat].icons];
            this.context.selected[cat].forEach((icon, j) => {
                let index = icons.findIndex(i => i.properties.code === icon.properties.code);
                delete icons[index].selected;
            })
            this.context.setIcons({ [cat]: icons })
        })


        let selected = { ...this.context.selected }
        Object.keys(this.context.selected).forEach((cat, i) => {
            selected[cat] = [];
        })
        this.context.setSelected(selected);        
    }

    removeIcon = (category, icon) => {
        let icons = [...this.context[category].icons];
        let index = icons.findIndex(i => i.properties.code === icon.properties.code);
        delete icons[index].selected;
        this.context.setIcons({ [category]: icons })

        let selected = { ...this.context.selected }
        let selIndex = selected[category].findIndex(s => s.properties.code === icon.properties.code);
        selected[category].splice(selIndex, 1);
        this.context.setSelected(selected);
    }

    render() {
        return (
            <section id="selected">
                <h1>Selected Icons</h1>
                {Object.keys(this.context.selected).map(k => this.context.selected[k]).flat().length > 0 && <button id="reset" onClick={() => this.removeAll()}>
                    <svg viewBox="0 0 896 1024"><path d="M592 864h32c8.837 0 16-7.163 16-16v0-544c0-8.837-7.163-16-16-16v0h-32c-8.837 0-16 7.163-16 16v0 544c0 8.837 7.163 16 16 16v0zM272 864h32c8.837 0 16-7.163 16-16v0-544c0-8.837-7.163-16-16-16v0h-32c-8.837 0-16 7.163-16 16v0 544c0 8.837 7.163 16 16 16v0zM880 128h-208l-67.2-89.6c-17.7-23.421-45.501-38.4-76.8-38.4v-0h-160c-31.299 0-59.1 14.979-76.625 38.159l-0.175 0.241-67.2 89.6h-208c-8.837 0-16 7.163-16 16v0 32c0 8.837 7.163 16 16 16v0h48v736c0 53.019 42.981 96 96 96v0h576c53.019 0 96-42.981 96-96v0-736h48c8.837 0 16-7.163 16-16v0-32c0-8.837-7.163-16-16-16v0zM342.4 76.8c5.92-7.784 15.174-12.767 25.595-12.8l0.005-0h160c10.426 0.033 19.68 5.016 25.542 12.721l0.058 0.079 38.4 51.2h-288zM768 928c0 17.673-14.327 32-32 32v0h-576c-17.673 0-32-14.327-32-32v0-736h640zM432 864h32c8.837 0 16-7.163 16-16v0-544c0-8.837-7.163-16-16-16v0h-32c-8.837 0-16 7.163-16 16v0 544c0 8.837 7.163 16 16 16v0z"></path></svg>
                    <span>Clear Selection</span>
                </button>}
                

                {Object.keys(this.context.selected).map((cat, i) => (
                    <React.Fragment key={i}>
                        {this.context.selected[cat].length > 0 && <div className={`${cat} category`} key={i}>
                            <h5>{cat}</h5>
                            <ul>
                                {this.context.selected[cat].map((icon, j) => (
                                    <li key={j} onClick={() => this.removeIcon(cat, icon)}>
                                        <svg viewBox={`0 0 ${icon.icon.width || 1024} 1024`}>
                                            {icon.icon.paths.map((path, j) => (
                                                <path key={j} d={path} />
                                            ))}
                                        </svg>
                                    </li>
                                ))}
                            </ul>
                        </div>}
                    </React.Fragment>
                ))}
            </section>
        )
    }
}