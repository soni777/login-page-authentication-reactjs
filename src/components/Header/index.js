import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <button className="logout-sm-btn" type="button">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>
    </div>
    <ul className="nav-links-container-sm">
      <Link to="/" className="nav-link">
        <li>
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>
      </Link>
      <Link to="/products" className="nav-link">
        <li>
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li>
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </Link>
    </ul>
    <ul className="nav-links-container-lg">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/products" className="nav-link">
        <li>Products</li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li>Cart</li>
      </Link>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
