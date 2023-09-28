import { ReactComponent as Facebook } from "../../../assets/svg/facebook.svg";
import { ReactComponent as Linkedin } from "../../../assets/svg/linkedin.svg";

const Socials = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">ავტორიზაცია</h2>
      <div className="flex gap-4 justify-center">
        <span className="socials-icons h-14 bg-white flex items-center justify-center rounded-lg">
          <img src="/src/assets/png/google.png" alt="google logo" />
        </span>
        <span className="socials-icons h-14 bg-fb flex items-center justify-center rounded-lg">
          <Facebook />
        </span>
        <span className="socials-icons h-14 bg-ln flex items-center justify-center rounded-lg">
          <Linkedin />
        </span>
      </div>
      <div className="line-container">
        <span className="text-center text-grGrey text-sm">ან</span>
      </div>
    </div>
  );
};

export default Socials;
