// src/components/ui/Logo.jsx
import PropTypes from "prop-types";

const Logo = ({ size = "default" }) => {
  // Determine size class based on prop
  const sizeClass = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-3xl",
  }[size];

  // Determine image size based on prop
  const imgSize = {
    small: "w-6 h-6",
    default: "w-8 h-8",
    large: "w-10 h-10",
  }[size];

  return (
    <div className="flex items-center">
      <span
        className={`text-primary font-serif ${sizeClass} font-semibold mr-2`}
      >
        Crispie
      </span>
      {/* Using the actual logo image from public folder */}
      <img
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt="Crispie Cookie Logo"
        className={imgSize}
      />
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
};

export default Logo;
