import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTipoPorId, editTipo } from '../../services/tipoService'
import Swal from 'sweetalert2';

export const TipoUpdate = () => {

    const { tipoId  = '' } = useParams();
    const [tipo, setTipo ] = useState({});
    const [ valoresForm, setValoresForm] = useState ([]);
    const { nombre = '',  estado } = valoresForm;

    const getTipo = async () => {
        try{
            const { data } = await getTipoPorId(tipoId);
            console.log(data);
            setTipo(data);
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
        const tipo = {
            nombre, 
            estado
        }

        console.log(tipo);

        try{
            Swal.fire({
                allowOutsideClick: false, 
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await editTipo(tipoId, tipo);
            console.log (data);
            Swal.close();
        }catch (error){
            console.log(error);
            Swal.close();
        }
    }

    useEffect(() => {
        getTipo();
    },[ tipoId ]);

    useEffect(() => {
            setValoresForm({
                nombre: tipo.nombre,
                estado: tipo.estado
        });
        
    }, [ tipo ]);

  return (
    <div className='container-fluid mt-3 mb-2'>
        <div className='card'>
            <div className='card-header'>
                <h5 className='card-title'>Tipos</h5>
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