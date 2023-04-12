import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../services/usuarioService';
import { UsuarioCard } from './UsuarioCard';
import { UsuarioNew } from './UsuarioNew';

export const UsuarioView = () => {

  const [ usuario, setUsuarios] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarUsuarios = async () => {
    try{
      const { data } = await getUsuarios();
      console.log(data);
      setUsuarios(data);
    }catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          usuario.map((usuario) => {
            return  <UsuarioCard key={usuario._id} usuario={ usuario }/>
          })
        }
        </div>
        {
          openModal ? <UsuarioNew 
                    handleOpenModal={handleOpenModal}
                    listarUsuarios={ listarUsuarios } /> : 
          (<button className='btn btn-danger fab' onClick={handleOpenModal}>
             <i className= "fa-solid fa-plus"></i>
           </button>)
        } 
    </div>
  )
}
