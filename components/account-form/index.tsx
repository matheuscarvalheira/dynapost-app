import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  CheckBoxContainer,
  Container,
  ErrorText,
  TitleText,
  RadioButtonContainer,
} from "./styles";
import { SignUpFormProps } from "./props";
import Button from "../button";
import Input from "../input";
import RadioButton from "../radio-button";
import { AuthContext } from "@/contexts/auth-context";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  selectedOptions: string[];
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short!").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const SignUpForm = () => {
  const optionsRadio = [{ value: "Professor" }, { value: "Aluno" }];
  const { allClassrooms, register } = useContext(AuthContext);

  const options =
    allClassrooms && allClassrooms.map(({ id, name }) => ({ id, value: name }));

  const handleSubmit = (
    data: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const { accountType, password, email, name, selectedOptions } = data;
    const classroomIds = selectedOptions.map(
      (option) =>
        allClassrooms.find((classroom) => classroom.name === option)?.id
    );
    register({
      name,
      userType: accountType === "Professor" ? "teacher" : "student",
      password,
      email,
      classrooms: classroomIds,
    });

    setSubmitting(false);
  };

  return (
    <Container>
      <TitleText>Crie uma nova conta</TitleText>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          accountType: "",
          selectedOptions: [],
        }}
        validationSchema={SignUpSchema}
        // @ts-ignore
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
          setFieldValue,
        }) => (
          <View>
            <Text>Tipo de conta</Text>
            <RadioButtonContainer>
              <RadioButton
                options={optionsRadio}
                checkbox={false}
                value={values.accountType}
                setFieldValue={setFieldValue}
                name="accountType"
              />
            </RadioButtonContainer>
            <Text>Turma(s) que deseja fazer parte</Text>
            <CheckBoxContainer>
              <RadioButton
                options={options}
                checkbox
                value={values.selectedOptions}
                setFieldValue={setFieldValue}
                name="selectedOptions"
              />
            </CheckBoxContainer>
            {touched.name && errors.name && (
              <Text style={{ color: "red" }}>{errors.name}</Text>
            )}
            <Input
              placeholder="Nome"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <Input
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <Input
              placeholder="Senha"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
            )}
            <Input
              placeholder="Confirmar senha"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              secureTextEntry
            />
            <Button onPress={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Enviado..." : "Cadastrar"}
            </Button>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpForm;
