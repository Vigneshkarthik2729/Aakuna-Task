import "./footer.css";
import FooterMapBg from "../assets/Markham_VE (1)/footer_map_bg.jpg.png";
import Fb from "../assets/Markham_VE (1)/fb.png";
import Twitter from "../assets/Markham_VE (1)/tw.png";
import YouTube from "../assets/Markham_VE (1)/yt.png";

const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);

const ICONS = {
  phone:
    "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  clock:
    "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
  pin: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
};

const quickLinks = [
  "Home",
  "New Vehicles",
  "Used Vehicles",
  "Service",
  "Parts",
  "Financial Services",
  "Contact Us",
  "Sitemap",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="footer-map"
        style={{
          backgroundImage: `linear-gradient(rgba(40, 40, 40, 0.72), rgba(40, 40, 40, 0.72)), url(${FooterMapBg})`,
        }}
      >
        <div className="footer-map__content">
          <div className="footer-inner">
            <div className="footer-col">
              <h5>Address</h5>
              <p>4340 Hwy 7 E, Markham, ON L3R 1L9</p>
            </div>

            <div className="footer-col">
              <h5>Phone</h5>
              <a href="tel:9057520881">(905) 752-0881</a>
            </div>

            <div className="footer-col">
              <h5>Email</h5>
              <a href="mailto:william@markhaminfiniti.com">
                william@markhaminfiniti.com
              </a>
            </div>

            <div className="footer-col">
              <h5>Follow us on</h5>
              <div className="footer-social">
                <a href="#fb" aria-label="Facebook" className="social-img-link">
                  <img src={Fb} alt="" />
                </a>
                <a href="#tw" aria-label="Twitter" className="social-img-link">
                  <img src={Twitter} alt="" />
                </a>
                <a href="#yt" aria-label="YouTube" className="social-img-link">
                  <img src={YouTube} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-cta">
            <a href="#hours" className="cta-btn">
              <Icon d={ICONS.clock} size={16} /> Dealership Hours
            </a>
            <a href="#contact" className="cta-btn primary">
              <Icon d={ICONS.phone} size={16} /> Contact Us
            </a>
            <a href="#location" className="cta-btn">
              <Icon d={ICONS.pin} size={16} /> Location
            </a>
          </div>
        </div>
      </div>

      <div className="footer-quick-bar">
        <div className="footer-quick-bar__inner">
          <span className="footer-quick-tab">Quick Links</span>
          <nav className="quick-links" aria-label="Quick links">
            {quickLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-legal">
        <div className="footer-legal__inner">
          <div className="copyright">
            © Copyright 2014 Markham Infiniti. All Rights Reserved.
          </div>
          <div className="powered">
            powered by <strong>eDEALER.CA</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
