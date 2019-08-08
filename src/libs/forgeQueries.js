import axios from "axios";

export const getStatus = (id, token) => {
  return axios
    .get(
      `https://developer.api.autodesk.com/modelderivative/v2/designdata/${id}/manifest`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    .then(res => {
      return res.data;
    });
};
