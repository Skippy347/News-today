import { useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { Box } from "@mui/material";

interface PostEditorProps {
    onChange: (blocks: OutputData["blocks"]) => void;
}

export const CreatePostEditor: React.FC<PostEditorProps> = ({ onChange }) => {
    useEffect(() => {
        const editor = new EditorJS({
            holder: "editor",
            placeholder: "Введите текст вашего поста",
            async onChange() {
                const { blocks } = await editor.save();
                onChange(blocks);
            },
        });
    }, []);
    return (
        <>
            <Box id="editor"></Box>
        </>
    );
};
