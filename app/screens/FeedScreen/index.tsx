import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FeedScreen = () => {
  return (
    <Container>
      <Text>Feed Screen</Text>
    </Container>
  );
};

export default FeedScreen;