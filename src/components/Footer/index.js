import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-logo-container">
      <img
        src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690437156/download_2_qr97ws.jpg"
        alt="logo"
        className="image2"
      />
      <h1 className="footer-heading">
        Cappitall Want Solutions Private Limited{' '}
      </h1>
    </div>
    <p className="contact-us">
      Cappitall Want provides a cloud network to manage the capital employed in
      your ... Naturally, our solutions
      <br /> Contact us on
    </p>
    <div className="icon-container">
      <FaPinterestSquare className="logos" testid="pintrest-social-icon" />
      <FaInstagram className="logos" testid="instagram-social-icon" />
      <FaTwitterSquare className="logos" testid="twitter-social-icon" />
      <FaFacebookSquare className="logos" testid="facebook-social-icon" />
    </div>
  </div>
)

export default Footer
