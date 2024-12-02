import React, { useContext, useState } from "react";
import * as S from "./style";
import Input from "@/components/input";
import Button from "@/components/button";
import { NewPostScreenProps } from "./props";
import { useNavigation } from "@react-navigation/native";
import { BackendContext } from "@/contexts/backend-context";

const PostScreen = ({ route }: NewPostScreenProps) => {
  const navigation = useNavigation();
  const { updatePost, createPost } = useContext(BackendContext);
  const { id, title, description } = route?.params || {};
  const [postTitle, setPostTitle] = useState(title);
  const [postBody, setPostBody] = useState(description);

  const handleSubmitEdit = () => {
    updatePost({ title: postTitle, body: postBody, id });
    navigation.goBack();
  };

  const handlePost = () => {
    createPost({ title: postTitle, body: postBody, id });
    setPostBody("");
    setPostTitle("")
    navigation.navigate("Feed" as never)
  };

  return (
    <S.Container>
      <S.ChildContainer>
        <Input
          placeholder="Título"
          value={postTitle}
          onChangeText={setPostTitle}
        />
        <Input
          placeholder="Conteúdo"
          value={postBody}
          onChangeText={setPostBody}
          multiline
          style={{ flex: 1 }}
        />
        <S.ButtonContainer>
          <Button
            onPress={
              id !== undefined ? () => handleSubmitEdit() : () => handlePost(id)
            }
          >
            {id !== undefined ? "Salvar Edição" : "Publicar"}
          </Button>
        </S.ButtonContainer>
      </S.ChildContainer>
    </S.Container>
  );
};

export default PostScreen;
