import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeProvider>
    </BrowserRouter>
);
