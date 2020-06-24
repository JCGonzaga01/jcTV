import { CategoryListType } from "HomeType";

export function fetchFree(): Promise<CategoryListType> {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8081/api/free")
      .then(async (res) => {
        const data = await res.json();
        resolve(data);
      })
      .catch((data) => reject(data));
  });
}
