import { FC } from 'react';
import { Link } from 'react-router-dom';


type NewNavBarLinkProps = {
  title: string;
  url: string;
};

export const NavBarLink: FC<NewNavBarLinkProps> = ({ title, url }) => {
  return (
    <Link className='text-[6px] ' to={url}>
      <p>{`${title !== 'Fichaje' ? title + ' -' : title}`}</p>
    </Link>
  );
};
