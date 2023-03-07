import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles import
import defaultTheme from './theme';
import GlobalStyle from './global.styled';
import AppContainer from './App.styled';

// component import
import Header from './components/header/header.component';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
