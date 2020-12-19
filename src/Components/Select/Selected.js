import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class Selected extends Component {
    static contextType = MainContext;

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