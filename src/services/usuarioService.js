import { axiosInstance } from '../helpers/axios-config';

const getUsuarios = () => {
    return axiosInstance.get('usuario',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const crearUsuario = (data) => {
    return axiosInstance.post('usuario',{
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const editUsuario = (usuarioId, data) => {
    return axiosInstance.put(`tipo-equipo/${usuarioId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });

}

const getUsuarioPorId = (usuarioId) => {
    return axiosInstance.get(`usuario/${usuarioId}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });

}


export {
    getUsuarios, editUsuario, crearUsuario, getUsuarioPorId
}