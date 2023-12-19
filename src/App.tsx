import "./App.css";
import Layout from "./components/Layout";
import Landing from "./pages/landing";
import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
});

const theme = createTheme({
  direction: "rtl",
});

function RTL(props: any) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl"></div>
        <div className="App">
          <Layout>
            <Landing />
          </Layout>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
