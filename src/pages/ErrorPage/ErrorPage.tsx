import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../../components/MainLayout/MainLayout";

export const ErrorPage: React.FC = () => {
    return (
        <>
            <MainLayout>
                <Paper sx={{ padding: "20px" }}>
                    <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>
                        Someting went wrong please try again later
                    </Box>
                </Paper>
            </MainLayout>
        </>
    );
};
