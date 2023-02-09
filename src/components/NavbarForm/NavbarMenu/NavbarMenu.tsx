import styles from "./NavbarMenu.module.scss";

import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { schemaMenu } from "./NavbarMenuSchema";

export const NavbarMenu: React.FC = () => {
    const location = useLocation();
    const menuItemsRendered = Object.keys(schemaMenu).map((category) =>
        schemaMenu[category].map((app) =>
            app.tabs.map((tabInfo) => (
                <li key={tabInfo.label}>
                    <Link to={tabInfo.to}>
                        <Button variant={location.pathname === tabInfo.to ? "contained" : "text"}>
                            {tabInfo.iconClass}
                            {tabInfo.label}
                        </Button>
                    </Link>
                </li>
            ))
        )
    );

    return (
        <Box className={styles.menu_inner}>
            <ul>{menuItemsRendered}</ul>
        </Box>
    );
};
