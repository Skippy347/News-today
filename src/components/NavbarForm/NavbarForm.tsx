import styles from "./NavbarForm.module.scss";

import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useContext, useState } from "react";
import { Button, IconButton, List, ListItem, ListItemButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { AuthDialog } from "../AuthDialog/AuthDialog";
import { UserContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { searchPosts } from "../../http/postsApi";
import { PostContext } from "../../context/postsContext";

export const NavbarForm: React.FC = () => {
    const [authVisible, setAuthVisible] = useState(false);
    const [quitVisible, setQuitVisible] = useState(false);
    const [searchValue, setSearchValue] = useState([]);
    const { user } = useContext(UserContext);
    const { result, setResult } = useContext(PostContext);
    const openAuthDialog = () => {
        setAuthVisible(true);
    };

    const closeAuthDialog = () => {
        setAuthVisible(false);
    };

    const handleChangeInput = async (e: any) => {
        setSearchValue(e.target.value);
        const posts: any = await searchPosts(e.target.value);
        setResult(posts);
    };

    const inputSearch = result.rows?.map((row: any) => (
        <>
            <Link to={`full/${row.id}`}>
                <List>
                    <ListItem>
                        <ListItemButton>{row.title}</ListItemButton>
                    </ListItem>
                </List>
            </Link>
        </>
    ));
    return (
        <>
            <Paper className={styles.navbar_form} elevation={0}>
                <Box className={styles.logo_inner}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <span className={styles.logo_title}>
                        <Link to="/">NT</Link>
                    </span>
                </Box>

                <Box className={styles.user_panel_inner}>
                    <Box className={styles.user_panel_search}>
                        <SearchIcon />
                        <input value={searchValue} onChange={handleChangeInput} placeholder="Поиск" />
                        <Paper className={styles.panel_search_popup}>{inputSearch}</Paper>
                    </Box>
                    {user && (
                        <Button variant="contained" color="primary">
                            <Link to="create">Новая запись</Link>
                        </Button>
                    )}
                </Box>

                <Box className={styles.user_info_inner}>
                    {user ? (
                        <>
                            <IconButton>
                                <MessageIcon />
                            </IconButton>
                            <IconButton>
                                <NotificationIcon />
                            </IconButton>
                            <img
                                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                                alt="Avatar"
                                className={styles.user_info_img}
                                onClick={() => {
                                    setQuitVisible(!quitVisible);
                                }}
                            />
                            <ArrowDownIcon />
                            {quitVisible && (
                                <Paper sx={{ position: "absolute", top: "60px", width: "100%" }}>
                                    <List>
                                        <ListItem>
                                            <ListItemButton
                                                onClick={() => {
                                                    localStorage.removeItem("token");
                                                    window.location.reload();
                                                }}>
                                                Выйти
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Paper>
                            )}
                        </>
                    ) : (
                        <Box className={styles.user_info_login_btn} onClick={openAuthDialog}>
                            <UserIcon />
                            Войти
                        </Box>
                    )}
                </Box>
                <AuthDialog closeAuthDialog={closeAuthDialog} openAuthDialog={authVisible} />
            </Paper>
        </>
    );
};
