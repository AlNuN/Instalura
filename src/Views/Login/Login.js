import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import estilo from './estilo';

const Login = () => {
  return (
    <>
      <View style={estilo.container}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuario"
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <Button title="Entrar" />
    </>
  );
};

export default Login;
