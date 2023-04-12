import React, { useState, useEffect } from 'react';
import { getMarcas } from '../../services/marcaService';
import { MarcaCard } from './MarcaCard';
import { MarcaNew } from './MarcaNew';

export const MarcaView = () => {

  const [ marcas, setMarcas] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarMarcas = async () => {
    try{
      const { data } = await getMarcas();
      console.log(data);
      setMarcas(data);
    }catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    listarMarcas();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          marcas.map((marca) => {
            return  <MarcaCard key={marca._id} marca={ marca }/>
          })
        }
        </div>
        {
          openModal ? <MarcaNew 
                    handleOpenModal={handleOpenModal}
                    listarMarcas={ listarMarcas } /> : 
          (<button className='btn btn-danger fab' onClick={handleOpenModal}>
             <i className= "fa-solid fa-plus"></i>
           </button>)
        } 
    </div>
  )
}
