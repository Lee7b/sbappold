import React from 'react';
//import Data from "../api/data/users.json";


export default class Users extends React.Component {
    state = {
        loading: true,
        person: null,
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false })
    }   

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? <div>Loading random user. . .</div> 
                : <div>
                    <div>First Name: {this.state.person.name.first}</div>
                    <div>Last Name: {this.state.person.name.last}</div>
                    <div>Gender: {this.state.person.gender}</div>
                    <div>State: {this.state.person.location.state}</div>
                    <div>Email: {this.state.person.email}</div>
                  </div>}
            </div>
        )
    }
};


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
// export default Users;