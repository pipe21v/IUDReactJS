import React, { useState, useEffect } from 'react';
import { getEstadosEquipos } from '../../services/estadoService';
import { EstadoCard } from './EstadoCard';



export const EstadoView = () => {

  const [ estados, setEstados] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarEstados = async () => {
    try{
      const { data } = await getEstadosEquipos();
      console.log(data);
      setEstados(data);
    }catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    listarEstados();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          estados.map((estado) => {
            return  <EstadoCard key={estado._id} estado={ estado }/>
          })
        }
        </div>
        
    </div>
  )
}
