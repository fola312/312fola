import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
import Fola from '../images/fola-min.png'
import Skyline from '../images/skyline.jpg'

class Card extends Component { 
state = {
  flipped: false
}

handleFlipping = () => {
  this.setState({ flipped: !this.state.flipped });
}

render() {
  const colStyle = { maxWidth: "22rem", maxHeight: "26rem" };

  return (
    <MDBRow className='mt-5'>
      <MDBCol className="d-flex justify-content-center" style={{ minHeight: '26rem' }}>
        <MDBRotatingCard flipped={this.state.flipped} className=" text-center h-100 w-100" style={colStyle}>
          <MDBCard className="face front ">
            <MDBCardUp>
              <img className="card-img-top" src={Skyline} alt="" />
            </MDBCardUp>
            <MDBAvatar className="mx-auto white" circle>
              <img src={Fola} alt="" className="rounded-circle" />
            </MDBAvatar>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Fola Orokunle</h4>
              <p className="font-weight-bold blue-text">Web developer</p>
              <a href="#!" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
                <MDBIcon icon="redo" /> rotate me
              </a>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="face back mt-5">

            <MDBCardBody>            
              <h4 className="font-weight-bold">About me</h4>
              <hr />
              <p>
              After a decade plus of  working in Operations and 
              Recruiting Management i’ve followed my passion for 
              technology and helping people into the world of development. 
              I’d love to hear from you. 
              </p>
              <hr />
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <a href="https://twitter.com/fola312" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg tw-ic">
                    <MDBIcon icon="twitter" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:fola.orokunle@gmail.com" className="p-2 fa-lg tw-ic">
                    <MDBIcon icon="envelope" className="amber-text pr-3"/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/page-2" className="p-2 fa-lg tw-ic">
                    <MDBIcon icon="mobile-alt" className="cyan-text pr-3" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/fola312" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg li-ic">
                    <MDBIcon icon="linkedin" brand />
                  </a>
                </li>
              </ul>
              <a href="#!" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
                <MDBIcon icon="undo" /> Click here to rotate back
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBRotatingCard>
      </MDBCol>
    </MDBRow>
    )
  }
}

export default Card;