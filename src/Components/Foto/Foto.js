import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Image,
  Text,
} from 'react-native';
import estilo from './estilo';

const Foto = () => {
  return (
    <>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={estilo.imagem}
      />
      <Text>Descrição da imagem</Text>
    </>
  );
};

export default Foto;
