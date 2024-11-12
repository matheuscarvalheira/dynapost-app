import Button from "@/components/button";
import Input from "@/components/input";
import Post from "@/components/post";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input label="E-mail" />
      <Button onPress={() => {}}>Selecionar</Button>
      <Post
        title="Título da Postagem"
        description="There are many variations of passages of Lorem 
        Ipsum available, but the majority have suffered alteration 
        in some form, by injected humour, or random words which 
        don't look even slightly believable. If you are going to use 
        a passage of Lorem Ipsum, you need to be sure there isn't 
        anything embarrassing hidden in the middle of text. All the 
        Lorem Ipsum generators on the Internet tend to repeat 
        predefined chunks as necessary, making this the first true 
        generator on the Internet. It uses a dictionary of over 200 
        Latin words, combined with a handful of model sentence 
        structures, to generate Lorem Ipsum which looks reasonable. 
        The generated Lorem Ipsum is therefore always free from 
        repetition, injected humour, or non-characteristic words etc."
        userType="teacher"
        userName="Prof. Lorem"
      />
    </View>
  );
}
