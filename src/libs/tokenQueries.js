import axios from "axios";

export const getForgeToken = callback => {
  return axios
    .get("http://localhost:3001/api/forge/oauth/token", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      const { data } = res;
      callback(data.access_token);
    });
};
