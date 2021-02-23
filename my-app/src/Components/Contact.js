import React, { Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  
} from "react-router-dom";

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
        isRedirect:false
    }
  }
  isChange=(event) => {
    var ten = event.target.name
    var value = event.target.value
    this.setState({
      [ten]:value
    })
  }
  onSubmit = (event) => {
      event.preventDefault()
      this.setState({ 
        isRedirect:true 
      })
  }
  render() {
    if(this.state.isRedirect) {
      return <Redirect to="/" />
    }
    return (   
<div >
  <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">Trang Liên Hệ</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin contact */}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
      {/* Icon Divider*/}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form*/}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
          <form id="contactForm" name="sentMessage" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input onChange={(event)=>this.isChange(event)} name="fname" className="form-control" id="name" type="text" placeholder="Name" required="required" aria-invalid="false" />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input onChange={(event)=>this.isChange(event)} name="femail" className="form-control" id="email" type="email" placeholder="Email Address" required="required"  />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input onChange={(event)=>this.isChange(event)} name="fphone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required"  />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea onChange={(event)=>this.isChange(event)} name="fmess" className="form-control" id="message" rows={5} placeholder="Message" required="required"defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <br />
            <div id="success" />
            <div className="form-group"><button className="btn btn-primary btn-xl" onClick={(event)=>this.onSubmit(event)} id="sendMessageButton" type="submit">Send</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end contact */}
</div>
</div>
    )
  }
}




export default Contact
