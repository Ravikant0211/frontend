import "./homesGuests.css";

const HomesGuests = () => {
  return (
    <div className="hg">
      <div className="hgItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1"
          alt=""
          className="hgItemImg"
        />
        <span className="hgName">
          3 Epoques Apartments by Prague Residences
        </span>
        <span className="hgCity">
          Prague 1, Czech Republic, Praha 1 Starting from
        </span>
        <span className="hgPrice">₹ 13,793</span>
        <div className="hgRating">
          <button>8.9</button>
          <span>Exellent</span>
        </div>
      </div>
      <div className="hgItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1"
          alt=""
          className="hgItemImg"
        />
        <span className="hgName">
          6 Continents Apartments by Prague Residences
        </span>
        <span className="hgCity">
          Prague 1, Czech Republic, Prague Starting from
        </span>
        <span className="hgPrice">₹ 16,652</span>
        <div className="hgRating">
          <button>8.4</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className="hgItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="hgItemImg"
        />
        <span className="hgName">7Seasons Apartments Budapest</span>
        <span className="hgCity">
          06. Terézváros, Hungary, Budapest Starting from
        </span>
        <span className="hgPrice">₹ 8,302</span>
        <div className="hgRating">
          <button>8.8</button>
          <span>Exellent</span>
        </div>
      </div>
      <div className="hgItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
          alt=""
          className="hgItemImg"
        />
        <span className="hgName">numa I Vita Apartments</span>
        <span className="hgCity">
          Fortezza da Basso, Italy, Florence Starting from
        </span>
        <span className="hgPrice">₹ 12,301 </span>
        <div className="hgRating">
          <button>9.3</button>
          <span>Wonderful</span>
        </div>
      </div>
    </div>
  );
};

export default HomesGuests;
