import React, {useState} from 'react';

const Boxgen = (props) => {

    const {boxes,setBoxes} = props

    const [color, setColor] = useState("")
    const [dimensions, setDimensions] = useState("") //probably bad practice to set a numberic state to "", but it gets overriden in the form and it shows the placeholder with it this way

    const submitBox = (e) => {
        e.preventDefault()

        setBoxes([...boxes,{
            "color": color,
            "size": dimensions,
        }])

        setDimensions("") //Im sure this is bad practice to set a numeric state, but it gets overriden in the form and it shows the placeholder with it this way
        setColor("")
        document.getElementById('focus').focus()
    }
    
    return(
        <div>
            <form onSubmit={submitBox}>
                <input id="focus" placeholder="Box color" type="text" value={color} onChange={e => {setColor(e.target.value)}}/>
                <input type="number" placeholder="Dimensions" value={dimensions} onChange={e => {setDimensions(e.target.value)}}/>
                <button type="submit">Add Box</button>
            </form>
        </div>
    );
};


export default Boxgen;