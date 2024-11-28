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
  { id: '1', name: 'Professor A', userType: 'professor' },
  { id: '2', name: 'Professor B', userType: 'professor' },
];

const handleDelete = (id: string) => {
  console.log(`Delete user with id: ${id}`);
};

const handleEdit = (id: string) => {
  console.log(`Edit user with id: ${id}`);
};

const TeachersListScreen = () => {
  return (
    <Container>
      <MainHeader />
      <ListItems list={users} teacherList={true} handleDelete={handleDelete} handleEdit={handleEdit} />
    </Container>
  );
};

export default TeachersListScreen;