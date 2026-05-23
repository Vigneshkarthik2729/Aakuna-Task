import "./style.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../assets/Markham_VE/banner.png";
import CtaOne from "../assets/Markham_VE/cta_01.png";
import CtaTwo from "../assets/Markham_VE/cta_02.png";
import CtaThree from "../assets/Markham_VE/book_white.png";
import CtaFour from "../assets/Markham_VE/cta_04.png";
import CarOne from "../assets/Markham_VE/car_01.png";
import CarTwo from "../assets/Markham_VE/car_02.png";
import CarThree from "../assets/Markham_VE/car_03.png";
import CarFour from "../assets/Markham_VE/car_04.png";
import EventCar from "../assets/Markham_VE/event.png";
import PlusIcon from "../assets/Markham_VE/Plus.png";
import DedicatedHover from "../assets/Markham_VE/dedicated_hover.png";
import GrayDiamond from "../assets/Markham_VE/gray_bg.png";
import VioletDiamond from "../assets/Markham_VE/viloet_bg.png";
import FamilyOwnedIcon from "../assets/Markham_VE/family_owned.png";
import ProfessionalIcon from "../assets/Markham_VE/professional.png";
import WelcomeBg from "../assets/Markham_VE/welocme_bg.png";
import ReadMoreIcon from "../assets/Markham_VE/read-more.png";
import VideoLeftArw from "../assets/Markham_VE/video_left_arw.png";
import VideoRightArw from "../assets/Markham_VE/video_right_arw.png";
import QuickNavBg from "../assets/Markham_VE/bg_dotted_Line.png";

const PlayIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const quickNavItems = [
  { icon: CtaOne, label: "Shop New\nVehicles", href: "#new-vehicles", active: false },
  { icon: CtaTwo, label: "Shop Used\nVehicles", href: "#used-vehicles", active: false },
  { icon: CtaThree, label: "Service", href: "#service", active: true },
  { icon: CtaFour, label: "Specials", href: "#specials", active: false },
];

const showroomCars = [
  { model: "2014 Q50", img: CarOne, price: "$37,500" },
  { model: "2014 QX70", img: CarTwo, price: "$53,350" },
  { model: "2014 QX50", img: CarThree, price: "$37,900" },
  { model: "2014 QX60", img: CarFour, price: "$43,000" },
];

export default function MainPage() {
  return (
    <div className="markham-root">
      <Header />

      <section className="hero" id="home">
        <img
          src={Banner}
          alt="Markham Infiniti showroom banner"
          className="hero-banner"
          fetchPriority="high"
          decoding="async"
        />
      </section>

{/* New vehicles */}
      <section
        className="quick-nav"
        style={{ backgroundImage: `url(${QuickNavBg})` }}
      >
        <div className="quick-nav-inner">
          {quickNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`quick-item${item.active ? " is-active" : ""}`}
            >
              <span className={`quick-circle${item.active ? " is-active" : ""}`}>
                <img src={item.icon} alt="" className="quick-icon" />
                {item.active && <span className="quick-pointer" aria-hidden="true" />}
              </span>
              <span className="quick-label">{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/*  MODEL SHOWROOM */}
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
              loading="lazy"
              decoding="async"
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

      {/* WELCOME */}
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
            <div
              className="feature-item"
              style={{ backgroundImage: `url(${GrayDiamond})` }}
            >
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

            <div
              className="feature-item"
              style={{ backgroundImage: `url(${GrayDiamond})` }}
            >
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

      {/* NEWS & VIDEO */}
      <section className="news-section">
        <div className="news-inner">
          <article className="news-column">
            <div className="news-block-top">
              <h2 className="news-block-title">News and Events</h2>
              <div className="news-nav-arrows">
                <button type="button" aria-label="Previous">
                  <img src={VideoLeftArw} alt="left" style={{ width: "50px", height: "50px" }}/>
                </button>
                <button type="button" aria-label="Next">
                  <img src={VideoRightArw} alt="right" style={{ width: "50px", height: "50px" }}/>
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
              loading="lazy"
              decoding="async"
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
                  <PlayIcon size={22} />
                </button>
                <p className="video-player__label">THE INFINITI MYSTERY BOX GAME</p>
              </div>
              <div className="video-player__bar">
                <button type="button" className="video-player__play-sm" aria-label="Play">
                  <PlayIcon size={12} />
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