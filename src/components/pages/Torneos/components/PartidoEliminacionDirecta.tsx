import { PartidoEliminacionDirecta as PartidoEliminacionDirectaType } from '../../../../interfaces/api';
import { BASE_URL } from '../../../../globalConst';

interface IProps {
    partido: PartidoEliminacionDirectaType;
}

export const PartidoEliminacionDirecta = (props: IProps) => {
    const partido = props.partido;

  return (
    <>
      <div className='flex flex-col items-center my-2'>
        <EquipoConResultados 
            escudo={partido.escudoLocal}
            nombre={partido.local}
            goles={partido.golesLocal}
            penales={partido.penalesLocal}
        />
        <EquipoConResultados 
            escudo={partido.escudoVisitante}
            nombre={partido.visitante}
            goles={partido.golesVisitante}
            penales={partido.penalesVisitante}
        />        
      </div>
    </>
  );
};

interface IEquipoConResultadosProps {
    escudo: string;
    nombre: string;
    goles: string;
    penales: string;
}

const EquipoConResultados = (props: IEquipoConResultadosProps) => {

  return (
    <>
      <div className='flex flex-col items-center gap-10 text-center my-[0.5px]'>
        <div className='flex'>
            {props.escudo != null ? <img className='mx-auto w-[32px] h-8 border-solid border-black border-t border-l border-b' src={`${BASE_URL}${props.escudo}`} alt='escudo' />:
            <div className='mx-auto w-[32px] bg-white h-8 border-solid border-black border-t border-l border-b'></div>
            }
            
            <div className='px-2 p-1 bg-white border-b border-t border-solid border-black h-8 w-36'>{props.nombre}</div>
            <div className='px-2 p-1 bg-white border border-solid border-black h-8 w-8'>{props.goles}</div>
            {props.penales !== '' ? 
                <div className='p-1 bg-white border-solid border-t border-r border-b border-black h-8 w-8'>({props.penales})</div> :
                <div className='p-1 h-8 w-8'></div>}            
        </div>
        
        
      </div>
    </>
  );
};