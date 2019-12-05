import React from "react";


const LastPackage = (props) => {

    return (

        <div className='lastPackage'>
            <div className='deliveryBox'>{props.pAvaliableForDelivery === 1 ? (<span>Avaliable for delivery</span>) : (<span hidden/>)}</div>
            <div className='findStoreBox'><span>Check at your local store</span></div>
            <div className='assemblyBox'>{props.pAssembly === 1 ? (<span>Assembly</span>) : (<span hidden/>)}</div>
        </div>

    )

};

export default LastPackage