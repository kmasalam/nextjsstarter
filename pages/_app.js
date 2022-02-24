import '../styles/globals.css'
import { store } from "../redux/store"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

//export default MyApp
export default store.withRedux(MyApp);
