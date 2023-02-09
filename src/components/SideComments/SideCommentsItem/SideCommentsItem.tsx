import styles from "./SideCommentsItem.module.scss";

import { Box } from "@mui/system";

export const SideCommentsItem: React.FC = () => {
    return (
        <>
            <Box className={styles.comments_inner}>
                <Box className={styles.comments_user_info}>
                    <img
                        src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
                        alt="Avatar"
                    />
                    <span>Esef Sadly</span>
                </Box>
                <p className={styles.comments_user_text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt error at
                    necessitatibus!
                </p>
                <span className={styles.comments_user_title}>Do you wanna buy?</span>
            </Box>
        </>
    );
};
