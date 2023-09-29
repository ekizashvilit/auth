import { Drawer } from "antd";
import { useGlobalContext } from "../../context";
import { ReactComponent as GrLogo } from "../../assets/svg/gr-logo.svg";
import Socials from "./components/Socials";
import "./styles/AuthDrawer.scss";
import LoginForm from "./components/LoginForm";
const AuthDrawer = () => {
  const { closeRegistration, openRegistration, userData, setUser } =
    useGlobalContext();

  const onFinish = (values) => {
    closeRegistration();

    setUser({
      username: values.username,
      password: values.password,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Drawer
      title={<GrLogo />}
      placement={"bottom"}
      width={500}
      height={448}
      onClose={closeRegistration}
      open={openRegistration}
      maskStyle={{
        opacity: 0,
      }}
      contentWrapperStyle={{
        boxShadow: "none",
      }}
      className="auth-drawer media"
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">ჯერ არ ხარ დარეგისტრირებული?</span>
        <h4 className="text-base text-grRed font-bold cursor-pointer">
          რეგისტრაცია
        </h4>
      </div>
      <Socials />
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </Drawer>
  );
};
export default AuthDrawer;
