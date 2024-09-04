
// styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

// pages
import Home from './container/home/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;