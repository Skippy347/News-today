import styles from "./NavbarForm.module.scss";

import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "@mui/icons-material/AccountCircleOutlined";

import { useState } from "react";
import { Button, IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { AuthDialog } from "../AuthDialog/AuthDialog";

export const NavbarForm: React.FC = () => {
    const [authVisible, setAuthVisible] = useState(false);

    const openAuthDialog = () => {
        setAuthVisible(true);
    };

    const closeAuthDialog = () => {
        setAuthVisible(false);
    };

    return (
        <>
            <Paper className={styles.navbar_form} elevation={0}>
                <Box className={styles.logo_inner}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <span className={styles.logo_title}>NT</span>
                </Box>

                <Box className={styles.user_panel_inner}>
                    <Box className={styles.user_panel_search}>
                        <SearchIcon />
                        <input placeholder="Поиск" />
                    </Box>
                    <Button variant="contained" color="primary">
                        Новая запись
                    </Button>
                </Box>

                <Box className={styles.user_info_inner}>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationIcon />
                    </IconButton>
                    {/* <img
                        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                        alt="Avatar"
                        className={styles.user_info_img}
                    />
                    <ArrowDownIcon /> */}
                    <Box className={styles.user_info_login_btn} onClick={openAuthDialog}>
                        <UserIcon />
                        Войти
                    </Box>
                </Box>
                <AuthDialog closeAuthDialog={closeAuthDialog} openAuthDialog={authVisible} />
            </Paper>
        </>
    );
};
