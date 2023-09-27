import { Button, Drawer, Radio, Space } from "antd";
import { useGlobalContext } from "../context";
import { ReactComponent as GrLogo } from "../assets/svg/gr-logo.svg";
import Socials from "./Socials";

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
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold">
            ჯერ არ ხარ დარეგისტრირებული?
          </span>
          <h4 className="text-base text-grRed font-bold">რეგისტრაცია</h4>
        </div>
        <Socials />
      </Drawer>
    </>
  );
};
export default Hero;
