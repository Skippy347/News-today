import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../MainLayout/MainLayout";
import { PostActions } from "../PostActions/PostActions";
import styles from "./FullPost.module.scss";

import UserAddIcon from "@mui/icons-material/PersonAddOutlined";
import { PostComments } from "../PostComments/PostComments";
import { useContext, useEffect } from "react";
import { getOnePost } from "../../../http/postsApi";
import { useParams } from "react-router-dom";
import { PostContext } from "../../../context/postsContext";

export const FullPost: React.FC = () => {
    const { post, setPost } = useContext(PostContext);

    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const posts = await getOnePost(`${id}`);
            setPost(posts);
        })();
    }, [id, setPost]);

    const contentBlock = () => {
        for (const postKeys of Object.keys(post)) {
            for (const postContent of post.content) {
                return postContent.data.text;
            }
        }
    };

    return (
        <>
            <MainLayout containerFullWidth>
                <Paper elevation={0} className={styles.post_inner}>
                    <Typography variant="h4" className={styles.post_title}>
                        {post.title}
                    </Typography>
                    <Box className={styles.post_content}>
                        <Typography>{contentBlock()}</Typography>
                    </Box>
                    <Box>
                        <PostActions />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "40px",
                        }}>
                        <Box className={styles.post_user_info}>
                            <img
                                src="https://i.pinimg.com/236x/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg"
                                alt=""
                                width="40px"
                            />
                            <b>Mleq Adin</b>
                            <span>+1653</span>
                        </Box>
                        <Box>
                            <Button sx={{ marginLeft: "10px" }} variant="contained">
                                <UserAddIcon />
                                <b>Подписаться</b>
                            </Button>
                        </Box>
                    </Box>
                </Paper>
                <PostComments />
            </MainLayout>
        </>
    );
};
