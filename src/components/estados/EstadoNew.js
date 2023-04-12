import React, {useState, useEffect} from 'react';
import {getEstadosEquipos} from '../../services/estadoService';
import { crearEstado } from '../../services/estadoService';
import Swal from 'sweetalert2';

export const MarcaNew = ({ handleOpenModal }) => {

    const [estados, setEstados] = useState([]);
    const [ valoresForm, setValoresForm] = useState ([]);
    const { nombre = '', estado = '' } = valoresForm;

    
    const listarEstados = async () => {
        try {
            const {data} = await getEstadosEquipos();
            setEstados(data);
        }catch (error) {
            console.log(error);
        }
    }    
    useEffect(  () => {
        listarEstados();
    }, [] );

   

    const handleOnChange = ({ target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm, [name]: value});
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const estado = {
            nombre,estado
        }
        console.log(estado);
        try{
            Swal.fire({
                allowOutsideClick: false, 
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearEstado(estado);
            console.log (data);
            Swal.close();
            handleOpenModal();
            listarEstados();
        }catch (error){
            console.log(error);
            Swal.close();
        }
    }

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Nuevo Estado</h3>
                        <i className='fa-solid fa-xmark' onClick={ handleOpenModal }></i>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <hr />
                </div>
            </div>
            <form onSubmit={(e) => handleOnSubmit(e)} >
                <div className='row'>
                    <div className='col'>
                       <div class="mb-3">
                         <label className="form-label">nombre</label>
                         <input type="text" name='nombre' required minLength={3} value={nombre} onChange={(e) => handleOnChange (e)} className="form-control" />
                        </div>
                    </div>
                   
                    <div className='col'>
                       <div className="mb-3">
                         <label className="form-label">Estado</label>
                         <input type="text" name='Estado'  required minLength={3} value={estado} onChange={(e) => handleOnChange (e)} className='form-control'/>
                            
                            
        
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
  )
}