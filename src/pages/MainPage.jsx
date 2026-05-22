import "./style.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../assets/Markham_VE (1)/banner.png";
import CtaOne from "../assets/Markham_VE (1)/cta_01.png";
import CtaTwo from "../assets/Markham_VE (1)/cta_02.png";
import CtaThree from "../assets/Markham_VE (1)/book_white.png";
import CtaFour from "../assets/Markham_VE (1)/cta_04.png";
import CarOne from "../assets/Markham_VE (1)/car_01.png";
import CarTwo from "../assets/Markham_VE (1)/car_02.png";
import CarThree from "../assets/Markham_VE (1)/car_03.png";
import CarFour from "../assets/Markham_VE (1)/car_04.png";
import EventCar from "../assets/Markham_VE (1)/event.png";
import PlusIcon from "../assets/Markham_VE (1)/Plus.png";
import DedicatedHover from "../assets/Markham_VE (1)/dedicated_hover.png";
import GrayDiamond from "../assets/Markham_VE (1)/gray_bg.png";
import VioletDiamond from "../assets/Markham_VE (1)/viloet_bg.png";
import FamilyOwnedIcon from "../assets/Markham_VE (1)/family_owned.png";
import ProfessionalIcon from "../assets/Markham_VE (1)/professional.png";
import WelcomeBg from "../assets/Markham_VE (1)/welocme_bg.png";
import ReadMoreIcon from "../assets/Markham_VE (1)/read-more.png";
import VideoLeftArw from "../assets/Markham_VE (1)/video_left_arw.png";
import VideoRightArw from "../assets/Markham_VE (1)/video_right_arw.png";

/* ── SVG icon helpers ── */
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);
const ICONS = {
  location: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  phone: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  car: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
  wrench: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
  gift: "M20 6h-2.18c.07-.33.18-.65.18-1 0-2.21-1.79-4-4-4-1.05 0-1.96.43-2.64 1.1L10 3.47l-1.36-1.37C7.96.43 7.05 0 6 0 3.79 0 2 1.79 2 4c0 .35.11.67.18 1H2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM6 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm14 16H4v-8h16v8z",
  clock: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
  pin: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  play: "M8 5v14l11-7z",
  chevRight: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  chevLeft: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  arrow: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  people: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  person: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  dance: "M14.12 10H19V8.2h-3.62l-1-1.6C14.04 6.23 13.55 6 13 6c-.4 0-.75.15-1.02.39L8 9.5V14h1.8v-3.4l1.53-1.25 2.35 9.65H15.4l-1.43-5.64L15 18h2V16.25l-1.58-6.04L14.12 10zM14 3.8c1 0 1.8-.8 1.8-1.8S15 .2 14 .2 12.2 1 12.2 2s.8 1.8 1.8 1.8z",
};

const showroomCars = [
  { model: "2014 Q50", img: CarOne, price: "$37,500" },
  { model: "2014 QX70", img: CarTwo, price: "$53,350" },
  { model: "2014 QX50", img: CarThree, price: "$37,900" },
  { model: "2014 QX60", img: CarFour, price: "$43,000" },
];

const navLinks = ["Home","New Vehicles","Used Vehicles","Service","Parts","Financial Services","Contact Us"];
const quickLinks = ["Home","New Vehicles","Used Vehicles","Service","Parts","Financial Services","Contact Us","Sitemap"];

export default function MainPage() {
  return (
    <div className="markham-root">
      {/* ── Google Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;600;700;800&display=swap" rel="stylesheet" />

      <Header />

      <section className="hero">
        <img src={Banner} alt="Markham Infiniti showroom banner" className="hero-banner" />
      </section>

      {/* ── QUICK NAV ── */}
      <section className="quick-nav">
  <div className="quick-nav-inner">

    {[
      {
        icon: CtaOne,
        label: "Shop New Vehicles",
        active: false,
      },
      {
        icon: CtaTwo,
        label: "Shop Used Vehicles",
        active: false,
      },
      {
        icon: CtaThree,
        label: "Service",
        active: true,
      },
      {
        icon: CtaFour,
        label: "Specials",
        active: false,
      },
    ].map((item) => (
      <div className="quick-item" key={item.label}>

        <div className={`circle ${item.active ? "active" : ""}`}>
          <img
            src={item.icon}
            alt={item.label}
            className="quick-icon"
          />

          <p>{item.label}</p>

          <span className="circle-pointer"></span>
        </div>

      </div>
    ))}

  </div>
</section>

      {/* ── MODEL SHOWROOM ── */}
      <section className="showroom" id="new-vehicles">
  <div className="showroom-inner">
    <div className="section-title">MODEL SHOWROOM</div>

    <div className="showroom-grid">
      {showroomCars.map((car) => (
        <div className="car-card" key={car.model}>
          
          <div className="car-img-wrap">
            <h3 className="car-model">{car.model}</h3>

            <img
              src={car.img}
              alt={car.model}
              className="car-image"
            />
          </div>

          <div className="car-card-footer">
            <div className="car-price">
              Starting at {car.price}
            </div>
            <img src={PlusIcon} alt="" className="car-plus" aria-hidden="true" />
          </div>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── WELCOME ── */}
      <section
        className="welcome"
        style={{ backgroundImage: `url(${WelcomeBg})` }}
      >
        <div className="welcome-inner">
          <div className="welcome-heading">
            <h2 className="welcome-title">Welcome to Markham Infiniti</h2>
            <div className="welcome-heading-rule" aria-hidden="true">
              <span className="welcome-heading-caret" />
              <span className="welcome-heading-bar" />
            </div>
          </div>

          <p className="welcome-text">
            Markham Infiniti is a family owned business in Toronto that has been servicing the GTA market
            since Infiniti was introduced. Agincourt Infiniti was one of the original fifteen Infiniti dealers
            appointed in Canada in 1990, and in October 2007 we relocated to Unionville, Ontario under our
            new name &ldquo;Markham Infiniti&rdquo;.
          </p>

          <div className="features-row">
            <div className="feature-item">
              <img src={GrayDiamond} alt="" className="diamond-bg" aria-hidden="true" />
              <img src={FamilyOwnedIcon} alt="" className="icon-img" aria-hidden="true" />
              <h3 className="feature-title">Family Owned</h3>
              <p className="feature-desc">
                In our continual dedication to exceed our customers&apos;&hellip;
              </p>
            </div>

            <div className="feature-center">
              <img src={DedicatedHover} alt="" className="feature-center-badge" aria-hidden="true" />
              <img src={VioletDiamond} alt="" className="diamond-bg" aria-hidden="true" />
              <div className="feature-center-body">
                <div className="feature-center-copy">
                  <h3 className="feature-title">Dedicated to You</h3>
                  <p className="feature-desc">
                    We have grown from that first sale to now selling hundreds of Infiniti&apos;s per year in the
                    greater Toronto area. Our Infiniti service business is one of the largest in Canada&hellip;
                  </p>
                </div>
                <div className="feature-center-footer">
                  <span className="feature-center-rule" aria-hidden="true" />
                  <a href="#about" className="read-more">
                    Read more
                    <img src={ReadMoreIcon} alt="" className="read-more-icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="feature-item">
              <img src={GrayDiamond} alt="" className="diamond-bg" aria-hidden="true" />
              <img src={ProfessionalIcon} alt="" className="icon-img" aria-hidden="true" />
              <h3 className="feature-title">
                Friendly and
                <br />
                Professional
              </h3>
              <p className="feature-desc">
                Our Infiniti service business is one of the largest&hellip;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS & VIDEO ── */}
      <section className="news-section">
        <div className="news-inner">
          <article className="news-column">
            <div className="news-block-top">
              <h2 className="news-block-title">News and Events</h2>
              <div className="news-nav-arrows">
                <button type="button" aria-label="Previous">
                  <img src={VideoLeftArw} alt="" />
                </button>
                <button type="button" aria-label="Next">
                  <img src={VideoRightArw} alt="" />
                </button>
              </div>
            </div>
            <div className="news-block-rule" aria-hidden="true">
              <span className="news-block-caret" />
              <span className="news-block-line" />
            </div>

            <h3 className="news-subtitle">| Infiniti reveals Q30 Concept</h3>
            <img
              src={EventCar}
              alt="Infiniti reveals Q30 Concept at Frankfurt Motor Show"
              className="news-photo"
            />
            <p className="news-text">
              Infiniti today revealed the next step in its strategy to expand into new premium segments
              with the debut of the Q30 Concept at the Frankfurt Motor Show. The sleek, seductive Q30
              Concept..{" "}
              <a href="#news" className="news-read-more">
                Read more &gt;
              </a>
            </p>
          </article>

          <article className="news-column">
            <div className="news-block-top">
              <h2 className="news-block-title">Promotional Video</h2>
            </div>
            <div className="news-block-rule" aria-hidden="true">
              <span className="news-block-caret" />
              <span className="news-block-line" />
            </div>

            <h3 className="news-subtitle">
              | Infiniti Canada fan surprised with Trip of a Lifetime
            </h3>

            <div className="video-player">
              <div className="video-player__screen">
                <div className="video-player__thumb" />
                <button type="button" className="video-player__play-lg" aria-label="Play video">
                  <Icon d={ICONS.play} size={22} />
                </button>
                <p className="video-player__label">THE INFINITI MYSTERY BOX GAME</p>
              </div>
              <div className="video-player__bar">
                <button type="button" className="video-player__play-sm" aria-label="Play">
                  <Icon d={ICONS.play} size={12} />
                </button>
                <div className="video-player__progress">
                  <span className="video-player__progress-fill" />
                </div>
                <span className="video-player__time">0:03 / 1:22</span>
                <div className="video-player__bar-icons" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}