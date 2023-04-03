const theme = {
  colors: {
    visited: 'rgb(129 45 1)',
    red: '#cb8989',
    container: 'rgb(247, 246, 237)',
    accent: '#416920',
    active: '#325119',
    yellow: 'rgb(244, 244, 215)',
    neutral: '#a9e1f9',
    green:"#c6eb96",
    orange: '#f2610cfc',
    lightOrange: 'rgb(246 152 97)',
    white: '#fff',
    black: '#000',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 252],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  sizes: [140, 240, 600, 960, 1200],
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    ml: '24px',
    l: '32px',
    xl: '40px',
  },
  fontWeights: {
    normal: 400,
    middle: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    normal: '0',
    title: '0.03em',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '10px',
    round: '50%',
  },
  shadows: {
    normal: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    hover: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    inner: '0px 0px 7px 4px rgba(45,55,44,0.63) inset',
    max: '0px 0px 15px 13px rgba(0,0,0,0.65)',
  },
  transitions: {
    ease: '300ms ease',
    cubic: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
export default theme;
