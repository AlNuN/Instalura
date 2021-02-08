import { Platform } from 'react-native';

const efetuarLogin = async (usuario, senha) => {
  let ip = '10.0.2.2';
  if (Platform.Version === 30) {
    ip = '192.168.1.128';
  }
  const cabecalhoHTTP = {
    method: 'POST',
    body: JSON.stringify({
      userName: usuario,
      password: senha,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
  const resposta = await fetch(`http://${ip}:3030/users/login`, cabecalhoHTTP);

  if (resposta.ok) {
    // utilizar token jwt
  } else {
    throw new Error('Não foi possível logar');
  }
};

export default efetuarLogin;
