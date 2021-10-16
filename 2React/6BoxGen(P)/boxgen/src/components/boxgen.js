import React, {useState} from 'react';

const Boxgen = (props) => {

    const [color, setColor] = useState("")
    const [dimensions, setDimensions] = useState(0)
    const [boxes, setBoxes] = useState([])

    const submitBox = (e) => {
        e.preventDefault()

        setBoxes([...boxes,{
            "color": color,
            "width": dimensions,
            "height": dimensions
        }])

        setDimensions(0)
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
            <div style={{margin:"0 auto", width:"50%"}}>
                {
                    boxes.map((box,index) => (
                        <div className="box" key={index} style={{
                            margin:'5px',
                            display:'inline-block',
                            backgroundColor:box.color,
                            width:box.width!==0?box.width+'px':null,
                            height:box.height!==0?box.height+'px':null}}>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


export default Boxgen;