import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import ListItems from "@/components/listItems";
import MainHeader from "@/components/main-header";
import AddButton from "@/components/addbutton";
import { StudentContext } from "@/contexts/student-context";
import { Alert } from "react-native";
import UserEditModal from "@/components/edit-modal";
import UserAddModal from "@/components/add-modal"; 

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonContainer = styled.View`
  margin: 20px 0;
`;

const StudentsListScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedActive, setSelectedActive] = useState<boolean | undefined>();
  const { studentList, deleteStudent, updateStudent, createStudent } =
    useContext(StudentContext);

  const handleDelete = (id: string) => {
    Alert.alert(
      "Confirme que quer apagar",
      "Você tem certeza que quer apagar esse aluno?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteStudent({ id });
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleEdit = (id: string, name: string, active: boolean) => {
    setShowModal(true);
    setSelectedId(id);
    setSelectedName(name);
    setSelectedActive(active);
  };

  const handleCloseEdit = () => {
    setShowModal(false);
    setSelectedId("");
    setSelectedActive(undefined);
    setSelectedName("");
  };

  const handleSaveChanges = (name: string, active: boolean) => {
    updateStudent({ id: selectedId, name, active });
    handleCloseEdit();
  };

  const handleAddUser = () => {
    setShowAddModal(true);
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
  };

  const handleSaveNewUser = (name: string, active: boolean) => {
    createStudent({ name, active });
    handleCloseAdd();
  };

  return (
    <Container>
      <MainHeader />
        <ButtonContainer>
        <AddButton
          onPress={handleAddUser}
          icon={require("@/assets/images/plus.png")}
          buttonText="Adicionar Aluno"
        />
      </ButtonContainer>
      <UserEditModal
        isVisible={showModal}
        onClose={handleCloseEdit}
        onSave={handleSaveChanges}
        initialActive={selectedActive}
        initialName={selectedName}
      />
      <UserAddModal
        isVisible={showAddModal}
        onClose={handleCloseAdd}
        onSave={handleSaveNewUser}
      />
      <ListItems
        list={studentList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default StudentsListScreen;