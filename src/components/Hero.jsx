import { Drawer } from "antd";
import { useGlobalContext } from "../context";
import { ReactComponent as GrLogo } from "../assets/svg/gr-logo.svg";
import Socials from "./Socials";
import LoginForm from "./LoginForm";

const Hero = () => {
  const { placement, onClose, open } = useGlobalContext();

  return (
    <>
      <Drawer
        title={<GrLogo />}
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        className="media"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold">
            ჯერ არ ხარ დარეგისტრირებული?
          </span>
          <h4 className="text-base text-grRed font-bold cursor-pointer">
            რეგისტრაცია
          </h4>
        </div>
        <Socials />
        <LoginForm />
      </Drawer>
    </>
  );
};
export default Hero;
