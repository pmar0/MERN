import React, {useState} from 'react';

const Display = (props) => {

    const {boxes} = props

    return(
        <>
            <div style={{margin:"0 auto", width:"50%"}}>
                {
                    boxes.map((box,index) => (
                        <div className="box" key={index} style={{
                            margin:'5px',
                            display:'inline-block',
                            backgroundColor:box.color,
                            width:box.size!==0?box.size+'px':null,
                            height:box.size!==0?box.size+'px':null}}>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Display;