import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                },
                contained: {
                    backgroundColor: "rgb(210,180,140)",
                    color: "#333",
                    boxShadow:
                        "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)",
                    "&:hover": {
                        backgroundColor: "rgb(210,180,130)",
                        boxShadow:
                            "0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)",
                    },
                },
            },
        },
    },
});
