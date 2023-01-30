import React from "react";
import { Paper, Typography } from "@mui/material";

import styles from "./Post.module.scss";

export const Post: React.FC = () => {
    return (
        <>
            <Paper elevation={0} className={styles.post__inner}>
                <Typography variant="h5" className={styles.post__title}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt magnam fugit accusamus veritatis numquam eos.
                </Typography>
                <Typography className={styles.post__text}>
                    Deserunt magnam fugit accusamus veritatis numquam eos.
                </Typography>
                <Typography className={styles.post__text}>
                    Magnam fugit accusamus veritatis numquam eos. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Eaque
                    provident, soluta deleniti voluptatum nisi impedit?
                </Typography>
                <img
                    className={styles.post__img}
                    src="https://www.meme-arsenal.com/memes/68e07181b791ac4facda20c5e474150d.jpg"
                    alt="Avatar"
                />
            </Paper>
        </>
    );
};
