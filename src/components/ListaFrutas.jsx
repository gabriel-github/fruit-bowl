import React from "react";
import Fruta from "./Fruta";
import AdicionaFruta from "./AdiconaFruta";
import { useSelector } from 'react-redux'

function ListaFrutas() {
  
const frutas = useSelector( state => state.frutaReducers.frutas)

  return (
    <>
      <AdicionaFruta />

      <h1>Lista de Frutas</h1>

      {frutas.map((fruta) => (
        <Fruta key={fruta.id} fruta={fruta} />
      ))}
    </>
  );
}

export default ListaFrutas;
