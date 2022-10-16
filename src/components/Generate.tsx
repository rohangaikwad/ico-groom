import type { Component } from 'solid-js';
import { IIconType } from '../types/Interfaces';
import { useNavigate } from "@solidjs/router";
// import ReactGA from 'react-ga';

import Store from "./../GlobalStore";

const Generate: Component = () => {
    
    // ReactGA.pageview('/generate');

    const navigate = useNavigate();
    const { selected } = Store;

    const icons = Object.values(selected()).flat();
    const codes = icons.map((icon: IIconType) => icon.defaultCode);
    const duplicates = [...new Set(codes.filter((item, index) => codes.indexOf(item) !== index))];

    const navigateTo = (path:string) => {
        // NavigateTo(path, () => {
        //     this.context.navTo(path);
        // })
        navigate(path);
    }

    const updateCode = (index: number, value: string) => {
        let _icons = [...icons];
        _icons[index].defaultCode = parseInt(value);
        _icons = icons;

        let codes = _icons.map(icon => icon.defaultCode);
        let _duplicates = [...new Set(codes.filter((item, index) => codes.indexOf(item) !== index))];
        //duplicates = _duplicates;
    }

    const download = () => {
        let jsonStr = JSON.stringify(generateJSON());

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
        element.setAttribute('download', 'icomoon.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        Object.entries(selected()).forEach(catArr => {
            catArr[1].forEach((icon: IIconType) => {
                // ReactGA.event({
                //     category: 'Icons',
                //     action: 'Downloaded',
                //     label: `${icon.properties.name} - ${cat}`,
                //     value: 1,
                //     nonInteraction: true
                // });
            })
        });

        // ReactGA.event({
        //     category: 'User',
        //     action: 'Downloaded icons',
        //     value: 1
        // });
    }

    const generateJSON = () => {
        return {
            "IcoMoonType": "selection",
            "icons": icons,
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
    
    return (
        <div id="generate-bundle">
            <h1>Generate</h1>

            <section id="glyphs">
                <h2>Selected Icons</h2>
                <ul>
                    {icons.map((icon: IIconType, i) => (
                        <li class={duplicates.includes(icon.defaultCode) ? 'duplicate' : ''}>
                            <svg viewBox={`0 0 ${icon.width || 1024} 1024`}>
                                {icon.paths.map((path) => (
                                    <path d={path} />
                                ))}
                            </svg>
                            <input pattern="[a-fA-F0-9]" type="number" value={icon.defaultCode} onChange={(e) => updateCode(i, (e.target as HTMLInputElement).value)} />
                        </li>
                    ))}
                </ul>
            </section>

            {duplicates.length > 0 && <div class="duplicate-alert">Warning: Please change unicodes of icons highlighted in red. Each icon should have a unique Unicode identifier!</div>}

            <div class="actions">
                <button id="download" onClick={() => download()}>Download</button>
                <button id="select" onClick={() => navigateTo('/')}>+ Add More Icons</button>
            </div>

            <h2>Next Steps</h2>
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

export default Generate;