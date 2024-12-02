import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import { ListItemProps } from "./props";

export interface User {
  id: string;
  name: string;
  userType: string;
}

export default function ListItems({
  list,
  userType,
  handleDelete,
  handleEdit,
}: ListItemProps & { userType: string }) {
  const [data, setData] = useState(list);
  const [loading, setLoading] = useState(false);

  const icon =
    userType === "Professor"
      ? require("@/assets/images/teacher.png")
      : require("@/assets/images/student.png");
  const editIcon = require("@/assets/images/editIcon.png");
  const deleteIcon = require("@/assets/images/deleteIcon.png");
  return (
    <ScrollView style={styles.container}>
      {list.map((item) => (
        <View style={styles.itemView} key={item.id}>
          <Image
            style={[styles.leftIcon, { resizeMode: "contain" }]}
            source={icon}
          />
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.actionButtonContainer}>
            <TouchableOpacity
              onPress={() => handleEdit(item.id, item.name, item.active)}
            >
              <Image
                style={[styles.actionButtonEditIcon, { resizeMode: "contain" }]}
                source={editIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Image
                style={[
                  styles.actionButtonDeleteIcon,
                  { resizeMode: "contain" },
                ]}
                source={deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  leftIcon: {
    height: 40,
    width: 40,
    padding: 10,
  },
  itemView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 32,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#E4E4E7",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  actionButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  actionButtonDeleteIcon: {
    width: 20,
    height: 20,
  },
  actionButtonEditIcon: {
    width: 18,
    height: 18,
  },
  loadingContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
