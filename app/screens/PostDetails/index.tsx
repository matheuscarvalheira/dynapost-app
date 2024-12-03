import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import * as S from "./styles";

interface PostDetailsScreenProps {
  route: {
    params: {
      id: number;
      title: string;
      userName: string;
      description: string;
      userType: "student" | "teacher";
      dateCreated?: string;
      dateModified?: string;
    };
  };
}

const TeacherIcon = require("@/assets/images/teacher.png");
const StudentIcon = require("@/assets/images/student.png");

const PostDetailsScreen: React.FC<PostDetailsScreenProps> = ({ route }) => {
  const { title, userName, description, userType, dateCreated, dateModified } = route.params;
  const userIcon = userType === "teacher" ? TeacherIcon : StudentIcon;

  return (
    <View style={styles.container}>
      <S.UserInfo>
        <Image
          source={userIcon}
          style={{ width: 30, height: 25 }}
          resizeMode="contain"
        />
        <S.UserName>{userName}</S.UserName>
      </S.UserInfo>
      {dateCreated && <Text style={!dateModified ? styles.dateTextMargin : styles.dateText}>{dateCreated}</Text>}
      {dateModified && <Text style={styles.dateTextMargin}>{dateModified}</Text>}
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    display: "flex",
    flex: 1,
  },
  dateText: {
    fontSize: 10,
    fontFamily: "Inter",
  },
  dateTextMargin: {
    fontSize: 10,
    fontFamily: "Inter",
    marginBottom: 13
  }
});

export default PostDetailsScreen;
