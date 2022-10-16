interface IMetadata {
    name: string;
    iconsHash: number;
}

export interface IIconType {
    paths: string[];
    width: number;
    tags: string[];
    grid: number;
    defaultCode: number;
    selected?: boolean;
}

interface IMetadata2 {
    fontFamily: string;
    majorVersion: number;
    minorVersion: number;
}

interface IMetrics {
    emSize: number;
    baseline: number;
}

interface IFontPref {
    prefix: string;
    metadata: IMetadata2;
    metrics: IMetrics;
    embed: boolean;
    noie8: boolean;
    ie7: boolean;
    showSelector: boolean;
    showMetrics: boolean;
    showMetadata: boolean;
}

interface IImagePref {
    prefix: string;
    png: boolean;
    useClassSelector: boolean;
    color: number;
    bgColor: number;
}

interface IPreferences {
    showGlyphs: boolean;
    showCodes: boolean;
    showQuickUse: boolean;
    showQuickUse2: boolean;
    showSVGs: boolean;
    fontPref: IFontPref;
    imagePref: IImagePref;
    historySize: number;
}

export interface IFontDefType {
    metadata: IMetadata;
    height: number;
    prevSize: number;
    icons: IIconType[];
    preferences: IPreferences;
    IcoMoonType: string;
}

export interface ISelectedType {
    solid6: IIconType[],
    sharpSolid6: IIconType[],
    regular6: IIconType[],
    light6: IIconType[],
    thin6: IIconType[],
    brands6: IIconType[],
    duotone6: IIconType[],
    fa47: IIconType[]
}