import React from "react";
import "./App.scss";
import { Box } from "@mui/system";

import { NavbarForm } from "./components/NavbarForm/NavbarForm";
import { Post } from "./components/Post/Post";
import { NavbarMenu } from "./components/NavbarForm/NavbarMenu/NavbarMenu";
import { SideComments } from "./components/SideComments/SideComments";

const App: React.FC = () => {
    return (
        <>
            <NavbarForm />
            <Box className="wrapper">
                <Box className="leftSide">
                    <NavbarMenu />
                </Box>
                <Box className="container">
                    <Post />
                    <Post />
                    <Post />
                </Box>
                <Box className="rightSide">
                    <SideComments />
                </Box>
            </Box>
        </>
    );
};

export default App;
