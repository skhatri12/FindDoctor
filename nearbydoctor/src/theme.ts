import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',

};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#E3F2FD',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif',
  },
});

export default theme;
