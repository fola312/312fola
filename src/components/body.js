
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon, MDBContainer } from 'mdbreact';
import Recog from '../images/Recog.png';
import WFD from '../images/WFD.png';
import Robo from '../images/Robo.png';
import jump from '../images/jump.png';

const BodyCard = () => {
    
  return (
    <MDBContainer className="tc">
        <MDBRow className= 'mt-5' style={{ minHeight: '26rem' }}>
            <MDBCol size="12" xs="12" md="6" className='d-flex flex-center mt-4'>
                <MDBCard style={{ widthMin: "400px", width: "22em", height: "33em" }}>
                    <MDBCardImage className="" src={Recog} waves />
                    <MDBCardBody>
                    <MDBCardTitle>Face Recognition App</MDBCardTitle>
                    <MDBCardText>
                        Built with the Clarifai API, Postgres and React this App will detect faces in images.
                    </MDBCardText>
                    <MDBBtn color='green' href="https://face-recog-app.netlify.com/" target="_blank" rel="noopener noreferrer">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://www.youtube.com/watch?v=b-gi4yrZzPE&feature=youtu.be" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/face-recog-api" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="12" xs="12" md="6"className='d-flex flex-center mt-4'>
                <MDBCard style={{ width: "22em", height: "33em" }}>
                    <MDBCardImage className="img-fluid" src={WFD} waves />
                    <MDBCardBody>
                    <MDBCardTitle>What's For Dinner App</MDBCardTitle>
                    <MDBCardText>
                        For nights when I don't know what to cook, this App will select a random 
                        favorite recipe and quickly show me what ingredient I need. 
                    </MDBCardText>
                    <MDBBtn color='green' href="https://whats-for-dinner-fola.netlify.com/" target="_blank" rel="noopener noreferrer">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://youtu.be/3TERHuI54LM" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/dinnerTimeApp" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBRow className= 'mt-5 mb-5'>
            <MDBCol size="12" xs="12" md="6" className='d-flex flex-center mt-4'>
                <MDBCard style={{ width: "22em", height: "33em"  }}>
                    <MDBCardImage className="" src={Robo} waves />
                    <MDBCardBody>
                    <MDBCardTitle>RobotFriends App</MDBCardTitle>
                    <MDBCardText>
                        Simple App designed to search through a custom JSON API. 
                        It use the Robohash API for random robot generating.
                    </MDBCardText>
                    <MDBBtn color='green' href="https://peaceful-robots-4d2d45.netlify.com/" target="_blank" rel="noopener noreferrer">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://youtu.be/hQQXGApcKKg" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/robotfriends" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="12" xs="12" md="6" className='d-flex flex-center mt-4'>
                <MDBCard style={{ width: "22em", height: "33em"  }}>
                    <MDBCardImage className="img-fluid" src={jump} waves />
                    <MDBCardBody>
                    <MDBCardTitle>Jumpshot Buddy App</MDBCardTitle>
                    <MDBCardText>
                        One of my most ambitious and exciting projects. This App is designed to (ultimately) help anyone improve their Jumpshot.
                    </MDBCardText>
                    <MDBBtn color='green' href="#">See It!  </MDBBtn>
                    <MDBBtn color="red" href="https://youtu.be/D6O6J7V4T-U" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="youtube" size='2x' className="mr-1" /> Watch!
                    </MDBBtn>
                    <a href="https://github.com/fola312/face-recog-api" target="_blank" rel="noopener noreferrer"><MDBIcon  fab icon="github" size='2x' className="ml-1 m-2"/></a>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    
    
  )
}

export default BodyCard;