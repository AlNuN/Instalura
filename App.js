import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';

const largura = Dimensions.get('screen').width;

const informacoes = [
  { usuario: 'Matheus' },
  { usuario: 'Luanne' },
];

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        renderItem={({ item }) =>
          <>
            <Text>{item.usuario}</Text>
            <Image
              source={require('./res/img/alura.jpg')}
              style={estilo.imagem}
            />
          </>
        }
      />
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
});

export default App;
