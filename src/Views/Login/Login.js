import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import efetuarLogin from '../../api/login';
import estilo from './estilo';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');


  const tentarLogar = async () => {
    try {
      await efetuarLogin(usuario, senha);
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

export default Login;
