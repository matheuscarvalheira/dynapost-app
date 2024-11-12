import React from 'react'
import * as S from './styles'
import { Image } from 'react-native'
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export default function MainHeader(){
    return(
        <S.MainHeaderContainer>
            <S.ImageContainer>
                <Image source={require('@/assets/images/header_books.png')} style={{marginLeft: 30}}/>
            </S.ImageContainer>
            <S.ImageContainer>
                <Image source={require('@/assets/images/logout.png')} style={{marginRight: 10}}/>
            </S.ImageContainer>
        </S.MainHeaderContainer>
    )
}
