// routers
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

// pages
import Home from './container/home/Home';
import OilMap from './container/oilmap/Oilmap';
import Graphics from './container/table/Graphics';

// contexts
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphics" element={<Graphics />} />
            <Route path="/oilmap" element={<OilMap />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
