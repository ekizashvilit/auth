const PassengersBtn = ({ icon, text }) => {
  return (
    <span className="flex items-center gap-2 font-medium cursor-pointer">
      {icon}
      {text}
    </span>
  );
};

export default PassengersBtn;
