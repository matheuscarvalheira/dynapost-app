import Button from "@/components/button";
import Input from "@/components/input";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input label='E-mail' />
      <Button onClick={() => {}}>
        Selecionar
      </Button>
    </View>
  );
}
