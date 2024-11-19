import { Text, View } from "react-native";
import { useState } from "react";
import RadioButton from "@/components/radio-button";

export default function Index() {
  const options = [
    { value: 'Javascript' },
    { value: 'AWS' },
    { value: 'Typescript' },
  ];

  const handleOptionChange = (value: string) => {
    console.log('Selected option:', value);
  };

  return ( 
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <RadioButton
        options={options}
        groupName="exampleGroup"
        required={true}
      />
    </View>
  );
}
