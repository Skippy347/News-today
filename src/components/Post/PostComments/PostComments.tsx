import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Comment } from "./Comment/Comment";
import styles from "./PostComments.module.scss";

export const PostComments: React.FC = () => {
    return (
        <>
            <Paper elevation={0} className={styles.comments_inner}>
                <Typography variant="h6">42 комментария</Typography>
                <Tabs
                    sx = {{marginTop:"20px", }}
                    value = {0}
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <Comment />
                <Comment />
                <Comment />

            </Paper>
        </>
    );
};
