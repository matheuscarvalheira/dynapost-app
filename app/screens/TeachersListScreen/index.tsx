import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import ListItems from "@/components/listItems";
import MainHeader from "@/components/main-header";
import AddButton from "@/components/addbutton";
import { AuthContext } from "@/contexts/auth-context";
import { TeacherContext } from "@/contexts/teacher-context";

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
  const { userType } = useContext(AuthContext);
  const { teacherList, deleteTeacher } = useContext(TeacherContext);

  const handleDelete = (id: string) => {
    deleteTeacher({ id });
  };

  return (
    <Container>
      <MainHeader />
      {userType === "teacher" && (
        <ButtonContainer>
          <AddButton
            onPress={() => console.log("Add new teacher")}
            icon={require("@/assets/images/plus.png")}
            buttonText="Adicionar Professor"
          />
        </ButtonContainer>
      )}
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
