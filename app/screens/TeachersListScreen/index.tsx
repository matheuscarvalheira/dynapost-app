import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import ListItems from "@/components/listItems";
import MainHeader from "@/components/main-header";
import AddButton from "@/components/addbutton";
import { TeacherContext } from "@/contexts/teacher-context";
import { Alert } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonContainer = styled.View`
  margin: 20px 0;
`;

const handleEdit = (id: string) => {
  console.log(`Edit user with id: ${id}`);
};

const TeachersListScreen = () => {
  const { teacherList, deleteTeacher } = useContext(TeacherContext);

  const handleDelete = (id: string) => {
    Alert.alert(
      "Confirme que quer apagar",
      "Você tem certeza que quer apagar esse professor?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteTeacher({ id });
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Container>
      <MainHeader />
      <ButtonContainer>
        <AddButton
          onPress={() => console.log("Add new teacher")}
          icon={require("@/assets/images/plus.png")}
          buttonText="Adicionar Professor"
        />
      </ButtonContainer>

      <ListItems
        list={teacherList}
        teacherList={true}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default TeachersListScreen;
