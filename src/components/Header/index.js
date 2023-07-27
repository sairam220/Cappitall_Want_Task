import {useState} from 'react'
import {Link} from 'react-router-dom'
import {FcMenu} from 'react-icons/fc'
import './index.css'

function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img
              src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690437156/download_2_qr97ws.jpg"
              alt="logo"
              className="image1"
            />
            <h1 className="navbar-heading">Cappitall Want Quiz App</h1>
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/quiz"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Qize
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/admin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Admin
              </Link>
            </li>
          </ul>
          <li className="nav-icon" onClick={handleClick}>
            <FcMenu className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </li>
        </div>
      </nav>
    </>
  )
}

export default Header
