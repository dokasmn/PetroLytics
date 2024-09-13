import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

// pages
import Home from './container/home/Home'
import OilMap from './container/oilmap/Oilmap'
import Graphics from './container/table/Graphics'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/graphics" element={<Graphics />} />
              <Route path="/oilmap" element={<OilMap />} />
            </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;