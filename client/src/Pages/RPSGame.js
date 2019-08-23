import React from 'react';
import Layout from '../components/Layout';
import { MDBIcon, MDBBtn } from 'mdbreact';
import { startGame } from '../components/StartRPS';

class RPSGame extends React.Component {
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
            if (this.state.results[2] === 'User Wins') {
                this.setState({userPoints: this.state.userPoints + 1});
            }
            else if (this.state.results[2] === 'Computer Wins') {
                this.setState({computerPoints: this.state.computerPoints + 1});
            }
        });
    }

    render() {
    return (
            <Layout>
                <div className="container">
                    <h1>Rock Paper Scissors Game</h1>
                    <div><h2>{ this.state.results[2] }</h2></div>
                    <div>You picked: { this.state.results[0] }</div>
                    <div>They picked: { this.state.results[1] }</div>
                    <div>Player: <b> { this.state.userPoints } </b> </div>
                    <div>Computer: <b> { this.state.computerPoints } </b> </div>
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

export default RPSGame;