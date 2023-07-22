interface IGetDataFromLocalStorage {
  key: string;
}

export function getDataFromLocalStorage({ key }: IGetDataFromLocalStorage) {
  try {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || "");
    }
  } catch (error) {
    return null;
  }
  return null;
}
