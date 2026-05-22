import { useState } from "react";
import "./header.css";
import Logo from "../assets/Markham_VE (1)/Logo.png";
import HeaderStrip from "../assets/Markham_VE (1)/Header_strip.png";
import LocationIcon from "../assets/Markham_VE (1)/location.png";
import CallIcon from "../assets/Markham_VE (1)/call.png";
import SalesIcon from "../assets/Markham_VE (1)/toll-free.png";
import SubMenuArrow from "../assets/Markham_VE (1)/sub_menu_arw.png";
import Fb from "../assets/Markham_VE (1)/fb.png";
import Twitter from "../assets/Markham_VE (1)/tw.png";
import YouTube from "../assets/Markham_VE (1)/yt.png";

const navLinks = [
  { label: "Home", href: "#home", active: true, dropdown: false },
  { label: "New Vehicles", href: "#new-vehicles", dropdown: true },
  { label: "Used Vehicles", href: "#used-vehicles", dropdown: true },
  { label: "Service", href: "#service", dropdown: true },
  { label: "Parts", href: "#parts", dropdown: false },
  { label: "Financial Services", href: "#financial-services", dropdown: true },
  { label: "Contact Us", href: "#contact", dropdown: true },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((open) => {
      if (!open) setUtilityOpen(false);
      return !open;
    });
  };

  const toggleUtility = () => {
    setUtilityOpen((open) => {
      if (!open) setNavOpen(false);
      return !open;
    });
  };

  return (
      <header className="site-header">
        <div className="site-header__layout">
          <a href="#home" className="site-header__logo" aria-label="Markham Infiniti home">
            <img src={Logo} alt="Markham Infiniti" />
          </a>

          <div className="site-header__right">
            <div
              className={`site-header__utility${utilityOpen ? " is-open" : ""}`}
              style={{ backgroundImage: `url(${HeaderStrip})` }}
            >
              <button
                type="button"
                className="site-header__utility-toggle"
                aria-expanded={utilityOpen}
                onClick={toggleUtility}
              >
                Contact &amp; hours
              </button>

              <div className="site-header__utility-inner">
                <div className="site-header__contact">
                  <a href="https://maps.google.com/?q=4340+Hwy+7+E+Markham+ON" className="site-header__contact-item">
                    <img src={LocationIcon} alt="" className="site-header__icon" />
                    <span>4340 Hwy 7 E, Markham, ON L3R 1L9</span>
                  </a>
                  <span className="site-header__divider" aria-hidden="true" />
                  <a href="tel:9057520881" className="site-header__contact-item">
                    <img src={CallIcon} alt="" className="site-header__icon" />
                    <span>(905) 752-0881</span>
                  </a>
                  <span className="site-header__divider" aria-hidden="true" />
                  <a href="tel:8667981346" className="site-header__contact-item">
                    <img src={SalesIcon} alt="" className="site-header__icon" />
                    <span>
                      Sales : <strong>(866) 798-1346</strong>
                    </span>
                  </a>
                  <span className="site-header__divider site-header__divider--hide-sm" aria-hidden="true" />
                  <a href="#hours" className="site-header__hours">
                    <span>Dealership Hours</span>
                    <img src={SubMenuArrow} alt="" className="site-header__hours-arrow" />
                  </a>
                </div>

                <div className="site-header__social">
                  <a href="#facebook" aria-label="Facebook">
                    <img src={Fb} alt="" />
                  </a>
                  <a href="#twitter" aria-label="Twitter">
                    <img src={Twitter} alt="" />
                  </a>
                  <a href="#youtube" aria-label="YouTube">
                    <img src={YouTube} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="site-header__nav-row">
              <nav className={`site-header__nav${navOpen ? " is-open" : ""}`}>
                <ul>
                  {navLinks.map((item, index) => (
                    <li key={item.label} className={index === 0 ? "first" : ""}>
                      <a
                        href={item.href}
                        className={item.active ? "is-active" : ""}
                      >
                        <span className="site-header__nav-label">{item.label}</span>
                        {item.dropdown && (
                          <img
                            src={SubMenuArrow}
                            alt=""
                            className="site-header__nav-caret"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                type="button"
                className={`site-header__menu-btn${navOpen ? " is-open" : ""}`}
                aria-label={navOpen ? "Close menu" : "Open menu"}
                aria-expanded={navOpen}
                onClick={toggleNav}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}
