import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class Selected extends Component {
    static contextType = MainContext;

    removeIcon = (category, icon) => {
        let iconELem = document.querySelector(`.${category}.icons ul li[data-code="${icon.properties.code}"]`);
        iconELem.click();
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