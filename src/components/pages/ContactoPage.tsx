import IMG_CONTACTO_TITLE from '../../assets/images/titles/contacto-title.png';
import SEGUINOS_CELU from '../../assets/images/mobile/seguinos-celu.png';

interface Props {
  children: React.ReactNode;
}

const Text = ({ children }: Props) => {
  return <div className='mb-10 xs:text-[9px] sm:text-xl lg:text-2xl text-start'>{children}</div>;
};

const Title = ({ children }: Props) => {
  return <h2 className='my-4 text-title-darkGreen md:text-xl lg:text-2xl '>{children}</h2>;
};

const Content = ({ children }: Props) => {
  return <p className='mb-3'>{children}</p>;
};

export const ContactoPage = () => {
  return (
    <>
      <img className='m-auto' src={IMG_CONTACTO_TITLE} alt='Contacto' />
      <div className='mx-auto my-12 text-center w-[80%]'>
        <Text>
          <Title>Horarios de atención</Title>
          <Content>Lunes a jueves de 17:30 hs a 20:30 hs</Content>
          <Content>Viernes de 17:00 hs a 19:30 hs</Content>
        </Text>
        <Text>
          <Title>Dirección</Title>
          <Content>Juan B. Justo 550, Haedo. Bs. As</Content>
          <Content>CP: 1706</Content>
        </Text>
        <Text>
          <Title>Teléfono</Title>
          <Content>21958389</Content>
        </Text>
        <Text>
          <Title>E-mail</Title>
          <Content>edefiargentina@hotmail.com</Content>
        </Text>
      </div>
      <img className='m-auto w-40 md:w-52 lg:w-64' src={SEGUINOS_CELU} alt='Seguinos' />
    </>
  );
};
