import api from "./axiosInstance";

export const getAllMasterDictionaries = async () => {
  const res = await api.get(
    "/MasterDictionary/GetAllMasterDictionaries"
  );
  return res.data;
};