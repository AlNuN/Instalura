const imgLike = (curtiu) =>
  curtiu
    ? require('../../res/img/s2-checked.png')
    : require('../../res/img/s2.png');

const curtirFoto = (curtiu, likes) => {
  let qnt = likes;
  curtiu ? qnt-- : qnt++;
  return [!curtiu, qnt];
};

export { imgLike, curtirFoto };
