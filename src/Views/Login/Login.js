import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import efetuarLogin from '../../api/login';
import estilo from './estilo';

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const tentarLogar = async () => {
    try {
      const token = await efetuarLogin(usuario, senha);
      await AsyncStorage.setItem('instalura_token', token);
      navigation.replace('Feed', { nome: usuario });
    } catch (e) {
      setMensagemErro(e.message);
    }
  };

  return (
    <>
      <View style={estilo.container}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuario"
          onChangeText={(texto) => setUsuario(texto)}
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(texto) => setSenha(texto)}
        />
        <Text>{mensagemErro}</Text>
      </View>
      <View style={estilo.botaoView}>
        <Button
          title="Entrar" 
          onPress={tentarLogar}
        />
      </View>
    </>
  );
};

Login.navigationOptions = () => {
  const opcoes = {
    title: 'Login',
  };
  return opcoes;
};

export default Login;
