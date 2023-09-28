import { Drawer } from "antd";
import { useGlobalContext } from "../../context";
import "./styles/ProfileDrawer.scss";

const ProfileDrawer = () => {
  const { closeProfile, openProfile } = useGlobalContext();
  return (
    <Drawer
      placement={"bottom"}
      width={500}
      height={240}
      onClose={closeProfile}
      open={openProfile}
      maskStyle={{
        opacity: 0,
      }}
      className="profile-drawer media"
    >
      <div>hi</div>
    </Drawer>
  );
};
export default ProfileDrawer;
