import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/region/250x250/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Goa</h2>
          <h3>5,245 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/city/250x250/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>New Delhi</h2>
          <h3>2,915 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/250x250/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Mumbai</h2>
          <h3>1,651 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/city/250x250/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Jaipur</h2>
          <h3>1,560 properties</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
