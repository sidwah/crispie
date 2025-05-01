// src/components/ui/NavLink.jsx
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative font-sans text-lg transition-colors hover:text-primary ${
        isActive
          ? 'text-darkText after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-primary'
          : 'text-darkText/80'
      }`}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavLink;