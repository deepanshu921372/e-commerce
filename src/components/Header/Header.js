import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/logo.png";


const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="d-flex align-items-center col-sm-10 part-2">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;




