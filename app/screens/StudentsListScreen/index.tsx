import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListItems from '@/components/listItems';
import MainHeader from '@/components/main-header';
import AddButton from '@/components/addbutton';

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
  { id: '1', name: 'Aluno A', userType: 'aluno' },
  { id: '2', name: 'Aluno B', userType: 'aluno' },
];

const handleDelete = (id: string) => {
  console.log(`Delete user with id: ${id}`);
};

const handleEdit = (id: string) => {
  console.log(`Edit user with id: ${id}`);
};

const StudentsListScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Container>
      <MainHeader />
      <ButtonContainer>
        <AddButton 
          onPress={() => console.log('Add new student')}
          icon={require('@/assets/images/plus.png')}
          buttonText="Adicionar Aluno"
        />
      </ButtonContainer>
      <ListItems list={users} handleDelete={handleDelete} handleEdit={handleEdit} />
    </Container>
  );
};

export default StudentsListScreen;