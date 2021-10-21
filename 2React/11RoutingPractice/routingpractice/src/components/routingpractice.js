import React from 'react';

const RoutingPractice = (props) => {
    const {data, textColor, bgColor} = props
    let display = ""
    const styling = {
        color: textColor,
        backgroundColor: bgColor
    }

    if (data){
        if (isNaN(data)){
            display = `The word is: ${data}`
        }
        else{
            display = `The number is: ${data}`
        }
    }
    else{
        display = "Welcome"
    }



    return(
        <div>
            <h2 style={styling}>{display}</h2>
        </div>
    );
};

export default RoutingPractice;