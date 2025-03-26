import clsx from "clsx";

const Button = ({ children, type, className, ...rest }) => {
  const classes = clsx(
    `px-3 py-2 rounded cursor-pointer ${className}`,
    type === "filledPrimary" && "bg-blue-500 text-white",
    type === "danger" && "bg-red-400 text-white",
    type === "success" && "bg-green-500 text-white"
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
