import React from 'react';
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action'

function Fruta({fruta}) {

    const dispatch = useDispatch()

  return (
      <div className="fruta">
      <ul>
          <li>Fruta: {fruta.nome}</li>
          <li>quantidade: {fruta.quantidade}</li>
      </ul>

      <button onClick={() => dispatch(actions.remover(fruta))}>&times;</button>
      </div>
  )
}

export default Fruta;