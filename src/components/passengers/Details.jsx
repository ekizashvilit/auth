const Details = ({ text, title }) => {
  return (
    <div className="flex flex-col gap-[13px] text-xl custom-font">
      <span className="font-bold text-base">{title}</span>
      {text}
    </div>
  );
};
export default Details;
