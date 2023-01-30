import React from "react";
import styles from "./SideComments.module.scss";

import { Box } from "@mui/system";
import { SideCommentsItem } from "./SideCommentsItem/SideCommentsItem";

import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const SideComments: React.FC = () => {
    return (
        <>
            <Box className={styles.comments__inner}>
                <h3>
                    Комментарии <ArrowRightIcon />
                </h3>
                <SideCommentsItem />
                <SideCommentsItem />
                <SideCommentsItem />
            </Box>
        </>
    );
};
