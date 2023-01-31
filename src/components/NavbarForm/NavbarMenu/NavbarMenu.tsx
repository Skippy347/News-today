import React from "react";

import styles from "./NavbarMenu.module.scss";

import { Box } from "@mui/system";

import FireIcon from "@mui/icons-material/WhatshotOutlined";
import MessageIcon from "@mui/icons-material/TextsmsOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import StarIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { Button } from "@mui/material";

export const NavbarMenu: React.FC = () => {
    return (
        <Box className={styles.menu__inner}>
            <ul>
                <li>
                    <Button variant="contained">
                        <FireIcon />
                        Лента
                    </Button>
                </li>
                <li>
                    <Button>
                        <MessageIcon />
                        Сообщения
                    </Button>
                </li>
                <li>
                    <Button>
                        <TrendingUpIcon />
                        Рейтинг
                    </Button>
                </li>
                <li>
                    <Button>
                        <StarIcon />
                        Подписчики
                    </Button>
                </li>
            </ul>
        </Box>
    );
};
