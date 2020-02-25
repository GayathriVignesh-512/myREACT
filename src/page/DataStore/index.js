import React from 'react'
import {Image} from 'react-bootstrap'
// import getCookie from './utils'
import {Table} from 'react-bootstrap'
class DataStore extends React.Component {
    tableContent = (productDetail) => {
            const individualProduct = productDetail.map((item,index) => {
                return(
                <tr>
                    <td>{index}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
                )
            })
        return <>{individualProduct}</>
    }
    render(){
        // const name=localStorage.getItem('name')
        // const price=localStorage.getItem('price')
        const product = localStorage.getItem('product')
        const productDetail = JSON.parse(product)
        return(
            <div className="text-center">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/> */}
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" roundedCircle />
                <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableContent(productDetail)}
                    </tbody>
                </Table>
                </div>                
            </div>
        )
    }
}
export {DataStore}
export default DataStore