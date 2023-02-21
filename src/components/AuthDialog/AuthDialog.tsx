import styles from "./AuthDialog.module.scss";

import ArrowIcon from "@mui/icons-material/West";

import { Dialog, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { LoginForm } from "./AuthForms/LoginForm/LoginForm";
import { MainForm } from "./AuthForms/MainForm/MainForm";
import { RegistrationForm } from "./AuthForms/RegistrationForm/RegistrationForm";

interface AuthDialogProps {
    closeAuthDialog: () => void;
    openAuthDialog: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ closeAuthDialog, openAuthDialog }) => {
    const [formType, setFormType] = useState<"main" | "login" | "registration">("main");

    return (
        <>
            <Dialog open={openAuthDialog} onClose={closeAuthDialog} maxWidth="sm" fullWidth>
                <Box className={styles.dialog_inner}>
                    <Box className={styles.dialog_img}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4pAmkRKcN0S3y2KMlOYDyJ88HUXDCQJO-w&usqp=CAU"
                            alt=""
                        />
                    </Box>
                    <Box className={styles.dialog_content}>
                        <Typography className={styles.dialog_content_title}>
                            {formType === "main" ? (
                                "Вход в TJ"
                            ) : (
                                <Box
                                    component={"a"}
                                    onClick={() => setFormType("main")}
                                    className={styles.dialog_back_title}>
                                    <ArrowIcon /> К авторизации
                                </Box>
                            )}
                        </Typography>
                        {formType === "main" && <MainForm onOpenLogin={() => setFormType("login")} />}
                        {formType === "login" && (
                            <LoginForm onOpenRegister={() => setFormType("registration")} />
                        )}
                        {formType === "registration" && <RegistrationForm />}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};
