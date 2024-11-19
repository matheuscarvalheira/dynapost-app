import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, ErrorText } from './styles';
import { SignUpFormProps } from './props';
import Button from '../button';
import Input from '../input';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password too short!')
    .required('Required'),
});

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            {/* <RadioButton/> */}
            <Input placeholder="E-mail"  />
            <Input placeholder="Data de nascimento"  />
            <Input placeholder="Celular"  />
            {/* <RadioButton/> */}
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar senha" />
            <Button onPress={handleSubmit as any}>
              Cadastrar
            </Button>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpForm;