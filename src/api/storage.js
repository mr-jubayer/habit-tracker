const getStorage = (key, ifNoData) => {
  let data = localStorage.getItem(key);

  if (!data) {
    localStorage.setItem(key, JSON.stringify(ifNoData));
  }

  return JSON.parse(data);
};

export default getStorage;
