import React, { Component } from 'react';
import Data from "../api/data/users.json";

class Users extends Component {
    render () {
        return (
            <div>
                {Data.map((postDetail, index) => {
                    return (
                        <div>
                        <h2>{postDetail.name}</h2>
                        <h2>{postDetail.email}</h2>
                        <h2>{postDetail.phone}</h2>
                        <br />
                        <br />
                        </div>
                     )
                })}

            </div>
        )
    }
}
export default Users;