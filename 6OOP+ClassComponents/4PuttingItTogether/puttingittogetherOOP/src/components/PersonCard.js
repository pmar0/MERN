import React, {Component} from 'react';

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: this.props.age
    }
  }
  
  render(){
    const {firstName,lastName,hairColor} = this.props;

    return(
      <div className="Person">
        <h2>{lastName}, {firstName}</h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={()=> this.setState({age: this.state.age+1})}>Happy Birthday {firstName} {lastName}!</button>
      </div>
    );
  }
}

export default PersonCard;
