import { axiosInstance } from '../helpers/axios-config';

const getMarcas = () => {
    return axiosInstance.get('marca',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const crearMarca = (data) => {
    return axiosInstance.post('marca',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const editMarca = (marcaId, data) => {
    return axiosInstance.put(`marca/${marcaId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const getMarcaPorId = (marcaId) => {
    return axiosInstance.get(`marca/${marcaId}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

export {
    getMarcas, crearMarca, editMarca, getMarcaPorId
}