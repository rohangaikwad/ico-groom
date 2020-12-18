import React, { Component } from 'react';
import MainContext from '../Contexts/MainContext';
import { NavigateTo } from './../Utils/Helpers';

export default class Generate extends Component {
    static contextType = MainContext;

    constructor(props) {
        super(props);
        this.state = {
            icons: []
        }

    }

    componentDidMount() {
        this.mounted = true;
        let icons = JSON.parse(JSON.stringify(Object.keys(this.context.selected).map(k => this.context.selected[k]).flat()));

        let codes = icons.map(icon => icon.properties.code);

        let duplicates = [...new Set(codes.filter((item, index) => codes.indexOf(item) !== index))];

        //console.log(icons);
        if (this.mounted) {
            this.setState({ icons, duplicates });
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    navigate = (path) => {
        NavigateTo(path, () => {
            this.context.navTo(path);
        })
    }

    updateCode = (index, hexValue) => {
        let _icons = [...this.state.icons];
        _icons[index].properties.code = parseInt(hexValue, 16);
        this.setState({ icons: _icons });
    }

    download = () => {
        let jsonStr = JSON.stringify(this.generateJSON());

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
        element.setAttribute('download', 'icomoon.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    generateJSON = () => {
        return {
            "IcoMoonType": "selection",
            "icons": this.state.icons,
            "height": 1024,
            "metadata": {
                "name": "icomoon",
                "designer": "Rohan Gaikwad"
            },
            "preferences": {
                "showGlyphs": true,
                "showCodes": true,
                "showQuickUse": true,
                "showQuickUse2": true,
                "showSVGs": true,
                "fontPref": {
                    "prefix": "fa-",
                    "metadata": {
                        "fontFamily": "icomoon",
                        "majorVersion": 1,
                        "minorVersion": 0,
                        "designer": "Rohan Gaikwad"
                    },
                    "metrics": {
                        "emSize": 1024,
                        "baseline": 6.25,
                        "whitespace": 50
                    },
                    "embed": false,
                    "noie8": true,
                    "ie7": false,
                    "showSelector": false,
                    "showMetrics": false,
                    "showMetadata": true,
                    "showVersion": true
                },
                "imagePref": {
                    "prefix": "fa-",
                    "png": true,
                    "useClassSelector": true,
                    "color": 0,
                    "bgColor": 16777215
                },
                "historySize": 50
            }
        }
    }

    render() {
        return (
            <div id="generate-bundle">
                <h1>Generate</h1>

                <section id="glyphs">
                    <h2>Selected Icons</h2>
                    <ul>
                        {this.state.icons.map((icon, i) => (
                            <li key={i} className={this.state.duplicates.includes(icon.properties.code) ? 'duplicate' : ''}>
                                <svg viewBox={`0 0 ${icon.icon.width || 1024} 1024`}>
                                    {icon.icon.paths.map((path, j) => (
                                        <path key={j} d={path} />
                                    ))}
                                </svg>
                                <input pattern="[a-fA-F0-9]" type="text" value={icon.properties.code.toString(16)} onChange={(e) => this.updateCode(i, e.target.value)} />
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="actions">
                    <button id="download" onClick={() => this.download()}>Download</button>
                    <button id="select" onClick={() => this.navigate('/')}>+ Add More Icons</button>
                </div>

                <ol>
                    <li>Open <a href="https://icomoon.io/app/#/projects" target="_blank" rel="noreferrer">Icomoon App</a></li>
                    <li>Click on <code>Import Project</code> and select downloaded JSON file.</li>
                    <li>Click on <code>Load</code></li>
                    <li>Profit?</li>
                </ol>
                <p></p>

            </div>
        )
    }
}