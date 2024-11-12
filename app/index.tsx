import Button from "@/components/button";
import SimpleHeader from "@/components/simple-header";
import Input from "@/components/input";
import { Text, View } from "react-native";
import MainHeader from "@/components/main-header";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainHeader></MainHeader>
      <SimpleHeader MainTitle="Teste Main" SubTile="Teste Sub"></SimpleHeader>
      <Input label='E-mail' />
      <Button onClick={() => {}}>
        Selecionar
      </Button>
    </View>
  );
}
