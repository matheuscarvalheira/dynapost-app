import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';

export default function MainHeader() {
  return (
    <S.MainHeaderContainer>
      <S.ImageContainer>
        <Image source={require('@/assets/images/header_books.png')} />
      </S.ImageContainer>
      <S.LogoutContainer>
        <Image source={require('@/assets/images/logout.png')} />
      </S.LogoutContainer>
    </S.MainHeaderContainer>
  );
}