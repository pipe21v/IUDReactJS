import { axiosInstance } from '../helpers/axios-config';

const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const crearEstado = (data) => {
    return axiosInstance.post('estado.equipo',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const editEstado = (estadoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const getEstadoPorId = (estadoId) => {
    return axiosInstance.get(`estado-equipo/${estadoId}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });

}


export {
    getEstadosEquipos, crearEstado, getEstadoPorId, editEstado
}