import { Link } from "react-router-dom";

const RoundButton = (props) => {
  const { onClick, icon, to } = props;
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-full p-3 shadow-sm border w-12 h-12 flex justify-center items-center bg-disabledColor duration-500 hover:bg-primaryColor text-2xl"
    >
      {icon}
    </Link>
  );
};
export default RoundButton;
