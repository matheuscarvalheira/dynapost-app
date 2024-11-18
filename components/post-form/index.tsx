import { Alert, View } from "react-native";
import Input from "../input";
import * as S from "./styles";
import { StyleSheet } from "react-native";
import Button from "../button";
import { PostFormProps } from "./props";
import { useState } from "react";

const PostForm = ({ titleText, postContent, handleSubmit }: PostFormProps) => {
  const [title, setTitle] = useState(titleText || "");
  const [postTextContent, setPostTextContent] = useState(postContent || "");
  const isEditing = titleText || postContent;

  return (
    <S.Container>
      <Input
        label="Titulo do post"
        style={styles.title}
        value={title}
        onChangeText={setTitle}
      />
      <Input
        label="Conteúdo"
        multiline
        numberOfLines={40}
        style={styles.textarea}
        value={postTextContent}
        onChangeText={setPostTextContent}
      />
      <Button onPress={handleSubmit} disabled={!title || !postTextContent}>
        {isEditing ? "Atualizar" : "Publicar"}
      </Button>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  textarea: {
    height: 485,
    textAlignVertical: "top",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 36,
    fontSize: 14,
  },
});

export default PostForm;
