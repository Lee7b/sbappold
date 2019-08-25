import React from 'react';
import Layout from '../components/Layout';
import { MDBIcon, MDBBtn } from 'mdbreact';
import { startGame } from '../components/RPS';

class Rpsgame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            userPoints: 0,
            computerPoints: 0,
        }
    }

    selectWeapon(choice) {
        this.setState({results: startGame(choice)}, function () {
            if (this.state.results[2] === 'You Win!') {
                this.setState({userPoints: this.state.userPoints + 1});
            }
            else if (this.state.results[2] === 'Opponent Wins') {
                this.setState({computerPoints: this.state.computerPoints + 1});
            }
        });
    }

    render() {
    return (
            <Layout>
                <div className="container text-center">
                    <br /><br />
                    <div><h2>{ this.state.results[2] }</h2></div>
                    <div><h1>SCORE</h1></div>
                    <div><h2> { this.state.userPoints } : { this.state.computerPoints } </h2></div>
                    <div>You picked: { this.state.results[0] }</div>
                    <div>They picked: { this.state.results[1] }</div>
                    <MDBBtn size="lg" outline color="primary" onClick={ () => this.selectWeapon('rock')}>
                        Rock <MDBIcon size="5x" far icon="hand-rock" className="ml-1" />
                    </MDBBtn>
                    <MDBBtn size ="lg" outline color="primary" onClick={ () => this.selectWeapon('paper')}>
                        Paper <MDBIcon size="5x" far icon="hand-paper" className="ml-1" />
                    </MDBBtn>  
                    <MDBBtn size="lg" outline color="primary" onClick={ () => this.selectWeapon('scissors')}>
                        Scissors <MDBIcon size="5x" far icon="hand-scissors" className="ml-1" />
                    </MDBBtn> 
                </div>
           </Layout>
    );
}
}

export default Rpsgame;