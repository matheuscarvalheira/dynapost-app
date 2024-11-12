import React from 'react'
import { SimpleHedaerProps } from './props'
import * as S from './styles'

export default function SimpleHeader({ MainTitle, SubTile } : SimpleHedaerProps){
    return(
        <S.SimpleHeaderContainer>
            <S.MainTitle>{MainTitle}</S.MainTitle>
            <S.SubTitle>{SubTile}</S.SubTitle>
        </S.SimpleHeaderContainer>
    )
}
