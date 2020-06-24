import { CategoryListType } from "HomeType";

export function fetchCinema(): Promise<CategoryListType> {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8081/api/cinema")
      .then(async (res) => {
        const data = await res.json();
        resolve(data);
      })
      .catch((data) => reject(data));
  });
}
