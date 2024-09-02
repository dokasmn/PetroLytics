import Button from './components/items/Button';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button $primary>Primary</Button>
      <Button>Secondary</Button>
    </ThemeProvider>
  );
}

export default App;