import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";

const Backdrop = () => {
  return <div className="backdrop" />;
};

const Slider = ({ photos, slideNumber, setSlideNumber, setOpen }) => {
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <div className="slider">
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setOpen(false)}
        />
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="arrow"
          onClick={() => handleMove("l")}
        />
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="arrow"
          onClick={() => handleMove("r")}
        />
      </div>
    </>,
    document.getElementById("portal")
  );
};

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/182089239.jpg?k=6a5ea367540872e49356849ecef3990e1ae4617c34d47de2af19aa906a188b28&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/210226045.jpg?k=3fa442490d9cbb4aaf952bb23aee9c4f16d15c068de63323356fc32a9babec3f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/236706024.jpg?k=2e264a015ac11e705a50f0301ab80eaa91b037a136b1937b77e74ca2dea1dc7b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/58509389.jpg?k=63a98e9a89cf121fae764be050fdfe1c67f149d1cc617926120c4c7ec8ad371f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/195562073.jpg?k=cdacc96e98983c871ee3de898007253b01e306436600a914f41098fbae3765dd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/180284071.jpg?k=e74bc9996b6fa0108d528f7f45f2f8fee32a6904a2085504b46a355855a4947a&o=&hp=1",
    },
  ];

  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setOpen(true);
  };

  return (
    <div className="hotel">
      {open && (
        <Slider
          photos={photos}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
          setOpen={setOpen}
        />
      )}
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, idx) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(idx)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located just 2.2 km from Indira Gandhi International Airport,
                Hotel Castle Blue features a business centre and operates a
                24-hour front desk. Free WiFi is available throughout the
                property. Fitted with carpeted flooring, each air-conditioned
                room of Hotel Castle Blue comes with a minibar, sofa and
                flat-screen satellite TV. The private bathroom includes a
                hairdryer and shower. The PVR Saket and Sahara Mall are 2 km
                away from the property. The ancient historic monuments of Red
                Fort and India Gate are within 8 km. The New Delhi Railway
                Station is 8 km. Services like luggage storage, safety deposit
                box and breakfast buffer are provided. Currency exchange, car
                rental and day trips can be organised at the tour desk. Free
                parking facility is available.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located just 2.2 km from Indira Gandhi International Airport,
                Hotel Castle Blue features a business centre and operates a
                24-hour front desk.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
