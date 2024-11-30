import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import ListItems from "@/components/listItems";
import MainHeader from "@/components/main-header";
import AddButton from "@/components/addbutton";
import { AuthContext } from "@/contexts/auth-context";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonContainer = styled.View`
  margin: 20px 0;
`;

const users = [
  { id: "1", name: "Professor A", userType: "professor" },
  { id: "2", name: "Professor B", userType: "professor" },
];

const handleDelete = (id: string) => {
  console.log(`Delete user with id: ${id}`);
};

const handleEdit = (id: string) => {
  console.log(`Edit user with id: ${id}`);
};

const TeachersListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const { userType } = useContext(AuthContext);

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
        list={users}
        teacherList={true}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default TeachersListScreen;
