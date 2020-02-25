import React from 'react'
import './index.scss'
import { Nav, Navbar, Form, FormControl, Button, Container, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DataStore } from '../DataStore/index'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { IoMdClose as CloseIcon } from 'react-icons/io'
@observer
class Header extends React.Component {
  @observable setShowPopUpFormValue="true"
  setShowPopUpForm = () => {
    this.setShowPopUpFormValue = !this.setShowPopUpFormValue;
  }
  render() {
    return (
      <>
        <div className="header">
          {/* Welcome to Header */}
          <div className="imagepart">
            <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7QWNOC9EhEiyry0Fn0vmdI52VtBzwp_6rGi-tfFDexPt3UG1&s" alt="Book-Logo" /></Link>
          </div>
          <div className="contentpart p-0">
          THE DEEP LEARNING TECHNIQUE FOR MELANOMA DETECTION USING IOT
          </div>
        </div>
        
        <div>
          <Navbar bg="light" variant="light">
            <Link to="/Books">Authors:</Link>&emsp
            <Nav className="mr-auto">
              <Link to={`/PLP/1`}>DeepLearning</Link>&emsp
              <Link to={`/PLP/2`}>NeuralNetworking</Link>&emsp
              <Link to={`/PLP/3`}>MelanomaSkinCancer</Link>&emsp
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Link to="/DataStore"><Button variant="outline-primary">Search</Button></Link>
            </Form>
            <Modal className="newsletter p-0"
              show = {this.setShowPopUpFormValue}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
              <Modal.Header>Modal Header</Modal.Header>
              <Modal.Body>Modal Body
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWeHE7g-VTQO9ghDSU4EPqvGWJsbKULWJ2yAOO-JJHMAgdBw/viewform?embedded=true" width="640" height="512" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </Modal.Body>
                <div className="close-button">
                  <Button variant="tranparent" onClick={this.setShowPopUpForm}>
                    <CloseIcon className="close-consent-icon" />
                  </Button>
                </div>
              <Modal.Footer>Modal Footer</Modal.Footer>
            </Modal>
          </Navbar>
        </div>
        <div className="partlogin">
          {/* <Link to="/SignIn"><button>SignIn</button></Link> */}
          <Link to="/Login"><button>Login</button></Link>
          <Link to="/LogOut"><button>LogOut</button></Link>
          {/* <Link to="/SignUp"><button>SignUp</button></Link> */}
        </div>
          {/* <marquee behavior="scroll" direction="right" scrollamount="12">THE DUSTY BOOKSHELF</marquee> */}
          {/* <marquee behavior="scroll" direction="right" onMouseOut="this.start();" onMouseOver="this.stop();" scrollamount="12">THE DEEP LEARNING TECHNIQUE FOR MELANOMA DETECTION USING IOT</marquee> */}
          <marquee behavior="scroll" direction="right" scrollamount="12">THE DEEP LEARNING TECHNIQUE FOR MELANOMA DETECTION USING IOT</marquee>
      </>
    )
  }
}

export default Header
export { Header }
