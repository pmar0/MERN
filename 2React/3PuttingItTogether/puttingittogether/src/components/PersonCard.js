import React, {useState} from 'react';

const PersonCard = (props) => {
  const {firstName, lastName, age, hairColor} = props;

  const [currentAge, setCurrentAge] = useState(age);

  const birthday = e =>{
    setCurrentAge(currentAge + 1)
  }

  return (
    <div className="Person">
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={birthday}>Happy Birthday {firstName}!</button>
    </div>
  );
}

export default PersonCard;
