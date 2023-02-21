import { MainLayout } from "../../components/MainLayout/MainLayout";
import { CreatePostForm } from "../../components/Post/CreatePostForm/CreatePostForm";

export const CreatePost: React.FC = () => {
    return (
        <>
            <MainLayout className="main_layout_color" hideMenu hideComments>
                <CreatePostForm />
            </MainLayout>
        </>
    );
};
