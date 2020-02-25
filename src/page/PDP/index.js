import React from 'react'
import './index.scss'
import { bookspart } from '../JSON/json_data'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus} from 'react-icons/fa'
// import { getCookie,  setCookie } from '../DataStore/utils'
import {arrayFormListObj} from 'C:/Users/b.gayathri/Desktop/college project/src/container/ArrayFormList/index'
var author;
@observer
class PDP extends React.Component {
  @observable pdp_product_details = ''
  @observable is_form_json_data_variable = false
  constructor(props){
    super(props)
    this.state = {
      product_id : this.props,
      // productidpart : this.state.product_id.match.params.product_id,
      product:bookspart,
      // pdp_product_details:'',
    }
    const productidpart = this.state.product_id.match.params.product_id
    // console.log("product_id",productidpart)
    const quotient = productidpart/10
    const parsed = parseInt(quotient, 10);
    const remainder = (productidpart%10)-1;
    // console.log(parsed,remainder)
    // console.log("product",this.state.product)
    if(parsed==1){
      author = "DeepLearning"
      // console.log(this.state.product.DeepLearning[remainder])
      // this.setState = ({
      //   pdp_product_details : bookspart.DeepLearning[remainder]
      // })
      this.pdp_product_details = bookspart.DeepLearning[remainder]
      // console.log("pdp_product_details",this.pdp_product_details)
    }
    else if(parsed==2){
      author = "NeuralNetworking"
      // console.log(this.state.product.NeuralNetworking[remainder])
      // this.setState = ({
      //   pdp_product_details : bookspart.NeuralNetworking[remainder]
      // })
      this.pdp_product_details = bookspart.NeuralNetworking[remainder]
      // console.log("pdp_product_details",this.pdp_product_details)
    }
    else if(parsed==3){
      author = "MelanomaSkinCancer"
      // console.log(this.state.product.MelanomaSkinCancer[remainder])
      // this.setState = ({
      //   pdp_product_details : bookspart.MelanomaSkinCancer[remainder]
      // })
      this.pdp_product_details = bookspart.MelanomaSkinCancer[remainder]
      // console.log("pdp_product_details",this.pdp_product_details)
    }
    // console.log(author)
    // const print = ('this.state.product'.concat('.',author,'[',remainder,']'))
    // console.log(print)
    // console.log("outer pdp",this.pdp_product_details)
  }
  form_json_data = () => {
    const sampleProduct = {
      id:`{${this.pdp_product_details.id}}`,
      name:`{${this.pdp_product_details.name}}`,
      price:`{${this.pdp_product_details.price}}`,
    }
    this.is_form_json_data_variable = true
    
    //   this.is_form_json_data_variable ? 
    //   (
    //     (setCookie('name',this.pdp_product_details.name))
    //     (setCookie('price',this.pdp_product_details.price))
    //   ) : 
    //   (setCookie('form_json_data_variable','defaultValue'))
    
    arrayFormListObj.name.push(this.pdp_product_details.name)
    {this.is_form_json_data_variable ? 
      (
        localStorage.setItem('name',JSON.stringify(arrayFormListObj.name))
      ) : (localStorage.setItem('name','keyname'))
    }
    arrayFormListObj.price.push(this.pdp_product_details.price)
    {this.is_form_json_data_variable ? 
      (
        localStorage.setItem('price',JSON.stringify(arrayFormListObj.price))
      ) : (localStorage.setItem('price','keyprice'))
    }
    arrayFormListObj.product.push(sampleProduct)
    {this.is_form_json_data_variable ? 
      (
        localStorage.setItem('product',JSON.stringify(arrayFormListObj.product))
      ) : (localStorage.setItem('product','keyObject'))
    }
  }
  PDP_page = () => {
    return(
      // <img src={product.img} />
      <>
      <div className="w-50">
        {this.pdp_product_details.name}
      </div>
        <div className="main-block-div d-flex justify-content-center">
          <div className="image-partdiv w-50">
            <div>
              <img className="smallimage" src={this.pdp_product_details.img} alt="small-image"/>
            </div>
            <div>
              <img className="largeimage" src={this.pdp_product_details.img} alt="large-image" />
            </div>
          </div>
          <div className="description-partdiv w-50">
            <div>
              REACT BOOK
            </div>
            <div>
            {this.pdp_product_details.name}
            </div>
            <div>
              Price : {this.pdp_product_details.price}
            </div>
            <div>
              Description : {this.pdp_product_details.description}
            </div>
            <div>
              <button><FaPlus /></button>
              <input type="number" defaultValue="1" max="10"  min="1" />
              <button><FaMinus /></button>
            </div>
            <div>
            <Link to="/LogOut"><button onClick={this.form_json_data} className="cart">Add to Cart</button></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  render() {
    return (
      <>
        {/* <div> Welcome to PDP page </div> */}
        <div className="d-flex w-100 justify-content-center flex-wrap">
          {this.PDP_page()}
        </div>
      </>
    )
  }
}

export default PDP
export { PDP }
