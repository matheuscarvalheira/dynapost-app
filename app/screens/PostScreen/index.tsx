import React, { useState } from "react";
import * as S from "./style";
import Input from "@/components/input";
import Button from "@/components/button";
import { IPost, NewPostScreenProps } from "./props";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "@/components/main-header";

const PostScreen = ({ post }: NewPostScreenProps) => {
  const navigation = useNavigation();

  const [newPost, setNewPost] = useState<IPost | undefined>(post);

  const handleSubmit = () => {
    navigation.navigate("Feed" as never);
  };

  return (
    <>
      <MainHeader />
      <S.Container>
        <S.ChildContainer>
          <Input
            placeholder="Título"
            value={newPost?.title}
            onChangeText={(newTitle) => {
              setNewPost({ ...newPost, title: newTitle });
            }}
          />
          <Input
            placeholder="Conteúdo"
            value={newPost?.body}
            onChangeText={(newBody) => {
              setNewPost({ ...newPost, body: newBody });
            }}
            multiline
            style={{ flex: 1 }}
          />
          <S.ButtonContainer>
            <Button onPress={handleSubmit}>
              {newPost?.id !== undefined && newPost.id.trim() !== ""
                ? "Editar"
                : "Publicar"}
            </Button>
          </S.ButtonContainer>
        </S.ChildContainer>
      </S.Container>
    </>
  );
};

export default PostScreen;
