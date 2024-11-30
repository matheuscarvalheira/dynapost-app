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

const handleDelete = (id: string) => {
  console.log(`Delete user with id: ${id}`);
};

const handleEdit = (id: string) => {
  console.log(`Edit user with id: ${id}`);
};

const TeachersListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const users = generateUsers(50, "Professor"); // Gera 50 professores

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
        list={users}
        userType="Professor"
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default TeachersListScreen;
