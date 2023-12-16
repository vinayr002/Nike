const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center  rounded-full px-7 py-4 gap-2 text-lg leading-none font-montserrat border 
    ${
      backgroundColor
        ? `${backgroundColor}${borderColor}${textColor}`
        : "bg-coral-red text-white border-coral-red"
    } ${fullWidth && "w-full"}
     `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arraw right icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
