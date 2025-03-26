const getStorage = (key, defaultValue) => {
  let stored = localStorage.getItem(key);

  return stored ? JSON.parse(stored) : defaultValue;
};

export default getStorage;
