import { Drawer } from "antd";
import { useGlobalContext } from "../../context";
import "./styles/ProfileDrawer.scss";
import { profileItems } from "../../utils";

const ProfileDrawer = () => {
  const { closeProfile, openProfile } = useGlobalContext();
  return (
    <Drawer
      placement={"bottom"}
      width={500}
      height={"auto"}
      onClose={closeProfile}
      open={openProfile}
      maskStyle={{
        opacity: 0,
      }}
      contentWrapperStyle={{
        borderRadius: "16px",
      }}
      className="profile-drawer media"
    >
      <ul className="flex flex-col gap-9">
        {profileItems.map((item) => {
          return (
            <li
              key={item.id}
              className="list-none flex gap-3 text-lg font-bold items-center custom-font"
            >
              {item.icon}
              {item.text.toLocaleUpperCase()}
            </li>
          );
        })}
      </ul>
    </Drawer>
  );
};
export default ProfileDrawer;
