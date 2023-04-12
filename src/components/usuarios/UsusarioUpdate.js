import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUsuarioPorId, editUsuario } from '../../services/usuarioService'
import Swal from 'sweetalert2';

export const UsuarioUpdate = () => {

    const { usuarioId  = '' } = useParams();
    const [usuario, setUsuario ] = useState({});
    const [ valoresForm, setValoresForm] = useState ([]);
    const { nombre = '',  email = '', estado= '' } = valoresForm;

    const getUsuario = async () => {
        try{
            const { data } = await getUsuarioPorId(usuarioId);
            console.log(data);
            setUsuario(data);
        }catch (error) {
            console.log(error);
        }
    }

    const handleOnChange = ({ target}) => {
        const {name, value} = target;
        setValoresForm({...setValoresForm, [name]: value});
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            nombre,
            email, 
            estado
        }

        console.log(usuario);

        try{
            Swal.fire({
                allowOutsideClick: false, 
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await editUsuario(usuarioId, usuario);
            console.log (data);
            Swal.close();
        }catch (error){
            console.log(error);
            Swal.close();
        }
    }

    useEffect(() => {
        getUsuario();
    },[ usuarioId ]);

    useEffect(() => {
            setValoresForm({
                nombre: usuario.nombre,
                email: usuario.email,
                estado: usuario.estado
        });
        
    }, [ usuario ]);

  return (
    <div className='container-fluid mt-3 mb-2'>
        <div className='card'>
            <div className='card-header'>
                <h5 className='card-title'>Usuarios</h5>
            </div>
                    <div className='col-md-7'>
            <form onSubmit={(e) => handleOnSubmit(e)} >
                <div className='row'>
                    <div className='col'>
                       <div class="mb-3">
                         <label className="form-label">Nombre</label>
                            <input type="text" name='nombre' required minLength={3} value={nombre} 
                            onChange={(e) => handleOnChange (e)} className="form-control" />
                        </div>
                    </div>
                    <div className='col'>
                       <div class="mb-3">
                         <label className="form-label">Email</label>
                            <input type="text" name='email' required minLength={3} value={email} 
                            onChange={(e) => handleOnChange (e)} className="form-control" />
                        </div>
                    </div>
                    <div className='col'>
                       <div class="mb-3">
                         <label className="form-label">Estado</label>
                            <input type="text" name='estado' required minLength={3} value={estado} 
                            onChange={(e) => handleOnChange (e)} className="form-control" />
                        </div>
                    </div>
                    </div>
                    <div className='row'> 
                        <div className='col'>
                            <button className='btn btn-primary'>Guardar</button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
</div>
  )
}