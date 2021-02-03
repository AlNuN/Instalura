import React, { useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  FlatList,
} from 'react-native';
import lerFotos from './src/api/feed';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import { Comentarios } from './src/Components/Comentarios';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
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
          />
          <Comentarios comentarios={item.comentarios} />
        </>
      )}
    />
  );
};

export default App;
