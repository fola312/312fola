
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import recog from '../images/recog.png';
import wfd from '../images/WFD.png';
import robo from '../images/robo.png';
import jsb from '../images/jsb.png';

const BodyCard = () => {
    
  return (
      <div className='m-5 p-2 tc w=100vw justify-content-center'>
        <MDBRow className= 'd-flex justify-content-around m-5'>
            <MDBCol size="6" className='d-flex justify-content-center'>
                <MDBCard style={{ width: "22em" }}>
                    <MDBCardImage className="" src={recog} waves />
                    <MDBCardBody>
                    <MDBCardTitle>Face Recognition App</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='green' href="https://face-recog-app.netlify.com/" target="_blank" rel="noopener noreferrer">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/face-recog-api" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="6" className='d-flex justify-content-center'>
                <MDBCard style={{ width: "22em" }}>
                    <MDBCardImage className="img-fluid" src={wfd} waves />
                    <MDBCardBody>
                    <MDBCardTitle>What's For Dinner App</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='green' href="https://whats-for-dinner-fola.netlify.com/" target="_blank" rel="noopener noreferrer">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/dinnerTimeApp" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBRow className= 'd-flex justify-content-around m-5'>
            <MDBCol size="6" className='d-flex justify-content-center'>
                <MDBCard style={{ width: "22em" }}>
                    <MDBCardImage className="" src={robo} waves />
                    <MDBCardBody>
                    <MDBCardTitle>RobotFriends App</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content. Test
                    </MDBCardText>
                    <MDBBtn color='green' href="https://peaceful-robots-4d2d45.netlify.com/" target="_blank" rel="noopener noreferrer">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/robotfriends" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="6" className='d-flex justify-content-center'>
                <MDBCard style={{ width: "22em" }}>
                    <MDBCardImage className="img-fluid" src={jsb} waves />
                    <MDBCardBody>
                    <MDBCardTitle>Jumpshot Buddy App</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn color='green' href="#">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/face-recog-api" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
       
            

      </div>
    
    
  )
}

export default BodyCard;