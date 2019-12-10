import React from "react";


const MiddlePackage = (props) => {

    return (

        <div className='middlePackage'>

            <div className='flexContainerMiddle'>
                <div className='quantityTitle'>Quantity</div>
                <div className='quantityBox'>
                    <button className='decrQuant' disabled={props.pQuantity <= 1} onClick={props.qDec}>-</button>
                    <span id='Quantity'>{props.pQuantity}</span>
                    <button className='incQuant' onClick={props.qInc}>+</button>
                </div>
            </div>
            <div className='buttonContainer'>
                <button className='shoppingBagButton' onClick={props.recordShoppingCartVal}><svg className='shoppingBagSVG'><path d="M20 15h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm-6 2H6.441l-1.666-6h16.558L22 9h-5.323l-1.245-3.114L12.646 4h-1.292L8.569 5.886 7.322 9H2l2.544 8.633A2 2 0 0 0 6.441 19H14zM10.677 6h2.646l1.2 3H9.477z"/></svg>Add to shopping bag</button>
                <button className='shoppingListButton'><svg className='shoppingListSVG'><path d="M18,18h2v2H18v2H16V20H14V18h2V16h2ZM12,6H6V8h6ZM6,12H8V10H6ZM4,4H14l2-2H2V22H12V20H4ZM5.77,18.29l4.66-2.05L22,4.66,19.34,2,7.72,13.73Z"/></svg>Add to shopping list</button>
            </div>
            {props.pNotQuitePerfectBox !== 0
                ? (<div className='notQuitePerfectContainer'>

                    <div className='innerNotQuitePerfect'>
                        <div className='innerDiv'><span><svg className='notQuitePerfectIcon'><path d="M2,18H22v1H2Zm19-1V9l-1,1v7ZM4,7H15l1-1H3V17H4ZM9,17l4-2,9-9L20,4l-9,9ZM6,17H7V15H6Zm1-5H6v2H7ZM7,9H6v2H7Z"/></svg></span></div>
                        <div className='innerText'>
                            <h2 className='NotQuitePerfectHeadline'>Not quite perfect? Design your own!</h2>
                            <p className='NotQuitePerfectText'>
                                Use our planning tool to create your own customized combination.
                            </p>
                            <h4 className='openPlannerTag'>Open Planner --></h4>
                        </div>

                    </div>

                   </div>)
                : null}
        </div>

    )

};

export default MiddlePackage