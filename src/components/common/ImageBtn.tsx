import { Link } from 'react-router-dom';

type myButtonProps = {
  img: string;
  alt: string;
  url: string;
  style?: string;
};
export const ImageBtn = ({ img, alt, url, style }: myButtonProps) => {
  const isExternal = /^https?:\/\//.test(url);
  if (isExternal) {
    return (
      <a href={url}>
        <img src={img} alt={alt} className={style} />
      </a>
    );
  }
  return (
    <Link to={url}>
      <img src={img} alt={alt} className={style} />
    </Link>
  );
};
