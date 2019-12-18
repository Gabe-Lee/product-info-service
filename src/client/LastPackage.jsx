import React from "react";


const LastPackage = (props) => {

    return (

        <div className='b_lastPackage'>
            {props.pAvaliableForDelivery === 1
                ? (<div className='b_deliveryBox'>
                    <div className='b_deliveryHeader'>
                        <button aria-expanded='false' className='b_deliveryButton' onClick={props.displayDeliveryDrawer}>
                            <div className='b_deliveryItems'>
                                <span className='b_deliveryLogos'>
                                    <svg className='b_deliveryTruckLogo'>
                                        <path d="M20,12,17,9H14V7H2V17H4a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0h2V12.82ZM8,16H7.72A2,2,0,0,0,5,15.26a2,2,0,0,0-.74.74H3V8H13v8Zm13,0H19.72a2,2,0,0,0-2.7-.74,2,2,0,0,0-.74.74H14V10h2.59l2.7,2.71.15.14.18.08,1.38.56Z" />
                                    </svg>
                                    <img className='b_deliveryGreenDot' src='https://www.ikea.com/us/en/resources/svg/product-availability/stock-high-thin-24.50443bcac2b4be21.svg'/>
                                </span>
                                Avaliable for delivery
                                <svg className='b_deliveryArrow'>
                                    <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div id='b_deliveryHiddenDiv' aria-hidden='true'>Add to cart for delivery details.</div>
                </div>)
                : null}

            <div className='b_findStoreBox'>
                <div className='b_findStoreHeader'>
                    <div className='b_findStoreItems'>
                        <span className='b_findStoreLogos'>
                            <svg className='b_findStoreHouseLogo'>
                                <path d='M2,6V19H21V6Zm9,12H7V13h4Zm5,0H12V13h4Zm1,0V12H6v6H3V7H20V18Z'/>
                            </svg>
                            <svg className='b_findStoreAlertIcon'>
                                <path d='M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z' fill='#0058A3'/>
                                <path d='M9 12H7V7h2v5zM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z' fill='white'/>
                            </svg>
                        </span>
                        <a className='b_Links'>Check at your local store</a>
                    </div>
                </div>
            </div>

            <div className='b_assemblyBox'>
                {props.pAssembly === 1
                    ? (<div className='b_assemblyHeader'>
                         <div className='b_assemblyItems'>
                             <span className='b_assemblyLogos'>
                                 <img className='b_assemblyRabbitLogo' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4MzYuMyA3NjAuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODM2LjMgNzYwLjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNTRBRjM1O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzA4LjIsMzIxLjRjLTU5LjQtOTguNi03NC45LTI0LjItMTMwLjctMTE3LjljLTM5LjItNjYuMS0xMjcuNy0xNTItMTgwLjMtMTE1LjZsLTEyLjUsOC45CgkJYy0xMC4zLTMuMi0yMC4yLTIuOS0yOC42LDMuNWMtNi4yLDUuMy05LjEsMTMuNS03LjcsMjEuNWMzLDEzLjYsOS42LDI4LjYsMzQuNyw1MS44Yy04MC0xNC41LTE2MS44LDE2LjMtMjEyLjMsODAuMQoJCWMtNTEuNiwwLTY2LjcsNTAuNC00MC4zLDgwLjJjLTM4LjEsMTQxLjQsNzAuNiwyNzcuNSwyMTIuNiwyNzcuNWM4MC40LDAsMTU0LjYtNDQsMTkzLjItMTE0LjVjNjYuMSwzLjcsNzItNDkuMywyMy40LTY1LjIKCQljNi4xLTMyLjItOS42LTEuNSw3My44LTkuNEM3MDIuNiw0MTguMiw3NDMuNywzNzkuMiw3MDguMiwzMjEuNEw3MDguMiwzMjEuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OTUsMzMwLjJjLTU0LjQtOTAuNC03My4yLTI1LjItMTMxLjMtMTE4LjRDNDk0LjYsOTguOSw0MTAsODMuMSw0MTAsMTAwLjdjMCwwLDk1LjUsNTEuMiwxNDEuMiwxMzkKCQljMSwxLjYtMS41LDMuMS0yLjUsMS41Yy0zOS40LTQ5LjgtMTYxLTE0NC4yLTE4MS45LTEyNy42Yy0xNy4yLDEzLjcsNzQuMywxMDAuNSwxNDguOCwxMzguNGM2LjQsMy4xLTQuNywyMC4yLTMyLjksMTkuMgoJCWMtMzkuNCwwLTc2LjktNTguMS0xNjItNTkuMmMtNTIuMy0wLjctMTAyLjMsMjEuOC0xMzYuNCw2MS41Yy0wLjYsMC41LTEuNSwwLjUtMi4yLDBjLTM2LjEtMTktNjcuNCwzMi0zMy43LDU0LjYKCQljMS4zLDAuOCwxLjksMi40LDEuNCwzLjhDOTYuNyw0OTguMiwyNzguMiw2MjguMSw0MTIuNCw1NDAuN2M2NS41LTM5LjUsNTcuMS05MC45LTMxLjgtNTYuMWMtMC4yLDAuMS0wLjQsMC4xLTAuNiwwLjEKCQljLTEuOCwwLTIuOS0yLjItMS42LTMuNmM2Mi41LTY0LjksMTUuNS0xNzMuMS03My43LTE3My4xYzAsMC0wLjEsMC0wLjEsMGMtNDEuNy0yLjUtODAuNSwyMi41LTk1LjUsNjEuNWMtMC4zLDEuMS0xLjMsMS45LTIuNCwxLjkKCQljLTEuNCwwLTIuNS0xLjEtMi41LTIuNWMwLTAuMiwwLTAuNCwwLjEtMC42YzEwLjYtNDguNyw1My04NC40LDEwMi43LTg2LjdjODguOC01LjMsMTQ4LjYsOTIuMiwxMDEuNSwxNjkuMQoJCWMtMiwyLjgsMS4zLDYuNCw0LjMsNC42YzE4LjctMTAuNCwzMy4xLTI3LjEsMzMuMS0yNy4xYzAuNCwwLDAuOSwwLjIsMS4xLDAuNWM1NS4zLDYwLjYsMTI2LjIsNjEuNSwxMjguMSwzOC4xCgkJYzIuMi0yNi43LTY2LjMtOS40LTcwLjYtNzUuOGMwLTEuMywxLjUtMiwyLjUtMS4yYzguOSw3LjMsMjIuMiwxLjgsMjMuNS05LjVjMC4yLTEuMSwxLjYtMS42LDIuNS0wLjkKCQljMjkuNSwyOC44LDU5LjUsMzAuOCwxMDAuNCwyNy43QzY5MS45LDQwMy43LDcxOS4xLDM3MS42LDY5NSwzMzAuMkw2OTUsMzMwLjJ6IE02NDEuOSwzMzAuMmMtNi42LTAuOS0xNC45LTYtMTYuOC0xMy44CgkJYy0wLjItMC45LTAuMy0xLjgtMC4zLTIuOGMwLTYuNSw1LjMtMTEuOCwxMS44LTExLjhjMC4yLDAsMC4zLDAsMC41LDBjOC4zLDAuMywxNS40LDYuNCwxNy4xLDE0LjZjMC4yLDAuOSwwLjIsMS45LDAuMywyLjgKCQlDNjU1LjMsMzI2LjEsNjQ4LjMsMzMxLjEsNjQxLjksMzMwLjJMNjQxLjksMzMwLjJ6Ii8+CjwvZz4KPC9zdmc+Cg=='/>
                                 <svg className='b_assemblyAlertIcon'>
                                     <path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" fill='#0058A3' />
                                     <path d='M9 12H7V7h2v5zM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z' fill='white'/>
                                 </svg>
                             </span>
                             <a className='b_Links'>Assembly</a>
                         </div>
                       </div>)
                    : null}
            </div>
        </div>

    )

};

export default LastPackage