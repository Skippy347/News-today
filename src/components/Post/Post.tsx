import styles from "./Post.module.scss";

import { Paper, Typography } from "@mui/material";
import { MainLayout } from "../MainLayout/MainLayout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/postsContext";

export const Post: React.FC = () => {
    const { posts } = useContext(PostContext);

    const parse = posts.map((el: any) => (
        <Link to={`full/${el.id}`}>
            <Paper elevation={0} className={styles.post_inner}>
                <Typography variant="h5" className={styles.post_title}>
                    {el.title}
                </Typography>
                <Typography className={styles.post_text}>
                    {el.content.map((ell: any) => (
                        <>{ell.data.text}</>
                    ))}
                </Typography>
                <img
                    className={styles.post_img}
                    src="https://www.meme-arsenal.com/memes/68e07181b791ac4facda20c5e474150d.jpg"
                    alt="Avatar"
                />
            </Paper>
        </Link>
    ));

    return <MainLayout>{parse}</MainLayout>;
};
