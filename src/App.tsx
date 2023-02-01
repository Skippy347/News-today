import "./App.scss";

import { Post } from "./components/Post/Post";
import { MainLayout } from "./components/MainLayout/MainLayout";

const App: React.FC = () => {
    return (
        <>
            <MainLayout>
               <Post />
               <Post />

               <Post />

            </MainLayout>
        </>
    );
};

export default App;
