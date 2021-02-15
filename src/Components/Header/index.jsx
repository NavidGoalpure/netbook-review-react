import { useState } from "react";
import logo from "../../Static/Images/netbook-full-logo.png";
import "./style.css";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header id="main-header">
      <div className="menu-container clearfix">
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
            <span id="search_icon"></span>
          </div>
          <div
            id="mobile_nav_menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="mobile_nav closed">
              <span className="select_page">Select Page</span>
              <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
              <ul
                id="mobile_menu"
                className="mobile_menu"
                style={
                  isMobileMenuOpen
                    ? {
                        maxHeight: "200px",
                        padding: "5%",
                        borderTop: "3px solid var(--accent-dark)",
                        transition: "max-height 0.2s ease-in",
                      }
                    : {
                        maxHeight: "0",
                        padding: "0",
                        borderTop: "none",
                        transition: "max-height 0.2s ease-out,padding 0s 0.2s",
                        overflow: "hidden",
                      }
                }
              >
                <li>
                  <a href="https://netbooksreview.net/home3/">HOME</a>
                </li>
                <li>
                  <a href="https://netbooksreview.net/about3/">ABOUT</a>
                </li>
                <li>
                  <a href="https://netbooksreview.net/reviews3/">REVIEWS</a>
                </li>
                <li>
                  <a href="https://www.officelessagency.com/begin?affiliate_id=2551017">
                    <span className="pb_button">{`Start Earning`}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
