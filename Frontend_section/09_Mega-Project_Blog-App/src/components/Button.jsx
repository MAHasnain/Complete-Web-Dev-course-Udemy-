const Button = ({
  children,
  type = "button",
  textColor = "text-white",
  bgColor = "bg-blue-600",
  className = "",
  ...props
}) => {
  return <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}
  >{children}</button>;
};

export default Button;
