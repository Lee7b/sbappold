import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

export default class Footer extends React.Component { 
    render () {
        return (
          <MDBFooter color="blue-grey darken-3" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Sam Burkett</h5>
                  <p>
                    Thank you for visiting my website. If you have any inquiries please use the Contact page. I will respond to emails promptly! Thanks!
                  </p>
                 </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                    <ul>
                      <li className="list-unstyled">
                      <a href="/">Home</a>
                      </li>
                      <li className="list-unstyled">
                      <a href="https://www.linkedin.com/in/samuel-burkett/">LinkedIn</a>
                      </li>
                      <li className="list-unstyled">
                      <a href="#!">GitHub</a>
                      </li>
                      <li className="list-unstyled">
                      <a href="#!">Facebook</a>
                     </li>
                   </ul>
                </MDBCol>
             </MDBRow>
            </MDBContainer>
           <div className="footer-copyright text-center py-3">
             <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.SamBurkett.me"> SamBurkett.me </a>
             </MDBContainer>
           </div>
          </MDBFooter>
        )
    }
}