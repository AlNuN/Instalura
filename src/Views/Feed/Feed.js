import React, { useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  FlatList,
  View,
} from 'react-native';
import lerFotos from '../../api/feed';
import { Cabecalho } from '../../Components/Cabecalho';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import { curtirFoto, imgLike } from '../../api/curtidas';
import adicionarComentario from '../../api/comentario';

const Feed = ({ navigation }) => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <View>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
              imgLike={imgLike}
              curtirFoto={curtirFoto}
            />
            <Comentarios
              comentarios={item.comentarios}
              adicionarComentario={adicionarComentario}
              nomeUsuario={navigation.getParam('nome')}
            />
          </>
        )}
      />
    </View>
  );
};

Feed.navigationOptions = ({ navigation }) => {
  const opcoes = {
    title: navigation.getParam('nome'),
  };
  return opcoes;
};

export default Feed;
