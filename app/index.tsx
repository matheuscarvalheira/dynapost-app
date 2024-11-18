import Button from "@/components/button";
import Input from "@/components/input";
import ListItems from "@/components/listItems";
import Post from "@/components/post";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <ListItems
          list={[
            { name: "Fulano", id: "1" },
            { name: "Fulana", id: "2" },
            { name: "Fulanos", id: "3" },
            { name: "Fulanos", id: "4" },
            { name: "Fulanos", id: "5" },
            { name: "Fulanos", id: "6" },
            { name: "Fulanos", id: "7" },
            { name: "Fulanos", id: "8" },
            { name: "Fulanos", id: "9" },
            { name: "Fulanos", id: "10" },
            { name: "Fulanos", id: "11" },
            { name: "Fulanos", id: "12" },
          ]}
          handleEdit={function (id: string): void {
            alert(id);
          }}
          handleDelete={function (id: string): void {
            alert(id);
          }}
        />
    </View>
  );
}
