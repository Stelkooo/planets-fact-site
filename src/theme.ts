import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  breakpoints: {
    tablet: '768px',
    desktop: '1440px',
  },
  colors: {
    white: '#ffffff',
    black: '#070724',
    grey: '#38384f',
    greyishBlue: '#838391',
    teal: '#419ebb',
    yellow: '#eda249',
    purple: '#6f2ed6',
    orange: '#d14c32',
    red: '#d83a34',
    brown: '#cd5120',
    green: '#1ec2a4',
    blue: '#2d68f0',
  },
  typography: {
    antonio: "'Antonio', sans-serif",
    spartan: "'League Spartan', sans-serif",
  },
  planetColors: {
    mercury: '#DEF4FC',
    venus: '#F7CC7F',
    earth: '#545BFE',
    mars: '#FF6A45',
    jupiter: '#ECAD7A',
    saturn: '#FCCB6B',
    uranus: '#65F0D5',
    neptune: '#497EFA',
  },
};

export default defaultTheme;
