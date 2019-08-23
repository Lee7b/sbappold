import React from 'react';
import { MDBContainer, MDBRow, MDBIcon, MDBInput, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';

const API_PATH = 'http://sbreactapp.herokuapp.com/api/contact';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject: '',
          message: '',
          error: null,
        }
      }
      handleFormSubmit( e ) {
        e.preventDefault();

        //Check if form fields are blank
        if (!this.state.name || !this.state.email || !this.state.subject || !this.state.message) {
          return alert('One or more fields are blank. Please try again');
        }

        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(response => {
            if (response.data.msg === 'success') {
              alert('Thank you for reaching out. I will get back to you asap!');
            } else {
              alert('Error sending message');
            }
          })
          .catch(error => this.setState({ error: error.message }));
      
      }
    render() {

        return (
          <div className="container">
            <br />
            <MDBContainer>
            {/* <MDBContainer className="d-flex justify-content-center"> */}
            <MDBRow>
                <MDBCol>
                {/* <MDBCol md="6"> */}
                    <p className="h5 text-center mb-4">Contact</p>
                    <div className="grey-text">
                    <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                    <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <MDBInput
                        label="Subject"
                        icon="tag"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={e => this.setState({ subject: e.target.value })}
                    />
                    <MDBInput
                        type="textarea"
                        rows="5"
                        label="Your message"
                        icon="pencil-alt"
                        onChange={e => this.setState({ message: e.target.value })}
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn outline color="secondary" onClick={e => this.handleFormSubmit(e)} value="Submit">
                        Send <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
           </div>
        );
    }
}

export default Form;
