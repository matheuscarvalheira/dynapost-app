import React, { useContext } from "react";
import * as S from "./styles";
import { Image, TouchableOpacity } from "react-native";
import { AuthContext } from "@/contexts/auth-context";

export default function MainHeader() {
  const { logOut } = useContext(AuthContext);
  return (
    <S.MainHeaderContainer>
      <S.ImageContainer>
        <Image source={require("@/assets/images/header_books.png")} />
      </S.ImageContainer>
      <S.LogoutContainer>
        <TouchableOpacity onPress={logOut}>
          <Image source={require("@/assets/images/logout.png")} />
        </TouchableOpacity>
      </S.LogoutContainer>
    </S.MainHeaderContainer>
  );
}
