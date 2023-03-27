import { useNavigation, useParams } from 'react-router-dom';


export default function Prueba() {
  const { pruebaId } = useParams();
  const navigation = useNavigation();
  console.log(navigation.state);

  return <div>Prueba{pruebaId}</div>;
}
