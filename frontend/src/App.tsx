import Button from './components/global/Button';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Map from "./components/oilmap/Map";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button $primary>Primary</Button>
      <Button>Secondary</Button>
      <Map></Map>
    </ThemeProvider>
  );
}

export default App;