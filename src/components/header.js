import React, { Component } from 'react'

import { Link } from 'gatsby'
import './Header.css'
//import Logo from '../images/logo-invision.png'

class Header extends Component {
  state = { hasScrolled: false }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = event => {
    const ScrollTop = window.pageYOffset
    if (ScrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/logo-designcode.svg')} width="30" />
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header

/** <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
 */
