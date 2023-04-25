type LogoProps = {
  src: string
}
export const Logo = ({src}: LogoProps) => {
  return <img className='max-w-[40px]' src={src} alt='edefi-logo' />
}
