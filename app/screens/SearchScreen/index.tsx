import React, { useState } from 'react';
import styled from 'styled-components/native';
import MainHeader from '@/components/main-header';
import Input from '@/components/input';

const searchIcon = require('@/assets/images/search.png');

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Content = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 100%;
  height: 50px;
`;

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <Container>
      <MainHeader />
      <Content>
        <InputContainer>
          <Input
          placeholder="Digite algo"
          icon={searchIcon}
          value={searchText}
          onChangeText={setSearchText}
        />
        </InputContainer>
      </Content>
    </Container>
  );
};

export default SearchScreen;