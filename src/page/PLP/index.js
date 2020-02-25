import React from 'react'
import { Link } from 'react-router-dom'
import { GiBookshelf } from 'react-icons/gi'
// import { PLP_example } from '../PLP_example/index.js'
import { bookspart } from '../JSON/json_data'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import get from 'get-value'
import { PLPproduct } from './PLPproduct'
import './index.scss'
var itemsofpdp='';
@observer
class PLP extends React.Component {
  @observable json_data_field = ''
  @observable heartclickvaluecount = 0
  constructor(props) {
    super(props)
    // this.state = {
    //   json_data_field : '',
    // }
    this.data_function()
    // console.log("this.props",this.props)
  }
  data_function = () => {
    // this.setState({
    //   json_data_field : bookspart,
    // })
    this.json_data_field = bookspart
  }
  handleFavoritesCount = count => {
    this.heartclickvaluecount = count
  }
  output = () => {
    // console.log("DeepLearning",this.json_data_field.DeepLearning) 
    // console.log("NeuralNetworking",this.json_data_field.NeuralNetworking) 
    // console.log("MelanomaSkinCancer",this.json_data_field.MelanomaSkinCancer) 
    // console.log("bookspart",bookspart)  
  }
  // blockpart = () => {
  //   return(
  //     <div className="block-image-box">
  //         <div className="image-fav">
  //           <div className="image-alone">
  //             <img src="data:image/jpeg;base64,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" alt="image" />
  //           </div>
  //           <div className="fav-alone">
  //             <GiBookshelf />
  //           </div>
  //         </div>
  //         <div className="name-part">
  //           name-part
  //         </div>
  //         <div className="price-part">
  //           price-part
  //         </div>
  //       </div>
  //   )
  // }


  // Send_data_to_child1 = () =>{
  //   const rendereditems = this.json_data_field.DeepLearning.map((item,index) => {
  //     return(
  //       <PLPproduct 
  //       product={item}
  //       key={index}
  //       index={index}
  //       getFavoritesCount={this.handleFavoritesCount}
  //       />
  //     )
  //   })
  //   // console.log("rendereditems",rendereditems)
  //   return <> {rendereditems} </>
  // }
  // Send_data_to_child2 = () =>{
  //   const rendereditems = this.json_data_field.NeuralNetworking.map((item,index) => {
  //     return(
  //       <PLPproduct 
  //       product={item}
  //       key={index}
  //       index={index}
  //       getFavoritesCount={this.handleFavoritesCount}
  //       />
  //     )
  //   })
  //   // console.log("rendereditems",rendereditems)
  //   return <> {rendereditems} </>
  // }
  // Send_data_to_child3 = () =>{
  //   const rendereditems = this.json_data_field.MelanomaSkinCancer.map((item,index) => {
  //     return(
  //       <PLPproduct 
  //       product={item}
  //       key={index}
  //       index={index}
  //       getFavoritesCount={this.handleFavoritesCount}
  //       />
  //     )
  //   })
  //   // console.log("rendereditems",rendereditems)
  //   return <> {rendereditems} </>
  // }
  sendatatochild = () => {
    const author_id = this.props.match.params.author_id;
    console.log(author_id)
    if(author_id==1){
      // {this.Send_data_to_child1()}
      itemsofpdp = this.json_data_field.DeepLearning.map((item,index) => {
        return(
          <PLPproduct 
          product={item}
          key={index}
          index={index}
          getFavoritesCount={this.handleFavoritesCount}
          />
        )
      })
    }
    else if(author_id==2){
      // {this.Send_data_to_child2()}
      itemsofpdp = this.json_data_field.NeuralNetworking.map((item,index) => {
        return(
          <PLPproduct 
          product={item}
          key={index}
          index={index}
          getFavoritesCount={this.handleFavoritesCount}
          />
        )
      })
    }
    else if(author_id==3){
      // {this.Send_data_to_child3()}
      itemsofpdp = this.json_data_field.MelanomaSkinCancer.map((item,index) => {
        return(
          <PLPproduct 
          product={item}
          key={index}
          index={index}
          getFavoritesCount={this.handleFavoritesCount}
          />
        )
      })
    }
    return<>{itemsofpdp}</>
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="plp-div d-flex justify-content-center flex-wrap w-100">
        <div className="total-book-count w-100">
        {/* Welcome to PLP page 
        <Link to="/Login/Books/PLP/PDP"> click here to navigate to pdp page</Link> */}
        {/* <PLP_example /> */}
        Total Count &emsp;
        <GiBookshelf fill={this.heartclickvaluecount ? '#FF0000' : '#000'} />
        {this.heartclickvaluecount}
        {this.output()}
        </div>
        <div className="w-75 d-flex justify-content-center flex-wrap">
          {/* <PLPproduct /> */}
          {this.sendatatochild()}
          {/* {this.Send_data_to_child1()}
          {this.Send_data_to_child2()}
          {this.Send_data_to_child3()} */}
        </div>
      </div>
    )
  }
}

export default PLP
export { PLP }
