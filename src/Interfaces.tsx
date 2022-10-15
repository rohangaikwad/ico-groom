interface Metadata {
    name: string;
    iconsHash: number;
}

export interface IconType {
    paths: string[];
    width: number;
    tags: string[];
    grid: number;
    defaultCode: number;
    selected?: boolean;
}

interface Metadata2 {
    fontFamily: string;
    majorVersion: number;
    minorVersion: number;
}

interface Metrics {
    emSize: number;
    baseline: number;
}

interface FontPref {
    prefix: string;
    metadata: Metadata2;
    metrics: Metrics;
    embed: boolean;
    noie8: boolean;
    ie7: boolean;
    showSelector: boolean;
    showMetrics: boolean;
    showMetadata: boolean;
}

interface ImagePref {
    prefix: string;
    png: boolean;
    useClassSelector: boolean;
    color: number;
    bgColor: number;
}

interface Preferences {
    showGlyphs: boolean;
    showCodes: boolean;
    showQuickUse: boolean;
    showQuickUse2: boolean;
    showSVGs: boolean;
    fontPref: FontPref;
    imagePref: ImagePref;
    historySize: number;
}

export interface FontDefType {
    metadata: Metadata;
    height: number;
    prevSize: number;
    icons: IconType[];
    preferences: Preferences;
    IcoMoonType: string;
}
