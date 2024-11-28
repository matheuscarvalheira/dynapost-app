import Post from "@/components/post";
import React from "react";
import { View, ScrollView } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import styled from "styled-components/native";

const FeedScreen = () => {
  const userType = "teacher";
  const posts = [
    {
      id: "1",
      title: "Titulo do post 1",
      userName: "Fulano",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et eros euismod, fermentum ante sit amet, lobortis enim. Integer non urna tincidunt, bibendum est vel, tincidunt erat.",
    },
    {
      id: "2",
      title: "Titulo do post 2",
      userName: "Maria",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin risus id lorem mollis, sit amet vulputate arcu egestas.",
    },
    {
      id: "3",
      title: "Titulo do post 3",
      userName: "João",
      description:
        "Vestibulum tincidunt, felis eu ullamcorper consequat, mauris nisi tempor nisi, at ullamcorper nulla orci nec eros.",
    },
    {
      id: "4",
      title: "Titulo do post 4",
      userName: "Ana",
      description:
        "Aliquam erat volutpat. Praesent id lorem vehicula, volutpat enim at, volutpat elit. Nam auctor mauris ut sem sollicitudin tincidunt.",
    },
    {
      id: "5",
      title: "Titulo do post 5",
      userName: "Carlos",
      description:
        "Aenean vel turpis a eros tempor auctor. Cras nec varius libero, ut fermentum nunc. Morbi et augue non nulla lacinia lacinia.",
    },
    {
      id: "6",
      title: "Titulo do post 6",
      userName: "Patricia",
      description:
        "Donec ut urna eu nulla tincidunt venenatis. Quisque facilisis felis sed sollicitudin aliquet. Nam feugiat risus vitae tortor suscipit.",
    },
    {
      id: "7",
      title: "Titulo do post 7",
      userName: "Lucas",
      description:
        "Curabitur vestibulum purus at lorem volutpat, vitae convallis nunc volutpat. Donec quis neque et urna gravida pharetra sit amet nec risus.",
    },
    {
      id: "8",
      title: "Titulo do post 8",
      userName: "Fernanda",
      description:
        "Fusce et sagittis nisi. Donec et venenatis magna, vel elementum erat. Integer sed turpis ut elit sollicitudin fermentum.",
    },
    {
      id: "9",
      title: "Titulo do post 9",
      userName: "Roberto",
      description:
        "Sed in dolor eu arcu placerat cursus a eget libero. Etiam ac ultricies purus. Donec sodales ultricies justo, vel varius sapien.",
    },
    {
      id: "10",
      title: "Titulo do post 10",
      userName: "Juliana",
      description:
        "Ut facilisis felis et velit malesuada, nec porttitor purus volutpat. Curabitur malesuada augue non nibh sollicitudin, eget volutpat erat.",
    },
  ];

  return (
    <MenuProvider>
      <ScrollView>
        {posts.map(({ id, title, userName, description }) => (
          <View key={id}>
            <Post
              userType={userType}
              title={title}
              description={description}
              userName={userName}
            />
          </View>
        ))}
      </ScrollView>
    </MenuProvider>
  );
};

export default FeedScreen;
