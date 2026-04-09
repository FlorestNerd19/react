import paisesApi from "./paises.api";

const paisService = {
  getPaisByRegion: async (region) => {
    const response = await paisesApi.get(`region/${region}`);
    return response.data;
  },
  getPaisByName: async (name) => {
    const response = await paisesApi.get(`name/${name}`);
    return response.data;
  },
  getPaisCode: async (code) => {
    const response = await paisesApi.get(`alpha/${code}`);
    return response.data;
  },
  listPaiss: async (limit = 20, offset) => {
    const response = await paisesApi.get(
      `Pais?limit=${limit}&offset=${offset}`,
    );
    return response.data;
  },
};

export default paisService;
