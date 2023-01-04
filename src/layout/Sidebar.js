import { React, useState } from "react";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/icons";
import twitlogo from "../images/twitlogo.png";

const sideLinks = [
  { name: "Home", icon: HomeIcon },
  { name: "Explore", icon: ExploreIcon },
  { name: "Notification", icon: NotificationsIcon },
  { name: "Messages", icon: MessagesIcon },
  { name: "Bookmarks", icon: BookmarksIcon },
  { name: "Lists", icon: ListIcon },
  { name: "Profile", icon: ProfileIcon },
  { name: "More", icon: MoreIcon },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="w-72 flex flex-col justify-between h-screen sticky top-0">
      <div className="">
        <div className="mt-1 mb-4 ml-1  flex items-center justify-center w-12 h-12 hover:bg-gray-lightest rounded-full transform transition-colors duration-400">
          <img src={twitlogo} alt="Twitter Logo" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark transform transition-colors duration-400 text-white shadow-lg rounded-full py-3 px-18 w-11/12 m-3">
          Tweet
        </button>
      </div>
      <div>
        <UserBox></UserBox>
      </div>
    </div>
  );
};

export default Sidebar;
