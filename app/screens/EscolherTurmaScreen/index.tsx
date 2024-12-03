import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from './styles';
import { EscolherTurmaProps } from "./props";
import Button from "@/components/button";
import RadioButton from "@/components/radio-button";

const EscolherTurmaScreen: React.FC<EscolherTurmaProps> = ({ onSubmit }) => {
  const [selectedValue, setSelectedValue] = useState<string>(""); 
  const options = [
    { value: "React" },
    { value: "AWS" },
    { value: "Typescript" },
    { value: "Banco de dados" },
  ];

  const handleSelecionarTurma = (value: string) => {
    if (selectedValue) {
      onSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Escolha a turma</Text>
        <RadioButton
          options={options}
          groupName="radioGroup"
          required={true}
        />
      <Button onPress={() => handleSelecionarTurma(selectedValue)} style={styles.button}>
          Selecionar
        </Button>
    </View>
  )
};

export default EscolherTurmaScreen;
