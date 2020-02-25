import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import './index.scss'
import { json_book } from './json'

class Books extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      json : json_book,
    }
  }
  carousel_function = (abcxyz,id) => {
    // console.log(abcxyz)
    // console.log(this.state.json[abcxyz])
    return(
      <div className="carosel-image">
        <Carousel>
          <Carousel.Item>
          {/* <Link to={'/PLP/'+id}> */}
          <Link to={`/PLP/${id}`}>
            <img
              className="image"
              src={this.state.json[abcxyz][0].img}
              // src={`this.state.json.`+ abcxyz + `[0].img`}
              alt="Book"
            />
          </Link>
            <Carousel.Caption>
              {/* <h3>Book</h3> */}
              {/* <p>Book</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to={`/PLP/${id}`}>
            <img
              className="image"
              src={this.state.json[abcxyz][1].img}
              alt="First slide"
            />
            </Link>
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              {/* <p>First slide label</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to={`/PLP/${id}`}>
            <img
              className="image"
              src={this.state.json[abcxyz][2].img}
              alt="Second slide"
            />
            </Link>
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              {/* <p>Second slide label</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to={`/PLP/${id}`}>
            <img
              className="image"
              src={this.state.json[abcxyz][3].img}
              alt="Third slide"
            />
            </Link>
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              {/* <p>Third slide label</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
  // image_function = () =>{
  //   return(
  //     <div>
  //       <div className="words-image">
  //         <Link to={`/PLP/1`}>
  //           <div>DeepLearning</div>
  //           <img className="image-special" src="http://dubeat.com/wp-content/uploads/chetan-bhagat-books.jpg" alt="DeepLearning author-image "/>
  //         </Link>
  //       </div>
  //       <div className="words-image">
  //         <Link to={`/PLP/2`}>
  //           <div>NeuralNetworking</div>
  //           <img className="image-special" src="https://www.gyanipandit.com/wp-content/uploads/2018/10/Anita-Desai-Books.jpg" alt="NeuralNetworking author-image "/>
  //         </Link>
  //       </div>
  //       <div className="words-image">
  //         <Link to={`/PLP/3`}>
  //           <div>MelanomaSkinCancer</div>
  //           <img className="image-special" src="https://www.observerbd.com/2019/06/20/observerbd.com_1561050382.jpg" alt="MelanomaSkinCancer author-image "/>
  //         </Link>
  //       </div>
  //     </div>
  //   )
  // }
  render() {
    return (
      <>
      {/* <div>
        Welcome to Book page
        <Link to="/PLP"> click here to navigate to PLP page</Link>
      </div> */}
      <div className="bookpart-mainblock">
        <div className="imagebook">
          {/* {this.image_function()} */}
          <>{this.carousel_function("DeepLearning",1)}</>
          <>{this.carousel_function("NeuralNetworking",2)}</>
          <>{this.carousel_function("MelanomaSkinCancer",3)}</>
        </div>
        <div className="selectorbook">
        <select>
          <option defaultValue value="none"> Select</option>
          <option value="DeepLearning">DeepLearning</option>
          <option value="NeuralNetworking">NeuralNetworking</option>
          <option value="MelanomaSkinCancer">MelanomaSkinCancer</option>
        </select>
        </div>
      </div>
      </>
    )
  }
}


export default Books
export { Books }