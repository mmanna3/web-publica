import { useParams } from 'react-router-dom';
import { useFetch } from '../../common/hooks/useFetch';
import { CategoriaConPartidos } from '../../../interfaces/api';
import { Spinner } from '../../common/Spinner';

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
          <div key={cat.categoria}>{cat.categoria}</div>
        ))}
      </div>
    </>
  );
};
