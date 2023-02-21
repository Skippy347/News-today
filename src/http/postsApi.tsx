import { OutputData } from "@editorjs/editorjs";
import { $host } from ".";

interface CreatePostDto {
    title: string;
    content: OutputData["blocks"];
}

export const createPost = async (dto: CreatePostDto) => {
    try {
        const { data } = await $host.post("posts", dto);
        return data;
    } catch (e: any) {
        console.warn(e.response.data);
        console.warn("status code " + e.response.status);
    }
};

export const getOnePost = async (id: string) => {
    try {
        const { data } = await $host.get(`posts/${id}`);
        return data;
    } catch (e: any) {
        console.warn(e.response.data);
        console.warn("status code " + e.response.status);
    }
};

export const getAllPosts = async () => {
    try {
        const { data } = await $host.get("posts");
        return data;
    } catch (e: any) {
        console.warn(e.response.data);
        console.warn("status code " + e.response.status);
    }
};

export const searchPosts = async (title: any) => {
    try {
        const { data } = await $host.get(`posts/search?title=${title}`);
        return data;
    } catch (e: any) {
        console.warn(e.response.data);
        console.warn("status code " + e.response.status);
    }
};
