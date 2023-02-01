import styles from "./PostActions.module.scss";

import { IconButton } from "@mui/material";

import CommentIcon from "@mui/icons-material/SmsOutlined";
import RepeatIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";

export const PostActions: React.FC = () => {
    return (
        <>
            <ul className={styles.post__actions__inner}>
                <li>
                    <IconButton>
                        <CommentIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <RepeatIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </li>
            </ul>
        </>
    );
};
