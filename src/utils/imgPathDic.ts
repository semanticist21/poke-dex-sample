const getImgPathDic = () => {
  const suffix = ".png";
  let map = new Map<number, string>();

  // 1~1010.png
  // 10001~10263.png
  [...Array.from(Array(1010).keys())].forEach((n) =>
    map.set(n + 1, `/asset/imgs/${n + 1}${suffix}`)
  );
  [...Array.from(Array(263).keys())].forEach((n) =>
    map.set(n + 10001, `/asset/imgs/${n + 10001}${suffix}`)
  );

  return map;
};

export default getImgPathDic;
