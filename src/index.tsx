import ReactDOM from "react-dom/client";
import "./assets/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const queryClient = new QueryClient();

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  </>
);
reportWebVitals();
