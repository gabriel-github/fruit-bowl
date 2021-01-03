import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/frutas.action";
import { Formik, Field } from "formik";
import * as yup from "yup";

function AdicionaFruta() {
  const dispatch = useDispatch();

  function dispatchValues(values) {
    const fruta = {
      id: new Date(),
      nome: values.nome,
      quantidade: values.quantidade,
    };

    dispatch(actions.adicionar(fruta));
  }

  const schema = yup.object({
    nome: yup
      .string()
      .required("O nome é obrigatório"),

    quantidade: yup
      .number()
      .required("A quantidade é obrigatória")
      .min(1, "no minimo 1 unidade")
      .max(50, "maximo 50 unidades"),
  });

  return (
    <>
      <Formik
        initialValues={{ nome: "", quantidade: "" }}
        onSubmit={(values) => dispatchValues(values)}
        validationSchema={schema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
            <div>
              <Field
                type="text"
                value={props.values.nome}
                placeholder="Nome"
                name="nome"
                required
              />

              {props.errors.nome && props.touched.nome ? (
                <p className="invalid-feedback">{props.errors.nome}</p>
              ) : null}
            </div>

            <div>
              <Field
                type="text"
                value={props.values.quantidade}
                placeholder="Quantidade"
                name="quantidade"
                required
              />

              {props.errors.quantidade && props.touched.quantidade ? (
                <p className="invalid-feedback">{props.errors.quantidade}</p>
              ) : null}
            </div>

            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default AdicionaFruta;
