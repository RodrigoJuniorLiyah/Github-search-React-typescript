import axios from "axios";

export function getAPIClient(ctx?: any) {
  const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
      Accept: "application/json",
    },
  });

  return api;
}
