import React from 'react'
import { Link } from 'react-router-dom'

export const UsuarioCard = (props) => {

  const { usuario } = props;

  return (
    <table className="table table-bordered table-sm table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha Creación</th>
      <th scope="col">Fecha Actualización</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row"></th>
      <td>{`${usuario.nombre}`}</td>
      <td>{`${usuario.email}`}</td>
      <td>{`${usuario.estado}`}</td>
      <td>{`${usuario.fechaCreacion}`}</td>
      <td>{`${usuario.fechaActualizacion}`}</td>
      <Link to={`usuarios/edit/${usuario._id}`}>
            <a class="btn btn-" href="#" role="button">Editar</a>
      </Link>
    </tr>
  </tbody>
</table>
  )
}