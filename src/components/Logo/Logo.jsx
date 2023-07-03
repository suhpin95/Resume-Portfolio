import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  const name = "Suhas Pindiproli";
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <span>
          {name}
        </span>
      </Link>
    </div>
  );
};

export default Logo;
