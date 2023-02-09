import * as Yup from "yup";

import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";

export const RegistrationForm: React.FC = () => {
    const RegistrationFormControl = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(2, "Username must be at least 2 characters")
                .max(50, "Username cannot be longer than 100 characters")
                .test("is_one_word", "No spaces allowed", (value) => {
                    if (!value) return true;
                    const whitespaceChars = [" ", "\t", "\n"];
                    const trimmed_value = value.trim();
                    return !whitespaceChars.some((char) => trimmed_value.includes(char));
                })
                .required("This field is required"),
            email: Yup.string()
                .email("Email must be a valid email address")
                .required("This field is required "),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .max(50, "Password cannot be longer than 50 characters")
                .required("This field is required "),
        }),
        onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    });
    return (
        <>
            <form onSubmit={RegistrationFormControl.handleSubmit}>
                <Box
                    style={{
                        marginBottom: "10px",
                        color: "rgb(219, 146, 10)",
                    }}>
                    <TextField
                        size="small"
                        label="Username"
                        type="username"
                        name="username"
                        value={RegistrationFormControl.values.username}
                        onChange={RegistrationFormControl.handleChange}
                        onBlur={RegistrationFormControl.handleBlur}
                        variant="outlined"
                        fullWidth
                    />
                    {RegistrationFormControl.errors.username && RegistrationFormControl.touched.username
                        ? RegistrationFormControl.errors.username
                        : null}
                </Box>
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
                        value={RegistrationFormControl.values.email}
                        onChange={RegistrationFormControl.handleChange}
                        onBlur={RegistrationFormControl.handleBlur}
                        variant="outlined"
                        fullWidth
                    />
                    {RegistrationFormControl.errors.email && RegistrationFormControl.touched.email
                        ? RegistrationFormControl.errors.email
                        : null}
                </Box>
                <Box style={{ color: "rgb(219, 146, 10)", height: "65px" }}>
                    <TextField
                        size="small"
                        label="Password"
                        type="password"
                        name="password"
                        value={RegistrationFormControl.values.password}
                        onChange={RegistrationFormControl.handleChange}
                        onBlur={RegistrationFormControl.handleBlur}
                        variant="outlined"
                        fullWidth
                    />
                    {RegistrationFormControl.errors.password && RegistrationFormControl.touched.password
                        ? RegistrationFormControl.errors.password
                        : null}
                </Box>

                <Button
                    type="submit"
                    style={{ marginTop: "46px" }}
                    color="primary"
                    variant="contained"
                    fullWidth>
                    Зарегистрироваться
                </Button>
            </form>
        </>
    );
};
