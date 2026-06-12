import api from "../services/api";

export const getMotos = async () => {
    const response = await api.get("/motos");
    return response.data;
}

export const createMotos = async (data) => {
    const response = await api.post("/motos", data);
    return response.data;
}

export const updateMotos = async (id, data) => {
    const response = await api.put(`/motos/${id}`, data);
    return response.data;
}

export const deleteMotos = async (id) => {
    const response = await api.delete(`/motos/${id}`);
    return response.data;
}
export const getVeiculos = async () => {
    const response = await api.get("/veiculos");
    return response.data;
}

export const createVeiculos = async (data) => {
    const response = await api.post("/veiculos", data);
    return response.data;
}

export const updateVeiculos = async (id, data) => {
    const response = await api.put(`/veiculos/${id}`, data);
    return response.data;
}

export const deleteVeiculos = async (id) => {
    const response = await api.delete(`/veiculos/${id}`);
    return response.data;
}
