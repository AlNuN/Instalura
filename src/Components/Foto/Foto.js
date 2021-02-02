import React, { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import estilo from './estilo';

const ImgLike = (curtiu) =>
  curtiu
    ? require('../../../res/img/s2-checked.png')
    : require('../../../res/img/s2.png');

const Foto = ({ urlFoto, descricao, qntLikes }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qntLikes);

  const curtirFoto = () => {
    let qnt = likes;
    curtiu ? qnt-- : qnt++;
    setLikes(qnt);
    setCurtiu(!curtiu);
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
          onPress={curtirFoto}
        >
          <Image
            source={ImgLike(curtiu)} 
            style={estilo.like}
          />
        </TouchableOpacity>
        <Text>curtidas {likes}</Text>
      </View>
    </>
  );
};

export default Foto;
