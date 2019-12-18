// This component contains Product Heading (title, mini descr, price, rating Div)
// star image needs to come from data base... url https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg
import React from 'react';

const TopPackage = (props) => {
  // Determines if there are options for making modals.

  let colorOptArr = null;
  let sizeOptArr = null;
  let mattressOptArr = null;
  let legsOptArr = null;
  let slattedBedBaseOptArr = null;

  if (props.pColorOpt !== null) {
    colorOptArr = props.pColorOpt.split(', ');
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

    <div className="b_topPackage">
      {props.pNew === 1
        ? (<p className="b_newBox">New</p>)
        : null}
      {props.pIkeaFamilySale === 1
        ? (<p className="b_familyLabel">IKEA Family Sale</p>)
        : null}
      <h1 className="b_productHeading">{props.pName}</h1>
      <div className="b_productDescr">{props.pDescr}</div>
      <div className="b_productPrice">
        {props.pOnSale === 1
          ? <span className="b_salePrice">{`$${props.pPrice}`}</span>
          : `$${props.pPrice}`}

      </div>
      {props.pIkeaFamilySale === 1
        ? (<p className="b_dealLenTag">{props.pDealLen}</p>)
        : null}
      {props.pIkeaFamilySale === 1
        ? (<p className="b_regPriceTag">{props.pRegPrice}</p>)
        : null}
      <div className="b_productDescr">
        <span className="b_starContainer">
          <span className="b_starColor" id="b_starColorID" />
          <span className="b_star" />
        </span>
        <span className="b_productDescrAvg">
          {props.pReviewAvg < 0.1
            ? ''
            : `${props.pReviewAvg}`}

        </span>
        <span onClick={() => props.scrollToReviewDrawer()} className="b_productMiniDescr">
          {props.pReviewCounter !== 1
            ? (
              <a className="b_reviewPullDown">
                {props.pReviewCounter}
                {' '}
Reviews
              </a>
            )
            : (
              <a className="b_reviewPullDown">
                {props.pReviewCounter}
                {' '}
Review
              </a>
            )}
        </span>
      </div>
      {props.pSoldSeparateMessage !== null
        ? (
          <div className="b_warningDiv">
            <span className="b_warningLogo b_logoProps" />
            <ul className="b_warningUl"><li className="b_warningli">{props.pSoldSeparateMessage}</li></ul>
          </div>
        )
        : null}

      {props.pBenefit !== null
        ? (
          <div className="b_benefitDescr">
            <span>
              {props.pBenefit}
              {' '}
              <a className="b_readMore">Read More</a>
            </span>

          </div>
        )
        : null}

      {colorOptArr !== null
            || sizeOptArr !== null
            || mattressOptArr !== null
            || legsOptArr !== null
            || slattedBedBaseOptArr !== null
        ? (
          <div className="b_optionContainer">
The price reflects selected options.
            {colorOptArr !== null
              ? (
                <div className="b_option">
                  <span className="b_optionTitle">
                      <span className="b_colorOptText">Colors: </span>
                      <span className="b_optionText">{colorOptArr[0]}</span>
                    </span>
                  <span className="b_openOptions" id="button" onClick={() => props.displayModal('b_myModalColor')}><svg className="b_optButton"><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" /></svg></span>
                </div>
              )
              : null}
            {sizeOptArr !== null
              ? (
                <div className="b_option">
                  <span className="b_optionTitle">
                      <span className="b_colorOptText">Size: </span>
                      <span className="b_optionText">{sizeOptArr[0]}</span>
                    </span>
                  <span className="b_openOptions" id="button" onClick={() => props.displayModal('b_myModalSize')}><svg className="b_optButton"><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" /></svg></span>
                </div>
              )
              : null}

            {mattressOptArr !== null
              ? (
                <div className="b_option">
                  <span className="b_optionTitle">
                      <span className="b_colorOptText">Mattress: </span>
                      <span className="b_optionText">{mattressOptArr[0]}</span>
                    </span>
                  <span className="b_openOptions" id="button" onClick={() => props.displayModal('b_myModalMattress')}><svg className="b_optButton"><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" /></svg></span>
                </div>
              )
              : null}

            {legsOptArr !== null
              ? (
                <div className="b_option">
                  <span className="b_optionTitle">
                      <span className="b_colorOptText">Legs: </span>
                      <span className="b_optionText">{legsOptArr[0]}</span>
                    </span>
                  <span className="b_openOptions" id="button" onClick={() => props.displayModal('b_myModalLegs')}><svg className="b_optButton"><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" /></svg></span>
                </div>
              )
              : null}

            {slattedBedBaseOptArr !== null
              ? (
                <div className="b_option">
                  <span className="b_optionTitle">
                      <span className="b_colorOptText">Slatted Bed Base: </span>
                      <span className="b_optionText">{slattedBedBaseOptArr[0]}</span>
                    </span>
                  <span className="b_openOptions" id="button" onClick={() => props.displayModal('b_myModalSlattedBedBase')}><svg className="b_optButton"><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" /></svg></span>
                </div>
              )
              : null}
          </div>
        )
        : null}

      {colorOptArr !== null ? (
        <div id="b_myModalColor" className="b_modal">
          <div className="b_modal-content">
            <span className="b_close" onClick={() => props.closeModal('b_myModalColor')}>X</span>
            <p className="b_centerText">Choose Color</p>
            <div className="b_optHolder">
              {colorOptArr.map((option, key) => (
                <div key={key} className="b_outerAtag ">
                  <img className="b_optImage" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${props.pId}/Image-1.jpeg`} />
                  <span className="b_innerOpt">{option}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      ) : null}

      {sizeOptArr !== null ? (
        <div id="b_myModalSize" className="b_modal">
          <div className="b_modal-content">
            <span className="b_close" onClick={() => props.closeModal('b_myModalSize')}>X</span>
            <p className="b_centerText">Choose Size</p>
            <div className="b_optHolder">
              {sizeOptArr.map((option, key) => (
                <div key={key} className="b_outerAtag ">
                  <img className="b_optImage" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${props.pId}/Image-1.jpeg`} />
                  <span className="b_innerOpt">{option}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      ) : null}

      {mattressOptArr !== null ? (
        <div id="b_myModalMattress" className="b_modal">
          <div className="b_modal-content">
            <span className="b_close" onClick={() => props.closeModal('b_myModalMattress')}>X</span>
            <p className="b_centerText">Choose Mattress</p>
            <div className="b_optHolder">
              {mattressOptArr.map((option, key) => (
                <div key={key} className="b_outerAtag ">
                  <img className="b_optImage" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${props.pId}/Image-1.jpeg`} />
                  <span className="b_innerOpt">{option}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      ) : null}

      {legsOptArr !== null ? (
        <div id="b_myModalLegs" className="b_modal">
          <div className="b_modal-content">
            <span className="b_close" onClick={() => props.closeModal('b_myModalLegs')}>X</span>
            <p className="b_centerText">Choose Legs</p>
            <div className="b_optHolder">
              {legsOptArr.map((option, key) => (
                <div key={key} className="b_outerAtag ">
                  <img className="b_optImage" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${props.pId}/Image-1.jpeg`} />
                  <span className="b_innerOpt">{option}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      ) : null}

      {slattedBedBaseOptArr !== null ? (
        <div id="b_myModalSlattedBedBase" className="b_modal">
          <div className="b_modal-content">
            <span className="b_close" onClick={() => props.closeModal('b_myModalSlattedBedBase')}>X</span>
            <p className="b_centerText">Choose Base</p>
            <div className="b_optHolder">
              {slattedBedBaseOptArr.map((option, key) => (
                <div key={key} className="b_outerAtag">
                  <img className="b_optImage" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${props.pId}/Image-1.jpeg`} />
                  <span className="b_innerOpt">{option}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      ) : null}
    </div>

  );
};

export default TopPackage;
