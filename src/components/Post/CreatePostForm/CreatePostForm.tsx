import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./CreatePostForm.module.scss";

import { useState } from "react";

import { CreatePostEditor } from "./CreatePostEditor";
import { createPost } from "../../../http/postsApi";
import { MainLayout } from "../../MainLayout/MainLayout";

export const CreatePostForm: React.FC = () => {
    const [title, setTitle] = useState("");
    const [blocks, setBlocks] = useState([]);

    const onAddPost = async () => {
        const post = await createPost({
            title,
            content: blocks,
        });
    };

    return (
        <>
            <MainLayout className="main_layout_color" hideComments hideMenu>
                <Box sx={{ backgroundColor: "#fff" }}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={styles.post_title}
                        placeholder="Заголовок"
                        sx={{ width: "100%" }}></Input>
                    <Box className={styles.post_editor}>
                        <CreatePostEditor onChange={(arr: any) => setBlocks(arr)} />
                    </Box>

                    <Button onClick={onAddPost} variant="contained" color="primary">
                        Опубликовать
                    </Button>
                </Box>
            </MainLayout>
        </>
    );
};
