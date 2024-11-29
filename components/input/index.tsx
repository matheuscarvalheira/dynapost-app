import React from 'react';
import { Image, ViewStyle } from 'react-native';
import { InputProps } from './props';
import * as S from './styles';

export default function Input({ icon, ...props  }: InputProps) {
  return (
    <>
      {icon ? (
        <S.ContainerWithIcon>
          <S.IconContainer>
            <Image source={icon} style={{ width: 20, height: 20 }} />
          </S.IconContainer>
          <S.InputWithIcon {...props} />
        </S.ContainerWithIcon >
      ) : (
        <S.InputWithoutIcon {...props} />
      )}
    </>
  );
}