import React from 'react'
import { Link } from 'react-router-dom'
// import { Login } from '../Login'
import Carousel from 'react-bootstrap/Carousel'
import './index.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="main-div">
      {/* <div>
        Welcome to home page
        <Link to="/Login"> click here to navigate to Login page</Link>
      </div> */}
      {/* <div>
        <Login />
      </div> */}
      <div className="carosel-image">
        <Carousel>
          <Carousel.Item>
          <Link to="/Books">
            <img
              className="d-block w-100 image"
              src="https://www.einfochips.com/blog/wp-content/uploads/2019/01/5-deep-learing-trends-that-will-rule-2019-featured.jpg"
              alt="Deep Learning Technique for Melanoma Detection using IOT"
            />
          </Link>
            <Carousel.Caption className="position-static carosel-caption">
              <h3>Deep Learning Technique for Melanoma Detection using IOT</h3>
              <p>Deep Learning Technique for Melanoma Detection using IOT</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to="/PLP/1">
            <img
              className="d-block w-100 image"
              src="https://p7.hiclipart.com/preview/326/911/590/deep-learning-with-keras-machine-learning-artificial-intelligence-others.jpg"
              alt="Deep Learning Image"
            />
            </Link>
            <Carousel.Caption className="position-static carosel-caption">
              <h3>Deep Learning Image label</h3>
              <p>Deep Learning Image label</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to="/PLP/2">
            <img
              className="d-block w-100 image"
              src="https://gadictos.com/wp-content/uploads/2019/08/neural-network-1060x707.jpeg"
              alt="Neural Networking Image"
            />
            </Link>
            <Carousel.Caption className="position-static carosel-caption">
              <h3>Neural Networking Image label</h3>
              <p>Neural Networking Image label</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to="/PLP/3">
            <img
              className="d-block w-100 image"
              src="https://www.fundraisingforacause.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/H/C/HC-29-17MA_xt0t-lz.jpg"
              alt="Melanoma Skin Cancer"
            />
            </Link>
            <Carousel.Caption className="position-static carosel-caption">
              <h3>Melanoma Skin Cancer Image label</h3>
              <p>Melanoma Skin Cancer Image label</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="partlogin">
        {/* <Link to="/Login"><button>Login</button></Link> */}
          <Link to="/SignIn"><button>SignIn</button></Link>
          <Link to="/SignUp"><button>SignUp</button></Link>
      </div>
      </div>
    )
  }
}

export default Home
export { Home }
