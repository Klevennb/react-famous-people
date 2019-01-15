import React, { Component } from 'react';

class FamousPerson extends Component{
    constructor() {
        super();
        this.state = { famPerson: '', claimFame: '' }
    }
    personChange = (event) => {
        this.setState({ famPerson: event.target.value });
    }

    fameChange = (event) => {
        this.setState({ claimFame: event.target.value });
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Famous Person" onChange={this.personChange} />
                <input type="text" placeholder="Claim to Fame" onChange={this.fameChange} />
                <br />
                {this.state.famPerson} is famous because of {this.state.claimFame}
            </div>
        )
    }
}

export default FamousPerson;