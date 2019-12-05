// This component contains Product Heading (title, mini descr, price, rating Div)
// star image needs to come from data base... url https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg
import React from "react";

const TopPackage = (props) => {
    let colorOptArr = props.pColorOpt.split(', ');

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
            {props.pColorOpt !== null
                ? (<div className='optionContainer'>The price reflects selected options.
                    <div className='option'><span className='optionTitle'><span className='colorOptText'>Colors: </span><span className='optionText'>{colorOptArr[0]}</span></span><span className='openOptions' id='button' onClick={props.displayModal}><svg className='optButton'><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"/></svg></span></div>
                   </div>)
                : null}
            {props.pBenefit !== null
                ? (<div className='benefitDescr'><span>{props.pBenefit} <a className='readMore'> Read More </a></span></div>)
                : null}

            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={props.closeModal}>X</span>
                    <p className='centerText'>Choose Color</p>
                </div>

            </div>
        </div>

    )

};

export default TopPackage