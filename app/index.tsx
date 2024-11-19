import { Text, View } from "react-native";
import { useState } from "react";
import RadioButton from "@/components/radio-button";

export default function Index() {

  return ( 
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
