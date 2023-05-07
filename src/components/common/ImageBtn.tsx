import { Link } from 'react-router-dom';

type myButtonProps = {
  img: string;
  alt: string;
  url: string;
};
export const ImageBtn = ({ img, alt, url }: myButtonProps) => {
  return (
    <Link to={url}>
      <img src={img} alt={alt} className='w-52 md:w-72 lg:w-80' />
    </Link>
  );
};
