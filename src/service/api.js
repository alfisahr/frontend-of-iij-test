import Axios from "axios";

export const apiServer = "http://127.0.0.1:8000/";
export const apiURL = apiServer + "api/";

Axios.interceptors.response.use(null, (error) => {
   const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
   if (!expectedError) {
      console.log("Logging error", error);
      console.log("An unexpected error occured.");
   }

   return Promise.reject(error);
});

const api = {
   get: (endpoint) => Axios.get(apiURL + endpoint),
   post: (endpoint, data) => Axios.post(apiURL + endpoint, data),
   delete: (endpoint, id) => Axios.delete(`${apiURL}${endpoint}/${id}`),
   put: (endpoint, id, data) => Axios.put(`${apiURL}${endpoint}/${id}`, data),
};

export default api;
