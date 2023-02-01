import clsx from "clsx";

import { Box } from "@mui/system";
import { NavbarForm } from "../NavbarForm/NavbarForm";
import { NavbarMenu } from "../NavbarForm/NavbarMenu/NavbarMenu";
import { SideComments } from "../SideComments/SideComments";

interface MainLayoutProps {
    children: string | JSX.Element | JSX.Element[]; //Изменить
    hideComments?: boolean;
    containerFullWidth?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    hideComments,
    containerFullWidth,
}) => {
    return (
        <>
            <NavbarForm />
            <Box className="wrapper">
                <Box>
                    <NavbarMenu />
                </Box>
                <Box className={clsx("container", { container__full: containerFullWidth })}>
                    {children}
                </Box>
                {!hideComments && (
                    <Box>
                        <SideComments />
                    </Box>
                )}
            </Box>
        </>
    );
};
