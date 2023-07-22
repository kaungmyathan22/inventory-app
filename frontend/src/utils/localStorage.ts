interface IGetDataFromLocalStorage {
  key: string;
}

export function getDataFromLocalStorage({ key }: IGetDataFromLocalStorage) {
  return localStorage.getItem(key);
}
