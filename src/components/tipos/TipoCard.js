import React from 'react'
import { Link } from 'react-router-dom'

export const TipoCard = (props) => {

  const { tipo } = props;

  return (
    <table className="table table-bordered table-sm table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha Creación</th>
      <th scope="col">Fecha Actualización</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row"></th>
      <td>{`${tipo.nombre}`}</td>
      <td>{`${tipo.estado}`}</td>
      <td>{`${tipo.fechaCreacion}`}</td>
      <td>{`${tipo.fechaActualizacion}`}</td>
      <Link to={`tipos/edit/${tipo._id}`}>
            <a class="btn btn-" href="#" role="button">Editar</a>
      </Link>
    </tr>
  </tbody>
</table>
  )
}