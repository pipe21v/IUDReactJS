import { axiosInstance } from '../helpers/axios-config';

const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const crearTipo = (data) => {
    return axiosInstance.post('tipo-equipo',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const editTipo = (tipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const getTipoPorId = (tipoId) => {
    return axiosInstance.get(`tipo-equipo/${tipoId}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });

}


export {
    getTiposEquipos, editTipo, crearTipo, getTipoPorId
}