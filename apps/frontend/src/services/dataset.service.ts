// const API_URL = "http://127.0.0.1:8000/api/v1";

// export async function uploadDataset(formData: FormData) {
//   const response = await fetch(
//     `${API_URL}/datasets/upload`,
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Upload failed");
//   }

//   return response.json();
// }


import api from "../api/client";

export const DatasetService = {
  upload(formData: FormData) {
    return api.post(
      "/datasets/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  getAll() {
    return api.get("/datasets");
  },

  getById(id: number) {
    return api.get(`/datasets/${id}`);
  },

  delete(id: number) {
    return api.delete(`/datasets/${id}`);
  },
};