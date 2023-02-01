import { useState } from "react";
import styles from "./SideComments.module.scss";
import clsx from "clsx";

import { Box } from "@mui/system";
import { SideCommentsItem } from "./SideCommentsItem/SideCommentsItem";

import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const SideComments: React.FC = () => {
    const [visible, setVisible] = useState(true);

    const toggleVissible = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Box className={clsx(styles.comments__inner, !visible && styles.rotated)}>
                <Box onClick={toggleVissible}>
                    <h3>
                        Комментарии <ArrowRightIcon />
                    </h3>
                </Box>
                {visible && (
                    <>
                        <SideCommentsItem />
                        <SideCommentsItem />
                        <SideCommentsItem />
                    </>
                )}
            </Box>
        </>
    );
};
