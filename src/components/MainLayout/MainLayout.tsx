import clsx from "clsx";

import { Box } from "@mui/system";
import { NavbarForm } from "../NavbarForm/NavbarForm";
import { NavbarMenu } from "../NavbarForm/NavbarMenu/NavbarMenu";
import { SideComments } from "../SideComments/SideComments";

interface MainLayoutProps {
    children: string | JSX.Element | JSX.Element[]; //Изменить
    hideMenu?: boolean;
    hideComments?: boolean;
    containerFullWidth?: boolean;
    className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    hideMenu,
    hideComments,
    containerFullWidth,
    className,
}) => {
    return (
        <>
            <NavbarForm />
            <Box className={clsx("wrapper", className)}>
                {!hideMenu && (
                    <Box>
                        <NavbarMenu />
                    </Box>
                )}

                <Box className={clsx("container", { container_full: containerFullWidth })}>
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
