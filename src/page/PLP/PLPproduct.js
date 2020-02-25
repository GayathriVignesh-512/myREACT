import React from 'react'
import { GiBookshelf } from 'react-icons/gi'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import './index.scss'
import PDP from '../PDP'
import { Link } from 'react-router-dom'
var counts=0;
var id;
@observer
class PLPproduct extends React.Component {
  @observable plp_specific_data = ''
  @observable isItemInFavorites = false
    constructor(props){
        super(props)
        this.count = 1
        this.selectedFavIconColor = '#FF0000'
        this.defaultFavIconColor = '#000'
        this.state = {
          product : this.props.product
        }
        id=this.state.product.id
    }
    // pdp_render=()=>{
    //   console.log("pdp",this.state.product)
    //   return(
    //     <Link to="/PDP">
    //       {/* <PDP pdp_product={this.state.product}/> */}
    //       <PDP />
    //     </Link>
    //   )
    // }
    heartClicked = () => {
      // clickvalue = 1
      this.isItemInFavorites = !this.isItemInFavorites
      {
        this.isItemInFavorites ? (counts = counts + 1) : (counts = counts - 1)
        this.props.getFavoritesCount(counts)
        // console.log(counts)
      }
    }
    blockpart = () => {
      // console.log("product",this.state.product)
        return(
          <div className="main-content">
            <div className="block-image-box w-100">
              <div className="image-fav">
                <div className="image123">
                  {/* <img src={this.state.product.img} onClick={this.pdp_render} alt="image" /> */}
                  <Link to={`/PDP/${this.state.product.id}`}>
                    <img className="image-alone" src={this.state.product.img} alt="image" />
                  </Link>
                </div>
              </div>
              <div className="d-flex">
                  <div className="fav-alone w-50">
                    <GiBookshelf 
                      fill={
                    this.isItemInFavorites
                      ? ((this.count = this.count + 1), this.selectedFavIconColor)
                      : ((this.count = this.count - 1), this.defaultFavIconColor)
                  }
                  onClick={this.heartClicked}
                    />{this.count}
                  </div>
                  <div className="w-50" id="description">
                    <div className="name-part">
                      {this.state.product.name}
                    </div>
                    <div className="price-part">
                      {this.state.product.price}
                    </div>
                    {/* <div>
                      {this.state.product.id}
                    </div> */}
                  </div>
              </div>
            </div>
          </div>
        )
      }
    render() {
        return(
            <div className="d-block">
                {this.blockpart()}
            </div>
        )
    }
}
export default PLPproduct
export { PLPproduct }