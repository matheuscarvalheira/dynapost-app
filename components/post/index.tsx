import React from "react";
import { Image } from "react-native";
import * as S from "./styles";
import { PostProps } from "./props";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";

const TeacherIcon = require("../../assets/images/teacher.png");
const StudentIcon = require("../../assets/images/student.png");
const Post: React.FC<PostProps> = ({
  title,
  description,
  userType,
  userName,
}) => {
  const userIcon = userType === "teacher" ? TeacherIcon : StudentIcon;

  const handleEdit = () => {
    // handle edit
  };

  const handleDelete = () => {
    // handle delete
  };

  return (
    <MenuProvider>
      <S.Container>
        <S.UserInfo>
          <Image
            source={userIcon}
            style={{ width: 30, height: 25 }}
            resizeMode="contain"
          />
          <S.UserName>{userName}</S.UserName>
          <Menu>
            <MenuTrigger>
              <S.MenuTriggerText>...</S.MenuTriggerText>
            </MenuTrigger>
            <MenuOptions customStyles={S.optionsStyles}>
              <MenuOption onSelect={handleEdit} text="Edit" />
              <MenuOption onSelect={handleDelete} text="Delete" />
            </MenuOptions>
          </Menu>
        </S.UserInfo>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
    </MenuProvider>
  );
};

export default Post;
