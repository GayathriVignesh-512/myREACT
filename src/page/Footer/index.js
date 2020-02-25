import React from 'react'
import './index.scss'
import { GiBookshelf } from 'react-icons/gi'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import Table from 'react-bootstrap/Table'
class Footer extends React.Component {
  render() {
    return (
      <>
      <div className="footer">
        {/* Welcome to Footer */}
      </div>

<Table responsive borderless size="sm">
  <thead>
    <tr>
      <th>Company</th>
      <th> Policies</th>
      <th>Help</th>
      <th>Misc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>About Us</td>
      <td>Career</td>
      <td>Blog</td>
      <td>Contact Us</td>
    </tr>
    <tr>
      <td>Privacy Policies</td>
      <td>Terms of Use</td>
      <td>Secure Shopping</td>
      <td>Copyright Policy</td>
    </tr>
    <tr>
      <td>Payment</td>
      <td>Shipping</td>
      <td>Return</td>
      <td>FAQ</td>
    </tr>
    <tr>
      <td>Affiliate</td>
      <td>Request a Book</td>
      <td>Sitema</td>
    </tr>
  </tbody>
</Table>

    <div>
      <a href="http://www.google.com" target="_blank"><GiBookshelf fill="#fff"/></a>&emsp;
      <a href="https://accounts.google.com/" target="_blank"><MdMailOutline fill="#fff"/></a>&emsp;
      <a href="https://www.facebook.com/" target="_blank"><FaFacebookF fill="#fff"/></a>&emsp;
      <a href="https://www.instagram.com/" target="_blank"><FaInstagram fill="#fff"/></a>&emsp;
      <a href="https://twitter.com/" target="_blank"><FaTwitter fill="#fff"/></a>&emsp;
      <a href="https://in.linkedin.com/" target="_blank"><FaLinkedinIn fill="#fff"/></a>&emsp;
      <a href="https://web.whatsapp.com/" target="_blank"><FaWhatsapp fill="#fff"/></a>&emsp;
      <a href="https://telegram.org/" target="_blank"><FaTelegramPlane fill="#fff"/></a>&emsp;
      {/* <FaFacebookF fill="#fff" />&emsp; */}
      {/* <FaInstagram fill="#fff" />&emsp; */}
      {/* <FaTwitter fill="#fff" />&emsp; */}
      {/* <FaLinkedinIn fill="#fff" />&emsp; */}
      {/* <FaWhatsapp fill="#fff" />&emsp; */}
      {/* <FaTelegramPlane fill="#fff" />&emsp; */}
      {/* <MdMailOutline fill="#fff" /> */}
    </div>
      </>
    )
  }
}

export default Footer
export { Footer }
