import React from 'react';
import Layout from '../components/Layout';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIframe } from 'mdbreact';

class About extends React.Component {
    render() {
    return (
            <Layout>
              <div className="container">      
                <br /> <br />
                <MDBIframe src="https://drive.google.com/file/d/1Ie5j3OZTuFkfrjl2eh_UI5alhdJkgg-2/preview" />
                <MDBCol className="d-flex justify-content-center" style ={{ paddingTop: "20px" }}>
                <MDBCard style={{ width: "30rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>About</MDBCardTitle>
                    <MDBCardText>
                          I am currently a mainframe systems programmer, specializing in IBM zEnterprise systems. I have a computer science background
                          and a passion for programming and problem solving. The languages that I use the most on the job right now are JCL (Job Control Language), Assembler,
                          COBOL, and a little bit of Java. I also use Unix commands a fair bit. My favorite language to use on my personal projects is JavaScript. I love learning new tools and frameworks
                          that can help make me a better programmer! My plan is to keep working on this website so I can use it as a gauge to track my progress and
                          skill development. Thanks for checking me out and please email me if you have any questions or just want to say hi!
                          <br /> <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Nulla mattis nibh mattis velit varius consectetur. Nulla
                           dictum ante et nulla aliquam condimentum. Praesent 
                           ullamcorper porttitor ante quis semper. Pellentesque 
                           molestie magna vel sapien viverra venenatis. Nulla
                           efficitur ultricies imperdiet. Nunc vehicula sapien 
                           vitae arcu pretium, eget euismod purus sagittis. Fusce 
                           condimentum quis ante sed maximus.
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <br />
             </div> 
           </Layout>
    );
  }
}

export default About;