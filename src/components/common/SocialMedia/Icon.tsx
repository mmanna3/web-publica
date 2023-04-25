type IconProps = {
  src: string;
};

export const Icon = ({ src }: IconProps) => {
  return <img className='max-w-[30px]' src={src} alt='instagram' />;
};
