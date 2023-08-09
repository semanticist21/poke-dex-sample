const getImgPathDic = () => {
  const suffix = ".png";
  let map = new Map<number, string>();

  // 1~1010.png
  //10001~10263.png
  [...Array(1010).keys()].forEach((n) => map.set(n + 1, `${n + 1}${suffix}`));
  [...Array(263).keys()].forEach((n) => [n + 10001, `${n + 10001}${suffix}}`]);

  return map;
};

export default getImgPathDic;
