import api from "./api";

export const uploadImage = async (file: File) => {
  const form = new FormData();
  form.append("file", file);

  const res = await api.post("/upload", form);
  return res.data.url;
};
