import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

const largura = Dimensions.get('screen').width;

const App = () => {
  return (
    <ScrollView>
      <Text>Matheus Nunes</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={estilo.imagem}
        ></Image>
      <Text>Luanne Sales</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={estilo.imagem}
      ></Image>
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
