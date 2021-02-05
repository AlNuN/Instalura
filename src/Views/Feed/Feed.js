import React, { useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  FlatList,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import lerFotos from '../../api/feed';
import { Cabecalho } from '../../Components/Cabecalho';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import { curtirFoto, imgLike } from '../../api/curtidas';
import adicionarComentario from '../../api/comentario';

const Feed = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  let altura = 0;
  if (Platform.OS === 'ios') {
    altura = 35;
  }

  return (
    <View style={{ marginTop: altura }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
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
            />
          </>
        )}
      />
    </View>
  );
};

export default Feed;