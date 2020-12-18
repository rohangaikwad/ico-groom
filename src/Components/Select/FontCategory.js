import React, { Component } from 'react';
import MainContext from '../../Contexts/MainContext';

export default class FontCategory extends Component {
    static contextType = MainContext;

    constructor(props) {
        super(props);

        this.state = {
            icons: [],
            limit: 5
        }
    }

    componentDidMount() {
        this.mounted = true;

        this.category = this.props.category.metadata.name.replace('fa-', '');

        this.mounted && this.setState({ icons: [...this.props.category.icons] })

        // optimization - staggered icon load
        let interval = setInterval(() => {
            this.mounted && this.setState({ limit: this.state.limit + 5 })
        }, 10)
        
        setTimeout(() => {
            clearInterval(interval);
            this.mounted && this.setState({ limit: 2000 })
        }, 500)
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidUpdate(old) {
        if (old.keyword === this.props.keyword) return;
        let keyword = this.props.keyword.toLowerCase();

        if (keyword !== '') {

            let icons = [...this.props.category.icons].filter(icon => {
                if (icon.properties.code.toString(16).indexOf(keyword) > -1) {
                    return true
                }
                if (icon.properties.name.indexOf(keyword) > -1) {
                    return true
                }
                return false;
            })

            this.setState({ icons: icons });
        } else {
            this.setState({ icons: [...this.props.category.icons] });
        }
    }

    toggleSelection = (icon) => {
        let icons = [...this.props.category.icons];
        //console.log(icons[0])
        let index = icons.findIndex(i => i.properties.name === icon.properties.name);
        let selectedIcon = icons[index].selected !== undefined;

        let selected = { ...this.context.selected }

        if (selectedIcon) {
            delete icons[index].selected;

            let selIndex = selected[this.category].findIndex(s => s.properties.code === icon.properties.code);
            selected[this.category].splice(selIndex, 1);
        } else {
            icons[index]['selected'] = true;

            selected[this.category].push(icon)
        }

        this.context.setIcons({ [this.category]: icons })
        this.context.setSelected(selected);
    }

    render() {
        return (
            <>
                {this.state.icons.length > 0 && <div className={`${this.props.name.toLowerCase()} icons`}>
                    <div className="name">
                        <h3>{this.props.name}</h3>
                    </div>
                    <ul className="icon-list">
                        {this.state.icons.slice(0, this.state.limit).map((icon, i) => (
                            <li data-code={icon.properties.code} key={i}
                                onClick={() => this.toggleSelection(icon)}
                                className={icon.selected ? 'active' : ''}>
                                <svg viewBox={`0 0 ${icon.icon.width || 1024} 1024`}>
                                    {icon.icon.paths.map((path, j) => (
                                        <path key={j} d={path} />
                                    ))}
                                </svg>
                                <span>{icon.properties.name || ""}</span>
                            </li>
                        ))}
                    </ul>
                </div>}
            </>
        )
    }
}