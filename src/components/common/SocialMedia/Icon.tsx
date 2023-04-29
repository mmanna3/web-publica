type IconProps = {
  src: string;
};

export const Icon = ({ src }: IconProps) => {
  return <img className='max-w-[35px]' src={src} alt='instagram' />;
};
