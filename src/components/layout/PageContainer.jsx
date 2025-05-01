// src/components/layout/PageContainer.jsx
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => {
  return (
    <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;