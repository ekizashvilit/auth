import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.103.161:5000",
});

api.interceptors.request.use((req) => {
  req.headers.authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJla2EuZHZhbGkuMkBpbGlhdW5pLmVkdS5nZSIsImN1c3RvbWVyX2lkIjoxMDA4LCJ0eXBlIjoicGh5c2ljYWwiLCJpYXQiOjE2OTU5NzM0NzV9.Ol6X6Xp7sIEzt8rp-KZoF_B1OcaBPy5H9k86BYFvmYY";
  return req;
});

export default api;
