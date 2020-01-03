// This component contains Product Heading (title, mini descr, price, rating Div)
// star image needs to come from data base... url https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg
import React from 'react';
import T from 'prop-types';

const TopPackage = ({
  pColorOpt, pSizeOpt, pMattressOpt, pLegsOpt, pSlattedBedBaseOpt, pNew, pIkeaFamilySale, pName,
  pDescr, pOnSale, pPrice, pDealLen, pRegPrice, pReviewAvg, pReviewCounter, scrollToReviewDrawer,
  pSoldSeparateMessage, pBenefit, displayModal, closeModal, pId,

}) => {
  // Determines if there are options for making modals.

  let colorOptArr = null;
  let sizeOptArr = null;
  let mattressOptArr = null;
  let legsOptArr = null;
  let slattedBedBaseOptArr = null;

  if (pColorOpt !== null) {
    colorOptArr = pColorOpt.split(', ');
  }
  if (pSizeOpt !== null) {
    sizeOptArr = pSizeOpt.split(', ');
  }
  if (pMattressOpt !== null) {
    mattressOptArr = pMattressOpt.split(', ');
  }
  if (pLegsOpt !== null) {
    legsOptArr = pLegsOpt.split(', ');
  }
  if (pSlattedBedBaseOpt !== null) {
    slattedBedBaseOptArr = pSlattedBedBaseOpt.split(', ');
  }


  return (

    <div className="b_topPackage">
      {pNew === 1
        ? (<p className="b_newBox">New</p>)
        : null}
      {pIkeaFamilySale === 1
        ? (<p className="b_familyLabel">IKEA Family Sale</p>)
        : null}
      <h1 className="b_productHeading">{pName}</h1>
      <div className="b_productDescr">{pDescr}</div>
      <div className="b_productPrice">
        {pOnSale === 1
          ? <span className="b_salePrice">{`$${pPrice}`}</span>
          : `$${pPrice}`}

      </div>
      {pIkeaFamilySale === 1
        ? (<p className="b_dealLenTag">{pDealLen}</p>)
        : null}
      {pIkeaFamilySale === 1
        ? (<p className="b_regPriceTag">{pRegPrice}</p>)
        : null}
      <div className="b_productDescr">
        <span className="b_starContainer">
          <span className="b_starColor" id="b_starColorID" />
          <span className="b_star" />
        </span>
        <span className="b_productDescrAvg">
          {pReviewAvg < 0.1
            ? ''
            : `${pReviewAvg}`}

        </span>
        <button type="button" onClick={() => scrollToReviewDrawer()} className="b_productMiniDescr">
          {pReviewCounter !== 1
            ? (
              <div className="b_reviewPullDown">
                {pReviewCounter}
                {' '}
Reviews
              </div>
            )
            : (
              <div className="b_reviewPullDown">
                {pReviewCounter}
                {' '}
Review
              </div>
            )}
        </button>
      </div>
      {pSoldSeparateMessage !== null
        ? (
          <div className="b_warningDiv">
            <span className="b_warningLogo b_logoProps" />
            <ul className="b_warningUl"><li className="b_warningli">{pSoldSeparateMessage}</li></ul>
          </div>
        )
        : null}

      {pBenefit !== null
        ? (
          <div className="b_benefitDescr">
            <span>
              {pBenefit}
              {' '}
              <div className="b_readMore">Read More</div>
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
                  <button type="button" className="b_openOptions" id="button" onClick={() => displayModal('b_myModalColor')}>
                    <svg className="b_optButton">
                      <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" />
                    </svg>
                  </button>
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
                  <button type="button" className="b_openOptions" id="button" onClick={() => displayModal('b_myModalSize')}>
                    <svg className="b_optButton">
                      <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" />
                    </svg>
                  </button>
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
                  <button type="button" className="b_openOptions" id="button" onClick={() => displayModal('b_myModalMattress')}>
                    <svg className="b_optButton">
                      <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" />
                    </svg>
                  </button>
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
                  <button type="button" className="b_openOptions" id="button" onClick={() => displayModal('b_myModalLegs')}>
                    <svg className="b_optButton">
                      <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" />
                    </svg>
                  </button>
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
                  <button type="button" className="b_openOptions" id="button" onClick={() => displayModal('b_myModalSlattedBedBase')}>
                    <svg className="b_optButton">
                      <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z" />
                    </svg>
                  </button>
                </div>
              )
              : null}
          </div>
        )
        : null}

      {colorOptArr !== null ? (
        <div id="b_myModalColor" className="b_modal">
          <div className="b_modal-content">
            <button type="button" className="b_close" onClick={() => closeModal('b_myModalColor')}>X</button>
            <p className="b_centerText">Choose Color</p>
            <div className="b_optHolder">
              {colorOptArr.map((option) => (
                <div key={`b_myModalSize_${pId}`} className="b_outerAtag ">
                  <img className="b_optImage" alt="" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${pId}/Image-1.jpeg`} />
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
            <button type="button" className="b_close" onClick={() => closeModal('b_myModalSize')}>X</button>
            <p className="b_centerText">Choose Size</p>
            <div className="b_optHolder">
              {sizeOptArr.map((option) => (
                <div key={`b_myModalSize_${pId}`} className="b_outerAtag ">
                  <img className="b_optImage" alt="" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${pId}/Image-1.jpeg`} />
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
            <button type="button" className="b_close" onClick={() => closeModal('b_myModalMattress')}>X</button>
            <p className="b_centerText">Choose Mattress</p>
            <div className="b_optHolder">
              {mattressOptArr.map((option) => (
                <div key={`b_myModalMattress_${pId}`} className="b_outerAtag ">
                  <img className="b_optImage" alt="" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${pId}/Image-1.jpeg`} />
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
            <button type="button" className="b_close" onClick={() => closeModal('b_myModalLegs')}>X</button>
            <p className="b_centerText">Choose Legs</p>
            <div className="b_optHolder">
              {legsOptArr.map((option) => (
                <div key={`b_myModalLegs_${pId}`} className="b_outerAtag ">
                  <img className="b_optImage" alt="" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${pId}/Image-1.jpeg`} />
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
            <button type="button" className="b_close" onClick={() => closeModal('b_myModalSlattedBedBase')}>X</button>
            <p className="b_centerText">Choose Base</p>
            <div className="b_optHolder">
              {slattedBedBaseOptArr.map((option) => (
                <div key={`b_myModalSlattedBedBase_${pId}`} className="b_outerAtag">
                  <img className="b_optImage" alt="" src={`https://mark-ikea-image-view.s3.us-east-2.amazonaws.com/${pId}/Image-1.jpeg`} />
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
TopPackage.propTypes = {
  pColorOpt: T.string.isRequired,
  pSizeOpt: T.string.isRequired,
  pMattressOpt: T.string.isRequired,
  pLegsOpt: T.string.isRequired,
  pSlattedBedBaseOpt: T.string.isRequired,
  pNew: T.number.isRequired,
  pIkeaFamilySale: T.number.isRequired,
  pName: T.string.isRequired,
  pDescr: T.string.isRequired,
  pOnSale: T.number.isRequired,
  pPrice: T.number.isRequired,
  pDealLen: T.string.isRequired,
  pRegPrice: T.string.isRequired,
  pReviewAvg: T.number.isRequired,
  pReviewCounter: T.number.isRequired,
  scrollToReviewDrawer: T.func.isRequired,
  pSoldSeparateMessage: T.string.isRequired,
  pBenefit: T.string.isRequired,
  displayModal: T.func.isRequired,
  closeModal: T.func.isRequired,
  pId: T.string.isRequired,
};

export default TopPackage;
