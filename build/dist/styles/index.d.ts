/// <reference types="react" />
import * as styledComponents from 'styled-components';
import { ThemeInterface } from './types';
import { GlobalStyles } from './GlobalStyles';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.BaseThemedCssFunction<ThemeInterface>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, ThemeInterface>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ThemeInterface>>[]) => styledComponents.GlobalStyleComponent<P, ThemeInterface>, withTheme: styledComponents.BaseWithThemeFnInterface<ThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes;
declare const ThemeProvider: ({ customTheme, children }: any) => JSX.Element;
export { css, createGlobalStyle, keyframes, GlobalStyles, ThemeProvider, withTheme, ThemeInterface, styled, };
//# sourceMappingURL=index.d.ts.map