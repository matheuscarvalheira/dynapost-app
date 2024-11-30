import Post from "@/components/post";
import { BackendContext } from "@/contexts/backend-context";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

interface FeedScreenProps {
  navigation: StackNavigationProp<any>;
}

const FeedScreen = ({ navigation }: FeedScreenProps) => {
  const { postList: posts, loading, error } = useContext(BackendContext);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (posts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noPostsText}>
          Não há postagens para essa turma.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {posts.map(({ id, title, teacher_name, body }) => (
        <TouchableOpacity
          key={id}
          onPress={() =>
            navigation.navigate("PostDetails", {
              id,
              title,
              userName: teacher_name,
              description: body,
            })
          }
        >
          <View>
            <Post title={title} description={body} userName={teacher_name} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  noPostsText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default FeedScreen;
