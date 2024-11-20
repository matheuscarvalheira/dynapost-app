import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  CheckBoxContainer,
  Container,
  ErrorText,
  RadioButtonContainer,
} from "./styles";
import { SignUpFormProps } from "./props";
import Button from "../button";
import Input from "../input";
import RadioButton from "../radio-button";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short!").required("Required"),
});

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const optionsRadio = [
    { value: "Professor" },
    { value: "Aluno" },
  ];

  const options = [
    { value: "React" },
    { value: "AWS" },
    { value: "Typescript" },
    { value: "Banco de dados" },
  ];
  return (
    <Container>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text>Tipo de conta</Text>
            <RadioButtonContainer>
              <RadioButton
                options={optionsRadio}
                groupName="exampleGroup"
                required={true}
              />
            </RadioButtonContainer>
            <Input placeholder="E-mail" />
            <Input placeholder="Data de nascimento" />
            <Input placeholder="Celular" />
            <Text>Turma(s) que deseja fazer parte</Text>
            <CheckBoxContainer>
              <RadioButton
                options={options}
                groupName="checkboxGroup"
                required={true}
                checkbox
              />
            </CheckBoxContainer>
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar senha" />
            <Button onPress={handleSubmit as any}>Cadastrar</Button>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpForm;
