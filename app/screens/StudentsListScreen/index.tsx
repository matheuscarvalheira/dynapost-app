import ListItems from '@/components/listItems';
import MainHeader from '@/components/main-header';
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  return (
    <Container>
      <MainHeader />
      <ListItems list={users} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </Container>
  );
};

export default StudentsListScreen;