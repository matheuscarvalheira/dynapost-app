import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import MainHeader from "@/components/main-header";
import Input from "@/components/input";
import { ScrollView, View, Text } from "react-native";
import Post from "@/components/post";
import { BackendContext } from "@/contexts/backend-context";
import { useFocusEffect } from "expo-router";

const searchIcon = require("@/assets/images/search.png");

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

const PostList = styled.View`
  width: 100%;
  margin-top: 30;
  margin-bottom: 50;
`;

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  const { getSearchedPosts, searchedPosts, cleanPostSearch } =
    useContext(BackendContext);

  useEffect(() => {
    if (searchText.length > 2) {
      getSearchedPosts({ queryString: searchText });
    } else {
      cleanPostSearch();
    }
  }, [searchText]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setSearchText("");
      };
    }, [])
  );

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
        <PostList>
          {searchText.length > 2 && searchedPosts.length === 0 ? (
            <View>
              <Text>Não existem posts para buscar feita.</Text>
            </View>
          ) : (
            <ScrollView>
              {searchedPosts && searchedPosts.map(({ id, title, teacher_name, body }) => (
                <View key={id}>
                  <Post
                    title={title}
                    description={body}
                    userName={teacher_name}
                    id={id}
                    showOptions={false}
                  />
                </View>
              ))}
            </ScrollView>
          )}
        </PostList>
      </Content>
    </Container>
  );
};

export default SearchScreen;
