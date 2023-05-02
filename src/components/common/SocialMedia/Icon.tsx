type IconProps = {
  src: string;
};

export const Icon = ({ src }: IconProps) => {
  return <img className='w-10' src={src} alt='instagram' />;
};
