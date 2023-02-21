import { Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Comment.module.scss";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

export const Comment: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleClick = (e: any) => {
        setOpenMenu(e.currentTarget);
    };

    const handleClose = () => {
        setOpenMenu(null);
    };

    return (
        <>
            <Box className={styles.comment}>
                <Box className={styles.user_info_inner}>
                    <img
                        src="https://sun9-16.userapi.com/c302105/u160234715/154407247/x_41cb095f.jpg"
                        alt="Avatar"
                    />
                    <b>Mazi Tongua</b>
                    <span>5 часов</span>
                </Box>
                <Typography className={styles.comment_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam voluptatibus
                    cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam voluptatibus
                    cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam voluptatibus
                    cum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam voluptatibus
                    cum.
                </Typography>
                <span className={styles.comment_reply_btn}>Ответить</span>
                <IconButton onClick={handleClick}>
                    <MoreIcon />
                </IconButton>

                <Menu
                    anchorEl={openMenu}
                    open={Boolean(openMenu)}
                    elevation={4}
                    keepMounted
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Удалить</MenuItem>
                    <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                </Menu>
            </Box>
        </>
    );
};
