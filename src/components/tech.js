import React from 'react';
import {MDBIcon, MDBTooltip, MDBBtn, MDBContainer } from 'mdbreact';
import "./layout.css";

class Tech extends React.Component {
    render() {
        return (
            <MDBContainer className='mt-5 tc'>
                <div className='techy'>
                <h1 >Just a few of the libraries, services, and technologies I dabble in...</h1>
                <MDBTooltip placement="top">
                    <MDBBtn gradient='blue'><MDBIcon fab icon="html5" size='5x' className='m-3 ml-4 mr-4' /></MDBBtn>
                    <div>Html5</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="css3" size='5x' className='m-3' /></MDBBtn>
                    <div>CSS3</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="js-square" size='5x' className='m-3' /></MDBBtn>
                    <div>Javascript</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="bootstrap" size='5x' className='m-3' /></MDBBtn>
                    <div>Bootstrap</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="react" size='5x' className='m-3' /></MDBBtn>
                    <div>ReactJS</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon  icon="database" size='5x' className='m-3' /></MDBBtn>
                    <div>Database(postgres)</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="node" size='5x' className='mt-3 mb-3 mr-2 ml-2'  /></MDBBtn>
                    <div>NodeJS</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="npm" size='5x' className='mt-3 mb-3 mr-2 ml-2'  /></MDBBtn>
                    <div>NPM</div>
                </MDBTooltip>
                <MDBTooltip placement="top">
                    <MDBBtn color='primary'><MDBIcon fab icon="sass" size='5x' className='mt-3 mb-3 mr-2 ml-2' /></MDBBtn>
                    <div>SASS</div>
                </MDBTooltip>
                </div>

                    <div className='mobile'>
                    <h1 >Just a few of the libraries, services, and technologies I dabble in...</h1>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="html5" size='' className=''/></MDBBtn>
                        <div>Html5</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="css3" size='' className='' /></MDBBtn>
                        <div>CSS3</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="js-square" size='' className='' /></MDBBtn>
                        <div>Javascript</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="bootstrap" size='' className='' /></MDBBtn>
                        <div>Bootstrap</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="react" size='' className='' /></MDBBtn>
                        <div>ReactJS</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon  icon="database" size='' className='' /></MDBBtn>
                        <div>Database(postgres)</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="node" size='' className=''  /></MDBBtn>
                        <div>NodeJS</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="npm" size='' className=''  /></MDBBtn>
                        <div>NPM</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                        <MDBBtn floating size="" gradient="purple"><MDBIcon fab icon="sass" size='' className='' /></MDBBtn>
                        <div>SASS</div>
                    </MDBTooltip>

                    </div>
            </MDBContainer>

        )
    }
}

export default Tech