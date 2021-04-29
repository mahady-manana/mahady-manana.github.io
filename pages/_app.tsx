import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../components/theme';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
