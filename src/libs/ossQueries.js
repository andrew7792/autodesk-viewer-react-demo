import axios from "axios";

export const getBuckets = () => {
    return axios
        .get("http://localhost:3001/api/forge/oss/buckets", {
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
            return res.data;
        });
};

export const createBucket = bucketKey => {
    return axios
        .post("http://localhost:3001/api/forge/oss/buckets",
         {
             bucketKey
            },
            {
                headers: { "Content-Type": "application/json" },
            }
            )
        .then(()=> console.log('create success'));
};

export const getItems = id => {
  return axios
    .get(`http://localhost:3001/api/forge/oss/items?id=${id}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};

export const uploadFile = data => {
  return axios
    .post("http://localhost:3001/api/forge/oss/objects", data)
    .then(res => {
      console.log(res);
    });
};
