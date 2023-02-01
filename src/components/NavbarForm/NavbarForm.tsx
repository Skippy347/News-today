import styles from "./NavbarForm.module.scss";

import { Button, IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";

import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDownIcon from "@mui/icons-material/ExpandMore";

export const NavbarForm: React.FC = () => {
    return (
        <>
            <Paper className={styles.navbar__form} elevation={0}>
                <Box className={styles.user__panel}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <span>NT</span>
                    <Box className={styles.search__inner}>
                        <SearchIcon />
                        <input placeholder="Поиск" />
                    </Box>
                    <Button variant="contained" color="primary">
                        Новая запись
                    </Button>
                </Box>

                <Box className={styles.user__info}>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationIcon />
                    </IconButton>
                    <img
                        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                        alt="Avatar"
                        className={styles.user__img}
                    />
                    <ArrowDownIcon />
                </Box>
            </Paper>
        </>
    );
};
