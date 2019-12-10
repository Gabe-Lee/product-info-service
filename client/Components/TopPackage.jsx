// This component contains Product Heading (title, mini descr, price, rating Div)
// star image needs to come from data base... url https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg
import React from "react";

const TopPackage = (props) => {

    // Determines if there are options for making modals.

    let colorOptArr = null;
    let sizeOptArr = null;
    let mattressOptArr = null;
    let legsOptArr = null;
    let slattedBedBaseOptArr = null;

    if (props.pColorOpt !== null) {
        colorOptArr = props.pColorOpt.split(', ')
    }
    if (props.pSizeOpt !== null) {
        sizeOptArr = props.pSizeOpt.split(', ');
    }
    if (props.pMattressOpt !== null) {
        mattressOptArr = props.pMattressOpt.split(', ');
    }
    if (props.pLegsOpt !== null) {
        legsOptArr = props.pLegsOpt.split(', ');
    }
    if (props.pSlattedBedBaseOpt !== null) {
        slattedBedBaseOptArr = props.pSlattedBedBaseOpt.split(', ');
    }


    return (

        <div className='topPackage'>
            {props.pNew === 1
                ? (<p className='newBox'>New</p>)
                : null}
            {props.pIkeaFamilySale === 1
                ? (<p className='familyLabel'>IKEA Family Sale</p>)
                : null}
            <h1 className='productHeading'>{props.pName}</h1>
            <div className='productDescr'>{props.pDescr}</div>
            <div className='productPrice'>{props.pOnSale === 1
                ? <span className='salePrice'>{`$${props.pPrice}`}</span>
                : `$${props.pPrice}`}</div>
            {props.pIkeaFamilySale === 1
                ? (<p className='dealLenTag'>{props.pDealLen}</p>)
                : null}
            {props.pIkeaFamilySale === 1
                ? (<p className='regPriceTag'>{props.pRegPrice}</p>)
                : null}
            <div className='productDescr'>
              <span className='starContainer'>
                  <span className='starColor'/>
                  <span className='star'/>
              </span>
              <span className='productDescrAvg'>{props.pReviewAvg < 0.1
                  ? ''
                  : `${props.pReviewAvg}`}</span>
                <span className='productMiniDescr'>{props.pReviewCounter !== 1
                    ? <a className='reviewPullDown'>{props.pReviewCounter} Reviews</a>
                    :  <a className='reviewPullDown'>{props.pReviewCounter} Review}</a>}</span>
            </div>
            {props.pSoldSeparateMessage !== null
                ? (<div className='warningDiv'><span className='warningLogo logoProps'/><ul className='warningUl'><li className='warningli'>{props.pSoldSeparateMessage}</li></ul></div>)
                : null}

            {colorOptArr !== null
                ? (<div className='optionContainer'>The price reflects selected options.
                    <div className='option'><span className='optionTitle'><span className='colorOptText'>Colors: </span><span className='optionText'>{colorOptArr[0]}</span></span><span className='openOptions' id='button' onClick={() => props.displayModal('myModalColor')}><svg className='optButton'><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"/></svg></span></div>
                   </div>)
                : null}
            {sizeOptArr !== null
                ? (<div className='optionContainer'>The price reflects selected options.
                    <div className='option'><span className='optionTitle'><span className='colorOptText'>Size: </span><span className='optionText'>{sizeOptArr[0]}</span></span><span className='openOptions' id='button' onClick={() => props.displayModal('myModalSize')}><svg className='optButton'><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"/></svg></span></div>
                </div>)
                : null}

            {mattressOptArr !== null
                ? (<div className='optionContainer'>The price reflects selected options.
                    <div className='option'><span className='optionTitle'><span className='colorOptText'>Mattress: </span><span className='optionText'>{mattressOptArr[0]}</span></span><span className='openOptions' id='button' onClick={() => props.displayModal('myModalMattress')}><svg className='optButton'><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"/></svg></span></div>
                </div>)
                : null}

            {legsOptArr !== null
                ? (<div className='optionContainer'>The price reflects selected options.
                    <div className='option'><span className='optionTitle'><span className='colorOptText'>Legs: </span><span className='optionText'>{legsOptArr[0]}</span></span><span className='openOptions' id='button' onClick={() => props.displayModal('myModalLegs')}><svg className='optButton'><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"/></svg></span></div>
                </div>)
                : null}

            {slattedBedBaseOptArr !== null
                ? (<div className='optionContainer'>The price reflects selected options.
                    <div className='option'><span className='optionTitle'><span className='colorOptText'>Slatted Bed Base: </span><span className='optionText'>{slattedBedBaseOptArr[0]}</span></span><span className='openOptions' id='button' onClick={() => props.displayModal('myModalSlattedBedBase')}><svg className='optButton'><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"/></svg></span></div>
                </div>)
                : null}

            {props.pBenefit !== null
                ? (<div className='benefitDescr'><span>{props.pBenefit} <a className='readMore'>Read More</a></span></div>)
                : null}

            {colorOptArr !== null ? (<div id="myModalColor" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => props.closeModal('myModalColor')}>X</span>
                    <p className='centerText'>Choose Color</p>
                    <div className='optHolder'>{colorOptArr.map((option, key) => {
                        return (<div key={key} className='outerAtag '><img className='optImage' src={'https://www.ikea.com/us/en/images/products/kvalfjord-bed-frame__0670606_PE715558_S5.JPG?f=xxxs'} /><span className='innerOpt'>{option}</span></div>)
                    })}</div>
                </div>
            </div>) : null}

            {sizeOptArr !== null ? (<div id="myModalSize" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => props.closeModal('myModalSize')}>X</span>
                    <p className='centerText'>Choose Size</p>
                    <div className='optHolder'>{sizeOptArr.map((option, key) => {
                        return (<div key={key} className='outerAtag '><img className='optImage' src={'https://www.ikea.com/us/en/images/products/kvalfjord-bed-frame__0670606_PE715558_S5.JPG?f=xxxs'} /><span className='innerOpt'>{option}</span></div>)
                    })}</div>
                </div>
            </div>) : null}

            {mattressOptArr !== null ? (<div id="myModalMattress" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => props.closeModal('myModalMattress')}>X</span>
                    <p className='centerText'>Choose Mattress</p>
                    <div className='optHolder'>{mattressOptArr.map((option, key) => {
                        return (<div key={key} className='outerAtag '><img className='optImage' src={'https://www.ikea.com/us/en/images/products/kvalfjord-bed-frame__0670606_PE715558_S5.JPG?f=xxxs'} /><span className='innerOpt'>{option}</span></div>)
                    })}</div>
                </div>
            </div>) : null}

            {legsOptArr !== null ? (<div id="myModalLegs" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => props.closeModal('myModalLegs')}>X</span>
                    <p className='centerText'>Choose Legs</p>
                    <div className='optHolder'>{legsOptArr.map((option, key) => {
                        return (<div key={key} className='outerAtag '><img className='optImage' src={'https://www.ikea.com/us/en/images/products/kvalfjord-bed-frame__0670606_PE715558_S5.JPG?f=xxxs'} /><span className='innerOpt'>{option}</span></div>)
                    })}</div>
                </div>
            </div>) : null}

            {slattedBedBaseOptArr !== null ? (<div id="myModalSlattedBedBase" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => props.closeModal('myModalSlattedBedBase')}>X</span>
                    <p className='centerText'>Choose Base</p>
                    <div className='optHolder'>{slattedBedBaseOptArr.map((option, key) => {
                        return (<div key={key} className='outerAtag '><img className='optImage' src={'https://www.ikea.com/us/en/images/products/kvalfjord-bed-frame__0670606_PE715558_S5.JPG?f=xxxs'} /><span className='innerOpt'>{option}</span></div>)
                    })}</div>
                </div>
            </div>) : null}
        </div>

    )

};

export default TopPackage