import React from "react";


const MiddlePackage = (props) => {

    return (

        <div className='middlePackage'>
            <span className='quantityTitle'>Quantity</span>
            <div className='quantityBox'>
                <button className='decrQuant' disabled={props.pQuantity <= 1} onClick={props.qDec}>-</button>
                <span id='Quantity'>{props.pQuantity}</span>
                <button className='incQuant' onClick={props.qInc}>+</button>
            </div>
        </div>

    )

};

export default MiddlePackage