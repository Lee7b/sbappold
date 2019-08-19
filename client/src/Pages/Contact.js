import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";

class Contact extends React.Component {
    render() {
    return (
            <Layout>
            <Form />
              <div className="container">       
                <MDBCol className="d-flex justify-content-center" style ={{ paddingTop: "20px" }}>
                <MDBCard style={{ width: "30rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Email</MDBCardTitle>
                    <MDBCardText>
                        You can reach me anytime at my email using the below button. Thanks.
                    </MDBCardText>
                    <MDBBtn href="mailto:sb@SamBurkett.com">Email</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
             </div> 
           </Layout>
    );
}
}

export default Contact;