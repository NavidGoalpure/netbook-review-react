import logo from "../../Static/Images/netbook-full-logo.png";
import { ReactComponent as SearchIcon } from "../../Static/Images/ic24-search.svg";
import "./style.css";
const Header = () => {
  return (
    <header id="main-header">
      <div className="menu-container">
        <div className="logo-container">
          <span className="logo-helper"></span>
          <a href="https://netbooksreview.net/">
            <img id="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div id="top-navigation">
          <nav id="top-menu-nav">
            <ul id="top-menu" className="nav">
              <li className="menu-item">
                <a
                  className="header-menu"
                  href="https://netbooksreview.net/home3/"
                >
                  HOME
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="header-menu"
                  href="https://netbooksreview.net/about3/"
                >
                  ABOUT
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="header-menu"
                  href="https://netbooksreview.net/reviews3/"
                >
                  REVIEWS
                </a>
              </li>
              <li className="menu-item">
                <a href="https://www.officelessagency.com/begin?affiliate_id=2551017">
                  <span className="pb_button">{`Start Earning`}</span>
                </a>
              </li>
            </ul>
          </nav>
          <div id="top_search">
            <span id="search_icon">
              <SearchIcon style={{ width: "17", height: "17px" }} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
