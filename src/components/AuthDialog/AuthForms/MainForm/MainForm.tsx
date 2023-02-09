import { Box, Button } from "@mui/material";
import { AppleSvg } from "../../UI/svg/AppleSvg";
import { EmailSvg } from "../../UI/svg/EmailSvg";
import { FacebookSvg } from "../../UI/svg/FacebookSvg";
import { GoogleSvg } from "../../UI/svg/GoogleSvg";
import { TwitterSvg } from "../../UI/svg/TwitterSvg";
import { VKontakteSvg } from "../../UI/svg/VKontakteSvg";
import styles from "./MainForm.module.scss";

interface MainFormProps {
    onOpenLogin: () => void;
}

export const MainForm: React.FC<MainFormProps> = ({ onOpenLogin }) => {
    return (
        <>
            <Box className={styles.top_buttons_block}>
                <Button variant="contained" fullWidth>
                    <VKontakteSvg />
                    ВКонтакте
                </Button>
                <Button variant="contained" fullWidth>
                    <GoogleSvg />
                    Google
                </Button>
                <Button onClick={onOpenLogin} variant="contained" fullWidth>
                    <EmailSvg />
                    Через почту
                </Button>
            </Box>

            <Box className={styles.bottom_buttons_block}>
                <Button variant="contained" fullWidth>
                    <FacebookSvg />
                </Button>
                <Button variant="contained" fullWidth>
                    <TwitterSvg />
                </Button>
                <Button variant="contained" fullWidth>
                    <AppleSvg />
                </Button>
            </Box>
        </>
    );
};
