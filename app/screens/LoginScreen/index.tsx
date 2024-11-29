import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '@/components/input';
import Button from '@/components/button';
import { LoginScreenProps } from './props';
import styles from './styles';


const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      // navigation.replace('EscolherTurma');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleCriarConta = () => {
    console.log('Tela criar conta');
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
      <Text style={styles.createAccountText}>Criar uma nova conta</Text>
	  </View>
  );
};

export default LoginScreen;