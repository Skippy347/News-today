import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../../../http/userApi";

interface LoginFormProps {
    onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
    const LoginFormControl = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email must be a valid email address")
                .required("This field is required "),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .max(50, "Password cannot be longer than 50 characters")
                .required("This field is required "),
        }),
        onSubmit: async ({ email, password }) => {
            const response = await login(email, password);
            console.log(response);
            window.location.reload();
        },
    });

    return (
        <>
            <form onSubmit={LoginFormControl.handleSubmit}>
                <Box
                    style={{
                        marginBottom: "10px",
                        color: "rgb(219, 146, 10)",
                    }}>
                    <TextField
                        size="small"
                        label="Email"
                        type="email"
                        name="email"
                        value={LoginFormControl.values.email}
                        onChange={LoginFormControl.handleChange}
                        onBlur={LoginFormControl.handleBlur}
                        variant="outlined"
                        fullWidth
                    />
                    {LoginFormControl.errors.email && LoginFormControl.touched.email
                        ? LoginFormControl.errors.email
                        : null}
                </Box>
                <Box style={{ color: "rgb(219, 146, 10)", height: "65px" }}>
                    <TextField
                        size="small"
                        label="Password"
                        type="password"
                        name="password"
                        value={LoginFormControl.values.password}
                        onChange={LoginFormControl.handleChange}
                        onBlur={LoginFormControl.handleBlur}
                        variant="outlined"
                        fullWidth
                    />
                    {LoginFormControl.errors.password && LoginFormControl.touched.password
                        ? LoginFormControl.errors.password
                        : null}
                </Box>
                <Button
                    value="Reload Page"
                    type="submit"
                    style={{ marginTop: "50px", marginBottom: "10px" }}
                    color="primary"
                    variant="contained"
                    fullWidth>
                    Войти
                </Button>
                <Button onClick={onOpenRegister} color="primary" variant="contained" fullWidth>
                    Регистрация
                </Button>
            </form>
        </>
    );
};
