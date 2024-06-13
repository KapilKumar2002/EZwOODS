const RoundButton = (props) => {
  const { onClick, child } = props;
  return (
    <div
      onClick={onClick}
      className="rounded-full p-3 shadow-sm border w-12 h-12 flex justify-center items-center bg-primaryColor"
    >
      {child}
    </div>
  );
};
export default RoundButton;
