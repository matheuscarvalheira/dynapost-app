import React, { useState } from "react";
import styled from "styled-components/native";
import ListItems from "@/components/listItems";
import MainHeader from "@/components/main-header";
import AddButton from "@/components/addbutton";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonContainer = styled.View`
  margin: 20px 0;
`;

const generateUsers = (num: number, userType: string) => {
  const users = [];
  for (let i = 1; i <= num; i++) {
    users.push({ id: i.toString(), name: `${userType} ${i}`, userType });
  }
  return users;
};

const users = generateUsers(50, "Aluno");

const handleDelete = (id: string) => {
  console.log(`Delete user with id: ${id}`);
};

const handleEdit = (id: string) => {
  console.log(`Edit user with id: ${id}`);
};

const StudentsListScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <MainHeader />
      <ButtonContainer>
        <AddButton
          onPress={() => console.log("Add new student")}
          icon={require("@/assets/images/plus.png")}
          buttonText="Adicionar Aluno"
        />
      </ButtonContainer>
      <ListItems
        list={users}
        userType="Aluno"
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default StudentsListScreen;
