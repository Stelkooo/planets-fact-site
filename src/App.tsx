import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { useAppDispatch } from './store/hooks';
import { setPlanets } from './store/planet/planet.reducer';

// styles import
import defaultTheme from './theme';
import GlobalStyle from './global.styled';
import AppContainer from './App.styled';

// component import
import Header from './components/header/header.component';
import Main from './components/main/main.component';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch('data/data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then((res) => res.json());
      dispatch(setPlanets(response));
      setLoading(false);
    })();
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        {loading ? null : (
          <>
            <Header />
            <Main />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
