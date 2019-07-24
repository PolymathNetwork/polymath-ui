import { types } from "../misc";
import { Scale } from './types';
export declare type Entity = types.Entity;
export declare const theme: {
    breakpoints: {
        sm: number;
        md: string;
        lg: string;
        xl: string;
    };
    fontSizes: Scale<string>;
    fontFamilies: {
        baseText: string;
    };
    lineHeights: {
        none: number;
        tight: number;
        normal: number;
        loose: number;
    };
    fontWeights: {
        normal: number;
        bold: number;
        bolder: number;
    };
    space: Scale<string>;
    zIndexes: {
        header: number;
        sidebar: number;
        modals: number;
        selects: number;
        tooltips: number;
    };
    colors: {
        baseText: string;
        highlightText: string;
        primary: string;
        secondary: string;
        placeholder: string;
        gray: string[];
        blue: string[];
        greyBlue: string[];
        green: string[];
        red: string[];
        inactive: string;
        idle: string;
        alert: string;
        warning: string;
        success: string;
    };
    shadows: {
        0: string;
        1: string;
        2: string;
    };
    headings: {
        h1: {
            color: string;
            fontSize: string;
            fontWeight: number;
        };
        h2: {
            color: string;
            fontSize: string;
            fontWeight: number;
        };
        h3: {
            color: string;
            fontSize: string;
            fontWeight: number;
        };
        h4: {
            color: string;
            fontSize: string;
            fontWeight: number;
        };
    };
    buttons: {
        primary: {
            backgroundColor: string;
            borderColor: string;
            color: string;
            '&:hover': {
                backgroundColor: string;
            };
        };
        secondary: {
            backgroundColor: string;
            borderColor: string;
            color: string;
            '&:hover': {
                color: string;
                backgroundColor: string;
            };
        };
        ghost: {
            backgroundColor: string;
            borderColor: string;
            color: string;
            '&:hover': {
                color: string;
                backgroundColor: string;
            };
        };
        ghostSecondary: {
            backgroundColor: string;
            borderColor: string;
            color: string;
            padding: number;
            '&:hover': {
                backgroundColor: string;
                color: string;
                opacity: number;
            };
            '&:disabled': {
                opacity: number;
            };
        };
        raw: string;
    };
    links: {
        color: string;
        '&:hover, &:focus': {
            color: string;
        };
    };
    transitions: {
        hover: {
            ms: number;
        };
        modal: {
            ms: number;
        };
    };
    maxWidth: string;
    inputs: {
        height: string;
        backgroundColor: string;
    };
    header: {
        height: string;
    };
    sidebar: {
        width: string;
    };
    footer: {
        height: string;
    };
    tokens: {
        [types.Tokens.Ether]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Dai]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Poly]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Erc20]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Gusd]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Usdc]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Usdt]: {
            color: string;
            backgroundColor: string;
        };
        [types.Tokens.Pax]: {
            color: string;
            backgroundColor: string;
        };
    };
};
//# sourceMappingURL=theme.d.ts.map