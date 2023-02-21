import { createContext, useState } from "react";

interface IInitialValue {
    posts: any[];
    setPosts: Function;
    post: any;
    setPost: Function;
    result: any;
    setResult: Function;
}

let defaultValue: IInitialValue = {
    post: [],
    setPost: (post: object) => {},
    posts: [],
    setPosts: (posts: object) => {},
    result: [],
    setResult: (post: object) => {},
};

export const PostContext = createContext(defaultValue);

export const PostProvider = ({ children }: any) => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [result, setResult] = useState([]);

    return (
        <PostContext.Provider
            value={{
                posts,
                setPosts,
                post,
                setPost,
                result,
                setResult,
            }}>
            {children}
        </PostContext.Provider>
    );
};
