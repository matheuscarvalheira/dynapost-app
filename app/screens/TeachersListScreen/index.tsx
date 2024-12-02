import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import ListItems from "@/components/listItems";
import MainHeader from "@/components/main-header";
import AddButton from "@/components/addbutton";
import { TeacherContext } from "@/contexts/teacher-context";
import { Alert } from "react-native";
import UserEditModal from "@/components/edit-modal";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ButtonContainer = styled.View`
  margin: 20px 0;
`;

const TeachersListScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedActive, setSelectedActive] = useState<boolean | undefined>();
  const { teacherList, deleteTeacher, updateTeacher } =
    useContext(TeacherContext);

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
    updateTeacher({ id: selectedId, name, active });
    handleCloseEdit();
  };

  return (
    <Container>
      <MainHeader />
      {/* <ButtonContainer>
        <AddButton
          onPress={() => console.log("Add new teacher")}
          icon={require("@/assets/images/plus.png")}
          buttonText="Adicionar Professor"
        />
      </ButtonContainer> */}
      <UserEditModal
        isVisible={showModal}
        onClose={handleCloseEdit}
        onSave={handleSaveChanges}
        initialActive={selectedActive}
        initialName={selectedName}
      />
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
