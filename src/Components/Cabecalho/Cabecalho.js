import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Text,
  Image,
  View,
} from 'react-native';
import estilo from './estilo';

const Cabecalho = ({ nomeUsuario, urlImage }) => {
  return (
    <View style={estilo.cabecalho}>
      <Image
        source={{ uri: urlImage }}
        style={estilo.fotoUsuario}
      />
      <Text>{nomeUsuario}</Text>
    </View>
  );
};

export default Cabecalho;
