import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="app-container">
    <Header />
    <div className="bottom-container">
      <div className="home-content">
        <h1>Clothes That Get YOU Noticed</h1>
        <img
          className="home-image-sm"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p>
          Fashion is part of the daily air and it does not quite help that it is
          changes all the times.Clothes have been always a maker of the era and
          we are in revolution.Your fashion makes you been seen and heard that
          way you are.So,celebrate the seasons new and existing fashion in your
          way.
        </p>
        <button className="shop-now-btn" type="button">
          Shop Now
        </button>
      </div>
      <img
        className="home-image-lg"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
