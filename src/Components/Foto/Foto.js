import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { curtirFoto, imgLike } from '../../api/curtidas';
import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qntLikes }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qntLikes);

  const clicouCurtir = () => {
    const [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes);
    setLikes(qnt);
    setCurtiu(novoEstCurtiu);
  };

  return (
    <>
      <Image
        source={{ uri: urlFoto }}
        style={estilo.imagem}
      />
      <Text>{descricao}</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity
          onPress={clicouCurtir}
        >
          <Image
            source={imgLike(curtiu)} 
            style={estilo.like}
          />
        </TouchableOpacity>
        <Text>curtidas {likes}</Text>
      </View>
    </>
  );
};

export default Foto;
