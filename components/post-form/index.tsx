// import { Alert, View } from "react-native";
import Input from "../input";
import * as S from "./styles";
import { StyleSheet } from "react-native";
import Button from "../button";
import { PostFormProps } from "./props";
import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

const PostForm = ({
  titleText,
  postContent,
  teacher_id,
  classroom_id,
}: PostFormProps) => {
  const [title, setTitle] = useState(titleText || "");
  const [postTextContent, setPostTextContent] = useState(postContent || "");
//   const navigation = useNavigation();
  const isEditing = titleText || postContent;

  const handleSubmit = async () => {
    // if (title.trim() && postTextContent.trim()) {
    //   try {
    //     const { ok } = await fetch("http://localhost:3000/posts", {
    //       method: isEditing ? "PUT" : "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         title,
    //         body: postContent,
    //         teacher_id,
    //         classroom_id,
    //       }),
    //     });

    //     if (ok) {
    //       Alert.alert(
    //         `Post enviado`,
    //         `Postagem ${isEditing ? "atualizada" : "criada"} com sucesso!`
    //       );
    //       setTitle("");
    //       setPostTextContent("");
    //       navigation.goBack();
    //     } else {
    //       Alert.alert(
    //         `Erro`,
    //         `Postagem não foi ${isEditing ? "atualizada" : "criada"}.`
    //       );
    //     }
    //   } catch (error) {
    //     Alert.alert(
    //       `Erro ao ${isEditing ? "atualizar" : "criar"} postagem`,
    //       "Ocorreu um erro ao tentar realizar operação com a postagem"
    //     );
    //     console.error("Error: ", { error });
    //   }
    // }
  };

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
