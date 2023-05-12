import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Noticia } from '../../interfaces/api';

export const NoticiasPage = () => {
  const { data, isFetching } = useFetch<Noticia>('noticias');

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }

  return (
    <>
      <h2 className='my-6 text-center text-3xl font-bold underline'>Noticias</h2>
      <div className='flex flex-col items-stretch gap-4 w-[400px] mx-auto p-4'>
        {data.map(({ id, titulo, subtitulo, fecha }) => (
          <Card key={id} titulo={titulo} subtitulo={subtitulo} fecha={fecha} id={id}></Card>
        ))}
      </div>
    </>
  );
};

const Card = ({ titulo, subtitulo, fecha, id }: Noticia) => {
  return (
    <Link className='bg-slate-100 font-arial text-xs p-4 shadow-lg' to={`${id}`}>
      <div className='flex text-sm gap-2'>
        <p className='text-green-600'>{fecha} |</p>
        <p className='font-bold underline'>{titulo}</p>
      </div>
      <p>{subtitulo}</p>
      <p>...</p>
    </Link>
  );
};

export const NoticiaPage = () => {
  const { noticiaId } = useParams();
  console.log(noticiaId);
  const { data, isFetching } = useFetch<Noticia>(`noticia?id=${noticiaId}`);

  if (isFetching) {
    return <h2 className='text-center text-5xl'>Cargando...⌛</h2>;
  }

  return (
    <>
      <h2 className='my-6 text-center text-3xl font-bold underline'>La Noticia</h2>
      <div className='w-[400px] bg-slate-100 font-arial text-xs mx-auto py-6 px-10 shadow-lg'>
        <div className='flex text-sm gap-2'>
          <p className='text-green-600'>{data.fecha} |</p>
          <p className='font-bold underline'>{data.titulo}</p>
        </div>
        <p>{data.subtitulo}</p>
        <p>{data.cuerpo}</p>
      </div>
    </>
  );
};
