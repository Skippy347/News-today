import {
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tabs,
    Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { UserContext } from "../../context/authContext";
import { getAllUsers } from "../../http/userApi";
import styles from "./RatingPage.module.scss";

export const RatingPage: React.FC = () => {
    const { users, setUsers } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const posts: any = await getAllUsers();
            setUsers(posts);
        })();
    }, [setUsers]);

    const usersInfo = users.map((el: any) => (
        <TableBody key={el.createdAt}>
            <TableRow key={el.id}>
                <TableCell>
                    <span>{el.id}.</span> {el.fullName}
                </TableCell>
                <TableCell align="right">{el.createdAt}</TableCell>
            </TableRow>
        </TableBody>
    ));
    return (
        <>
            <MainLayout hideComments>
                <Paper className={styles.rating} elevation={0}>
                    <Typography className={styles.rating_title} variant="h5">
                        Рейтинг пользователей
                    </Typography>
                    <Typography className={styles.rating_conent}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quis optio
                        voluptas.
                    </Typography>
                    <Tabs className={styles.rating_tabs} value={0} indicatorColor="primary">
                        <Tab label="За всё время" />
                    </Tabs>
                </Paper>

                <Paper elevation={0} className={styles.rating_list}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Имя пользователя</TableCell>
                                <TableCell align="right">Дата создания аккаунта</TableCell>
                            </TableRow>
                        </TableHead>
                        {usersInfo}
                    </Table>
                </Paper>
            </MainLayout>
        </>
    );
};
