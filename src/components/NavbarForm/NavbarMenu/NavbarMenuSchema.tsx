import FireIcon from "@mui/icons-material/WhatshotOutlined";
import MessageIcon from "@mui/icons-material/TextsmsOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUpOutlined";
import StarIcon from "@mui/icons-material/StarBorderPurple500Outlined";

interface INavbarSchema {
    [key: string]: Array<INavbarCategory>;
}

interface INavbarCategory {
    tabs: Array<ICategoryTab>;
}

interface ICategoryTab {
    iconClass: any; //Исправить
    label: string;
    to: string;
}

export const schemaMenu: INavbarSchema = {
    APPS: [
        {
            tabs: [
                {
                    iconClass: <FireIcon />,
                    label: "Лента",
                    to: "/",
                },
                {
                    iconClass: <MessageIcon />,
                    label: "Сообщения",
                    to: "/messages",
                },
                {
                    iconClass: <TrendingUpIcon />,
                    label: "Рейтинг",
                    to: "/rating",
                },
                {
                    iconClass: <StarIcon />,
                    label: "Подписки",
                    to: "/subscriptions",
                },
            ],
        },
    ],
};
