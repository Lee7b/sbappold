import React from 'react';
import Layout from '../components/Layout';
//import Data from '../api/data/users.json';


class Users extends React.Component {
    state = {
        loading: true,
        person: null,
    };

    async componentDidMount() {
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false })
    }   

    render() {
        return (
            <Layout>
            <br />
            <div className = "container">
                <img className="img-fluid" src='./img/code2.png' style={{height: '500px', width: '600px'}} />
                {this.state.loading || !this.state.person ? <div>Loading random user. . .
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
                : <div>
                    <div><h3>This is a randomly generated user</h3></div>
                    <div>First Name: {this.state.person.name.first}</div>
                    <div>Last Name: {this.state.person.name.last}</div>
                    <div>Gender: {this.state.person.gender}</div>
                    <div>State: {this.state.person.location.state}</div>
                    <div>Email: {this.state.person.email}</div>
                  </div>}
            </div>
            <br /><br /><br />
            </Layout>
        )
    }
};

export default Users;

// class Users extends Component {
//     render () {
//         return (
//             <div>
//                 {Data.map((postDetail, index) => {
//                     return (
//                         <div>
//                         <h2>{postDetail.name}</h2>
//                         <h2>{postDetail.email}</h2>
//                         <h2>{postDetail.phone}</h2>
//                         <br />
//                         <br />
//                         </div>
//                      )
//                 })}

//             </div>
//         )
//     }
// }
//