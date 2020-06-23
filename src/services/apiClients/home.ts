import { HomeType } from "HomeType";

export function fetchHome(): Promise<HomeType> {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8081/api/home")
      .then(async (res) => {
        const data = await res.json();
        resolve(data);
      })
      .catch((data) => reject(data));
  });
}
