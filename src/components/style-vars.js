export const colors = {
    greenDark: '#17a089',
    green10: '#e0fffa',
    green18: '#12473e',
    green38: '#00c5a7',
    green44: '#1fc3a8',
    green72: '#94d9bc',
    green97: '#f1fcf9',
    blue10: '#e5f4ff',
    blue28: '#075389',
    blue51: '#1ca0fd',
    blue96: '#ecf7ff',
    purple34: '#6a159a',
    purple48: '#9620d8',
    purple84: '#e2aeff',
    purple98: '#fcf3ff',
    pink51: '#df2868',
    pink56: '#fb2491',
    orange55: '#fB501d',
    orange98: '#fff5f4',
    redDark: '#e22c3e',
    red18: '#520b0b',
    red61: '#fb3c4e',
    red83: '#ffa9b1',
    red98: '#fff5f4',
    yellow16: '#514000',
    yellow48: '#f9f900',
    yellow60: '#f9ae01',
    yellow70: '#f8de6d',
    yellow97: '#fffcef',
    white: '#ffffff',
    black: '#000000',
    gray20: '#323232',
    gray22: '#383838',
    gray27: '#444444',
    gray40: '#666666',
    gray47: '#777777',
    gray60: '#999999',
    gray80: '#cccccc',
    gray91: '#e8e8e8',
    gray96: '#f4f4f4',
    gray98: '#f9f9f9',
  };
  
  export const gradients = {
    blue1: 'linear-gradient(45deg, rgba(28, 160, 253, 0.1) 0%, rgba(31, 195, 168, 0.1) 100%)',
    purple1: 'linear-gradient(45deg, rgba(28, 160, 253, 0.1) 0%, rgba(150, 32, 216, 0.1) 100%)',
    pink1: 'linear-gradient(90deg, rgba(251, 80, 29, 0.06) 0%, rgba(251, 36, 145, 0.06) 100%);',
    bluePurple1: 'linear-gradient(45deg, rgba(28, 160, 253, 0.1) 0%, rgba(150, 32, 216, 0.1) 100%);',
    red1: 'linear-gradient(90deg, rgba(251, 80, 29, 0.1) 0%, rgba(251, 36, 145, 0.1) 100%);',
  };
  
  export const leftNavGutter = {
    md: 40,
    lg: 80,
    xl: 80,
  };
  
  export const leftNavWidth = {
    md: 320,
    lg: 320,
    xl: 320,
  };
  
  export const mq = {
    xs: 0,
    sm: 576,
    md: 868,
    lg: 1092,
    xl: 1200,
    xxl: 1600,
  };
  
  export const containers = {
    sm: 540,
    md: 740,
    lg: 960,
    xl: 1140,
    xxl: 1540,
  };
  
  export const zIndex = {
    100: 100,
    200: 200,
    300: 300,
  };
  
  export const guideParagraphMaxWidth = 600;
  
  export const ENABLE_TOP_BANNER = false;
  
  const main = "'Akkurat', 'Helvetica Neue', Helvetica, Arial, sans-serif";
  const mono = "'Akkurat Mono', monaco, monospace";
  
  const blueBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AFK3WGQQhAbFxPukgAAAAAElFTkSuQmCC';
  const pinkBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8A/ypVDAU1AYu3js+UAAAAAElFTkSuQmCC';
  const greenBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8Aj8xmGQWKAdv0KUgBAAAAAElFTkSuQmCC';
  const purpleBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AXFzrGQR4Ab2bcExyAAAAAElFTkSuQmCC';
  
  export function getRandomBlur () {
    const blurs = [
      blueBlur,
      pinkBlur,
      greenBlur,
      purpleBlur,
    ];
  
    return blurs[Math.floor(Math.random() * blurs.length)];
  }
  
  export const fonts = {
    main,
    mono,
    baseSize: 16,
    mono14: `font-size: 14px; font-family: ${mono}; font-weight: normal; font-variant-ligatures: none; line-height: 22px; letter-spacing: 0.2px;`,
    mono14SpacedUpper: `font-size: 14px; font-family: ${mono}; font-weight: normal; line-height: 22px; letter-spacing: 1px; text-transform: uppercase; color: ${colors.gray47};`,
  };