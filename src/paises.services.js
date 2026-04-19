import PaisesApi from "./paises.api.js";

const PaisService = {
  getPaises: async (limit = 20, offset) => {
    const response = await PaisesApi.get(
      `all?fields=cca3,name,flags,capital,region,languages,population`,
    );
    return response.data;
  },
  getPaisByRegion: async (region) => {
    const response = await PaisesApi.get(`region/${region}`);
    return response.data;
  },
  getPaisByName: async (name) => {
    const response = await PaisesApi.get(`name/${name}`);
    return response.data;
  },
  getPaisCode: async (code) => {
    const response = await PaisesApi.get(`alpha/${code}`);
    return response.data;
  },
  listPais: async (limit = 20, offset) => {
    const response = await PaisesApi.get(
      `Pais?limit=${limit}&offset=${offset}`,
    );
    return response.data;
  },
};

export default PaisService;
