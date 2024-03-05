import { useParams } from 'react-router-dom';
import { useFetch } from '../../common/hooks/useFetch';
import { CategoriaConPartidos } from '../../../interfaces/api';
import { Spinner } from '../../common/Spinner';
import { PartidoEliminacionDirecta } from './components/PartidoEliminacionDirecta';

export const LlaveEliminatoria = () => {
  const { torneoId } = useParams();
  const { data, isFetching } = useFetch<CategoriaConPartidos>(`llaveEliminatoria?torneoId=${torneoId}`);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        {data.map((cat) => (
          <div key={cat.categoria}>
            <p className='text-center text-lg'>{cat.categoria}</p>
            

            <div className='grid grid-flow-col font-arial items-center gap-4'>
              {cat.partidos.map((fase) => (
                <div key={fase.fase}>
                  <div className='mt-3'>
                    <p className='ml-20 font-bold'>{fase.fase}</p>
                    {fase.partidos.map((partido) => (
                      <PartidoEliminacionDirecta key={partido.orden} partido={partido}/>                    
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
