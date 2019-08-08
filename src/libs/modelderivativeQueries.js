import axios from "axios";

export const translate = objectName => {
  return axios
    .post(
      "http://localhost:3001/api/forge/modelderivative/translate",
      {
        objectName
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(res => console.log(res));
};
