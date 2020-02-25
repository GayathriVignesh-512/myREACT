import React from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.scss'
const getEmailSchema = () => {
  const obj = {}
  obj['email'] = yup
    .string()
    .required('Email is requried')
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/, 'enter correct email id')
  return obj
}
const getPasswordSchema = () => {
  const obj = {}
  obj['Password'] = yup
    .string()
    .required('Password is requried')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      'enter valid password'
    )
  return obj
}
let x = {}
x = Object.assign({}, getEmailSchema(), getPasswordSchema())
const schema = yup.object(x)
class Login extends React.Component {
  handleData = (formdata) => {
    this.props.history.push('/Books')
    // alert("The given data: ",formdata.Password,formdata.email)
  }
  render() {
    return (
      <div className="whole-login w-50">
        <Formik
          initialValues={({ email: '' }, { Password: '' })}
          validationSchema={schema}
          onSubmit={this.handleData}>
          {props => {
            const {
              Values,
              handleSubmit,
              handleChange,
              errors,
              touched,
            } = props
            return (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <br />
                  <Form.Label>Email Id </Form.Label>
                  <br />
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="eg: abcxyz@gmail.com"
                    onChange={handleChange}
                  />
                  {errors['email'] && touched['email'] ? (
                    <div className="alert-danger">{errors['email']}</div>
                  ) : (
                    ''
                  )}
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group controlId="Password">
                  <br />
                  <Form.Label>Password </Form.Label>
                  <br />
                  <Field
                    name="Password"
                    type="Password"
                    // className="form-control mt-1 mb-1 form-control-sm"
                    placeholder="eg: abcXYZ@$7"
                    onChange={handleChange}
                  />
                  {errors['Password'] && touched['Password'] ? (
                    <div className="alert-danger">{errors['Password']}</div>
                  ) : (
                    ''
                  )}
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Button className="btn btn-secondary btn-large centerButton" type="submit">
                  (Submit it for validation to move on to Book Page) Login!!!
                </Button>
                {/* <Form.Group role="form">
                      <Link to="/Books">
                    <Button className="btn btn-info btn-large centerButton" type="submit">
                        (Book Page) Login!
                    </Button>
                      </Link>
                </Form.Group> */}
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  }
}
export default Login
export { Login }




// import React from 'react'
// import { Link } from 'react-router-dom'
// import './index.scss'
// import {Form, Button} from 'react-bootstrap'
// class Login extends React.Component{
//     render() {
//         return(
//             <div className="whole-login">
//                 <Form>
//                     <Form.Group controlId="formGroupEmail">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control type="email" placeholder="Please Enter Your Email" />
//                     </Form.Group>
//                     <Form.Group controlId="formGroupPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Please Enter Your Password" />
//                     </Form.Group>
//                     <Form.Group role="form">
//                         <Button className="btn btn-light btn-large centerButton" type="submit">
//                             <Link to="/Login/Books">Book Page</Link>
//                         </Button>
//                     </Form.Group>
//                 </Form>
//             </div>
//         )
//     }
// }
// export default Login
// export {Login}

