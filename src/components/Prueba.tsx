import { useMatch, useNavigation, useParams } from 'react-router-dom';

export const Prueba = () => {
  const { parametro } = useParams();
  const navigation = useNavigation();
  const match = useMatch('/prueba/parametro');
  console.log(match?.pathname);

  // console.log(navigation.state);

  return <div>Prueba</div>;
};
