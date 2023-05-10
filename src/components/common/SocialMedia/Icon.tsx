type IconProps = {
  src: string;
  url: string;
};

export const Icon = ({ src, url }: IconProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img className='w-10' src={src} alt='instagram' />
    </a>
  );
};
