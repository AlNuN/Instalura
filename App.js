import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  FlatList,
} from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';

const informacoes = [
  { id: 1, usuario: 'Matheus' },
  { id: 2, usuario: 'Luanne' },
];

const App = () => {
  return (
    <FlatList
      data={informacoes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <>
          <Cabecalho nomeUsuario={item.usuario} />
          <Foto />
        </>
      )}
    />
  );
};

export default App;
