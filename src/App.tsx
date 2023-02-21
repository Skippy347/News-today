import "./App.scss";

import { Post } from "./components/Post/Post";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/authContext";
import { checkAuth } from "./http/userApi";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreatePostForm } from "./components/Post/CreatePostForm/CreatePostForm";
import { getAllPosts } from "./http/postsApi";
import { FullPost } from "./components/Post/FullPost/FullPost";
import { RatingPage } from "./pages/Rating/RatingPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { PostContext } from "./context/postsContext";

function App(): any {
    const { token, setUser } = useContext(UserContext);
    const { setPosts } = useContext(PostContext);
    useEffect(() => {
        (async () => {
            const posts = await getAllPosts();
            setPosts(posts);
        })();
        if (localStorage.getItem("token")) {
            (async () => {
                const responce = await checkAuth();
                setUser(responce);
            })();
        }
    }, [token, setUser, setPosts]);

    return (
        <Routes>
            <Route path="/" element={<Post />}></Route>
            <Route path="create" element={<CreatePostForm />} />
            <Route path="full" element={<FullPost />} />
            <Route path="full/:id" element={<FullPost />} />
            <Route path="rating" element={<RatingPage />} />
            <Route path="messages" element={<ErrorPage />} />
            <Route path="subscriptions" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
