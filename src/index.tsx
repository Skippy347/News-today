import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/authContext";
import { PostProvider } from "./context/postsContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <UserProvider>
                <PostProvider>
                    <App />
                </PostProvider>
            </UserProvider>
        </ThemeProvider>
    </BrowserRouter>
);
