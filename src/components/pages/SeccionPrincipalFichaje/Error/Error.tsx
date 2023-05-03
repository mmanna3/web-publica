import estilos from './Error.module.css';
// import bootstrap from "GlobalStyle/bootstrap.min.css";

const Error = ({ errors, name, nombre }) => {
  return (
    <>
      {errors[name] && errors[name].type === 'required' && (
        <div className=''>
          <div className={`text-white ${estilos.alertaValidacionEquipo}`}>
            ¡Ups! Te olvidaste tu {nombre}.
          </div>
        </div>
      )}

      {errors[name] && errors[name].type !== 'required' && (
        <div className=''>
          <div className={`text-white ${estilos.alertaValidacionEquipo}`}>
            {errors[name].message}
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
