export const getStore = (key) => {
  try {
    const storeData = localStorage.getItem(key);
    if (!storeData) return undefined;
    return JSON.parse(storeData);
  } catch (error) {
    console.log(error);
  }
};
export const setStore = (key, data) => {
  try {
    const storeSet = JSON.stringify(data);
    return localStorage.setItem(key, storeSet);
  } catch (error) {
    console.log(error);
  }
};
