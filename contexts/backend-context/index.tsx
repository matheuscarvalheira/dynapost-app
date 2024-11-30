// BackendProvider.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  BackendContextProps,
  BackendProviderProps,
  Classroom,
  CreatePostResult,
  DeletePostResult,
  GetSearchedPostsProps,
  Post,
  UpdatePostResult,
} from "./types";
import { AuthContext } from "../auth-context";
import { api } from "@/api/backend";

export const BackendContext = createContext({} as BackendContextProps);

export function BackendProvider({ children }: BackendProviderProps) {
  const { userId, userType } = useContext(AuthContext);
  const [classrooms, setClassrooms] = useState<Classroom[] | []>([]);
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [postList, setPostList] = useState<Post[] | []>([]);
  const [searchedPosts, setSearchedPosts] = useState<Post[] | []>([]);

  async function getClassrooms() {
    if (userId.trim() !== "" && userType.trim() !== "") {
      setLoading(true);
      setError("");
      try {
        const { data } = await api.get(`classrooms/${userType}s/${userId}`);
        setClassrooms(data);
      } catch (error) {
        console.error("Failed to get Classrooms:", error);
        setError("Falha ao obter as turmas");
      } finally {
        setLoading(false);
      }
    }
  }

  const handleChooseClassroom = (id: string) => {
    setSelectedClassroom(id);
  };

  async function getAllPosts() {
    if (selectedClassroom) {
      setLoading(true);
      setError("");
      try {
        const { data } = await api.get(`posts/classroom/${selectedClassroom}`);
        setPostList(data);
      } catch (error) {
        console.error("Failed to get Posts: ", error);
        setError("Falha ao obter os posts");
      } finally {
        setLoading(false);
      }
    }
  }

  async function getSearchedPosts({ queryString }: GetSearchedPostsProps) {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get(
        `posts/search/${selectedClassroom}?q=${queryString}`
      );
      setSearchedPosts(data);
    } catch (error) {
      setError("Erro ao carregar posts");
      console.error("Failed to get Posts:", error);
    } finally {
      setLoading(false);
    }
  }

  const cleanPostSearch = () => {
    setSearchedPosts([]);
  };

  // async function getPost({ postId }: GetPostProps): Promise<GetPostResult> {
  //   try {
  //     const { data } = await api.get(`posts/${postId}`);
  //     return { getPostOk: true, post: data };
  //   } catch (error) {
  //     console.error('Failed to get Post:', error);
  //     return { getPostOk: false, message: 'Falha ao obter as Postagens. Tente novamente mais Tarde.', post: null };
  //   }
  // }

  async function createPost({
    title,
    body,
    published,
  }: Post): Promise<CreatePostResult> {
    try {
      const { data } = await api.post("posts", {
        title,
        body,
        published,
        classroom_id: selectedClassroom,
        teacher_id: userId,
      });
      return {
        createPostOk: true,
        message: "Postagem Criada com Sucesso!",
        post: data,
      };
    } catch (error) {
      console.error("Failed to Create Post:", error);
      return {
        createPostOk: false,
        message: "Falha na Criação da Postagem. Tente novamente mais Tarde.",
        post: null,
      };
    }
  }

  async function updatePost({
    id,
    title,
    body,
    published,
  }: Post): Promise<UpdatePostResult> {
    try {
      const { data } = await api.put(`posts/${id}`, { title, body, published });
      return {
        updatePostOk: true,
        message: "Postagem Alterada com Sucesso!",
        post: data,
      };
    } catch (error) {
      console.error("Failed to Update Post:", error);
      return {
        updatePostOk: false,
        message: "Falha na Alteração da Postagem. Tente novamente mais Tarde.",
        post: null,
      };
    }
  }

  async function deletePost({ id }: { id: string }) {
    setLoading(true);
    setError("");
    try {
      const { status } = await api.delete(`posts/${id}`);
      if (status === 204) {
        getAllPosts();
      }
    } catch (error) {
      console.error("Failed to Delete Post:", error);
      setError("Erro ao tentar apagar o post");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getClassrooms();
  }, [userId, userType]);

  useEffect(() => {
    getAllPosts();
  }, [selectedClassroom]);

  return (
    <BackendContext.Provider
      value={{
        classrooms,
        postList,
        handleChooseClassroom,
        getSearchedPosts,
        cleanPostSearch,
        searchedPosts,
        loading,
        error,
        createPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </BackendContext.Provider>
  );
}
