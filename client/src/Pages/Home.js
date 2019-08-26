import React from 'react';
import Layout from '../components/Layout';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from 'mdbreact';

class Home extends React.Component {
    render () {
    return (
        <Layout>
            {/* <MDBJumbotron fluid>
                <MDBContainer>
                    <h2 className="display-4">Welcome</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Pellentesque mollis suscipit aliquam. Suspendisse posuere 
                             turpis justo, vel ultrices nulla mollis eu.</p>
                </MDBContainer>
            </MDBJumbotron> */}

            <MDBContainer>
            <MDBRow>
                <MDBCol>
                <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: "url(./img/bg1.jpg)" }}>
                    <MDBCol className="py-5">
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Hello world!</MDBCardTitle>
                        <p className="mx-5 mb-5">
                            This website is a personal project of mine that I've been working on when time permits. It's a single page application that it is currently hosted on Heroku. It uses a React front-end 
                            with a node/express back-end. For the design I am using Material Design
                            bootstrap for React. I cannot say enough good things about these frameworks!
                            I plan on implementing a lot more components and features in the future so stay tuned! Thanks for checking me out.
                        </p>
                        <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
                    </MDBCol>
                    </MDBCol>
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
            </MDBContainer>

            <MDBContainer>
            <MDBRow>
                <MDBCol>
                <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: "url(./img/bg2.jpg)" }}>
                    <MDBCol className="py-5">
                        <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">There's no place like home</MDBCardTitle>
                        <p className="mx-5 mb-5">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Pellentesque mollis suscipit aliquam. Suspendisse posuere 
                             turpis justo, vel ultrices nulla mollis eu. Cras ac ipsum et 
                             nunc congue blandit eget vel libero. Donec ac sodales orci.
                              Aenean commodo lorem vel finibus lobortis. Nulla elit velit, 
                              venenatis quis congue sit amet, placerat quis augue. Ut rhoncus, 
                              orci eget sollicitudin mattis, dui mi eleifend risus, vel 
                        </p>
                        <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
                    </MDBCol>
                    </MDBCol>
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </Layout>
    )
  }
}

export default Home;