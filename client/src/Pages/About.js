import React from "react";
import Layout from "../components/Layout";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";

class About extends React.Component {
    render() {
    return (
            <Layout>
              <div className="container">       
                <MDBCol className="d-flex justify-content-center" style ={{ paddingTop: "20px" }}>
                <MDBCard style={{ width: "30rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>About</MDBCardTitle>
                    <MDBCardText>
                          <MDBBtn href="https://drive.google.com/file/d/1iS0ZkN1wvduHc7CUnXjO65SqLDJIX6b-/view?usp=sharing">Resume</MDBBtn>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Nulla mattis nibh mattis velit varius consectetur. Nulla
                           dictum ante et nulla aliquam condimentum. Praesent 
                           ullamcorper porttitor ante quis semper. Pellentesque 
                           molestie magna vel sapien viverra venenatis. Nulla
                           efficitur ultricies imperdiet. Nunc vehicula sapien 
                           vitae arcu pretium, eget euismod purus sagittis. Fusce 
                           condimentum quis ante sed maximus.
                          <br></br><br></br>
                           Proin semper, libero nec facilisis condimentum, 
                           felis velit tempus metus, sed volutpat ex urna fringilla arcu. 
                           Phasellus iaculis auctor maximus. Fusce interdum, purus eu viverra
                           vulputate, leo nunc tempus lacus, a tincidunt libero erat id
                           arcu. Vestibulum erat lorem, egestas vitae urna ut, elementum 
                           venenatis nulla. Praesent imperdiet nisl vel velit elementum, 
                           eu sagittis nunc ultricies. Ut porta, risus mollis egestas
                           tincidunt, sapien leo malesuada urna, et dapibus sem nunc
                           vel leo. Aenean lacinia condimentum vestibulum. Fusce pharetra 
                           ultrices dolor vitae placerat. In nisl mauris, tincidunt nec 
                           lobortis nec, hendrerit ut urna. Quisque pulvinar mi sed massa
                           pulvinar posuere. Curabitur rutrum velit neque.
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
             </div> 
           </Layout>
    );
  }
}

export default About;