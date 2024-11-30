import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Input from "@/components/input";
import Button from "@/components/button";
import { LoginScreenProps } from "./props";
import styles from "./styles";
import { AuthContext } from "@/contexts/auth-context";

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    if (email && password) {
      signIn({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="E-mail *"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder="Senha *"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin} style={styles.button}>
          Entrar
        </Button>
      </View>
      <Text style={styles.orText}>ou</Text>
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.createAccountText}>Criar uma nova conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
