import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { TiTick, TiTimes } from "react-icons/ti";

const Header = () => {
  const isOnelineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="menu-items">
        <li className="online-status">
          Online Status :{" "}
          {isOnelineStatus ? <TiTick color="green" /> : <TiTimes color="red" />}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        <li>Cart</li>
      </div>
    </div>
  );
};

export default Header;
