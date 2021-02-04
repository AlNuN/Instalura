import { Platform } from 'react-native';

const lerFotos = async (callback) => {
  let ip = '10.0.2.2';
  if (Platform.Version === 30) {
    ip = '192.168.1.128';
  }
  const fotosHTTP = await fetch(`http://${ip}:3030/feed`);
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson);
};

export default lerFotos;
