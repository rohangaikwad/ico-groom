import type { Component } from 'solid-js';
import { IconType } from '../../Interfaces';
import Store from "./../../GlobalStore";

const SelectedIcons: Component = () => {
    const { selected, setSelected } = Store;


    const removeAll = () => {
        let _selected = JSON.parse(JSON.stringify(selected()));
        Object.keys(_selected).forEach((cat, i) => {
            _selected[cat] = [];
        });
        setSelected(_selected);

    }
    const removeIcon = (catName: string, icon: IconType) => {
        let _selected = JSON.parse(JSON.stringify(selected()));
        let selIndex = _selected[catName].findIndex((s:IconType) => s.defaultCode === icon.defaultCode);
        _selected[catName].splice(selIndex, 1);
        setSelected(_selected);
    }


    return <section id="selected">
        <h1>Selected Icons</h1>
        {Object.entries(selected()).map(x => x[1]).flat().length > 0 && <button id="reset" onClick={() => removeAll()}>
            <svg viewBox="0 0 896 1024"><path d="M592 864h32c8.837 0 16-7.163 16-16v0-544c0-8.837-7.163-16-16-16v0h-32c-8.837 0-16 7.163-16 16v0 544c0 8.837 7.163 16 16 16v0zM272 864h32c8.837 0 16-7.163 16-16v0-544c0-8.837-7.163-16-16-16v0h-32c-8.837 0-16 7.163-16 16v0 544c0 8.837 7.163 16 16 16v0zM880 128h-208l-67.2-89.6c-17.7-23.421-45.501-38.4-76.8-38.4v-0h-160c-31.299 0-59.1 14.979-76.625 38.159l-0.175 0.241-67.2 89.6h-208c-8.837 0-16 7.163-16 16v0 32c0 8.837 7.163 16 16 16v0h48v736c0 53.019 42.981 96 96 96v0h576c53.019 0 96-42.981 96-96v0-736h48c8.837 0 16-7.163 16-16v0-32c0-8.837-7.163-16-16-16v0zM342.4 76.8c5.92-7.784 15.174-12.767 25.595-12.8l0.005-0h160c10.426 0.033 19.68 5.016 25.542 12.721l0.058 0.079 38.4 51.2h-288zM768 928c0 17.673-14.327 32-32 32v0h-576c-17.673 0-32-14.327-32-32v0-736h640zM432 864h32c8.837 0 16-7.163 16-16v0-544c0-8.837-7.163-16-16-16v0h-32c-8.837 0-16 7.163-16 16v0 544c0 8.837 7.163 16 16 16v0z"></path></svg>
            <span>Clear Selection</span>
        </button>}
        

        {Object.entries(selected()).map((catArr) => <>
            {catArr[1].length > 0 && <div class={`${catArr[0]} category`}>
                <h5>{catArr[0]}</h5>
                <ul>
                    {catArr[1].map((icon: IconType) => <>
                        <li onClick={() => removeIcon(catArr[0], icon)}>
                            <svg viewBox={`0 0 ${icon.width || 1024} 1024`}>
                                {icon.paths.map((path) => (
                                    <path d={path} />
                                ))}
                            </svg>
                        </li>
                    </>)}
                </ul>
            </div>}
        </>)}
    </section>
}

export default SelectedIcons;