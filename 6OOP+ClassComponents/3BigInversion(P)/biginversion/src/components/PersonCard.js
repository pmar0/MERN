import React, {Component} from 'react';

class PersonCard extends Component {
  render(){
    const {firstName,lastName,age,hairColor} = this.props

    return(
      <div className="Person">
        <h2>{lastName}, {firstName}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;
