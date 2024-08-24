import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const NavBar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <div className="navbar-sm-container">
        <Link to="/" className="link-ele">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="navbar-website-logo"
          />
        </Link>
        <ul className="nav-items-icons-container">
          <li>
            <AiFillHome className="nav-item-icon" />
          </li>
          <li>
            <BsBriefcaseFill className="nav-item-icon" />
          </li>
          <li>
            <FiLogOut className="nav-item-icon" />
          </li>
        </ul>
      </div>
      <div className="navbar-lg-container">
        <Link to="/" className="link-ele">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="navbar-website-logo"
          />
        </Link>
        <div className="nav-items-container">
          <Link to="/" className="link-ele-para">
            Home
          </Link>
          <Link to="/jobs" className="link-ele-para">
            Jobs
          </Link>
        </div>

        <button onClick={onClickLogout} type="button">
          Logout
        </button>
      </div>
    </>
  )
}
export default withRouter(NavBar)
