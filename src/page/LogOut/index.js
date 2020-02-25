import React from 'react'
import '../NotFound/index.scss'
import { Link } from 'react-router-dom'
class LogOut extends React.Component {
  render() {
    return (
        <div className="main">
      <div className="pagefor">
        {' '}
        Successfully Added to Cart!!!{' '}
        <h1>Please Click here to LogOut</h1>
        <Link to="/">
        <img className="imagefor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcdxZJgyvHNwC08Ag2oLlBsi91ibo54t_ybFZJNFaPuV2qjBDBw&s" alt="LogOut" />
        </Link>
      </div>
        </div>
    )
  }
}

export default LogOut
