import SignUpForm from '@/components/account-form';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type RegisterScreenNavigationProp = StackNavigationProp<
  { Register: undefined; Home: undefined },
  'Register'
>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  return (
    <View style={styles.container}>
      <SignUpForm onSubmit={function (values: { name: string; email: string; password: string; }): void {
        throw new Error('Function not implemented.');
      } } />
      <Button title="Go to Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default RegisterScreen;
