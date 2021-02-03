import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import estilo from './estilo';

const Comentarios = ({ comentarios }) => {
  const [estComentarios, setComentarios] = useState(comentarios);

  const adicionarComentario = () => {
    campoInput.clear();

    const novoComentario = {
      date: Date.now(),
      text: conteudoCampoInput,
      userName: 'Matheus',
    };

    setComentarios([...estComentarios, novoComentario]);
  };

  let campoInput;
  let conteudoCampoInput = '';
  return (
    <>
      <FlatList
        data={estComentarios}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={estilo.naMesmaLinha}>
            <Text>{item.userName} </Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={estilo.naMesmaLinha}>
        <TextInput
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(texto) => (conteudoCampoInput = texto)}
          placeholder="Deixe seu comentário..."
          style={estilo.fill}
        />
        <TouchableOpacity onPress={adicionarComentario}>
          <Image
            source={require('../../../res/img/send.png')}
            style={estilo.imgSend}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Comentarios;
