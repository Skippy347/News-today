import styles from "./PostActions.module.scss";

import CommentIcon from "@mui/icons-material/SmsOutlined";
import RepeatIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";

import { IconButton } from "@mui/material";



export const PostActions: React.FC = () => {
    return (
        <>
            <ul className={styles.post_actions_inner}>
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
