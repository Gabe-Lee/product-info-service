import React from 'react';
import axios from 'axios';
import TopPackage from './TopPackage';
import MiddlePackage from './MiddlePackage';
import LastPackage from './LastPackage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productId: '',
      productName: '',
      productDescr: '',
      productPrice: '',
      productDealLen: '',
      productRegPrice: '',
      productReviewAvg: 0,
      productReviewCounter: 0,
      productBenefit: '',
      productSizeOpt: '',
      productColorOpt: '',
      productMattressOpt: '',
      productLegsOpt: '',
      productSlattedBedBaseOpt: '',
      productIkeaFamilySale: 0,
      productOnSale: 0,
      productNew: 0,
      productNotQuitePerfectBox: 0,
      productAvaliableForDelivery: 0,
      productAssembly: 0,
      productSoldSeparateMessage: '',
      productQuantity: 1,
      shoppingCartVal: 0,
    };

    this.incQuantityCount = this.incQuantityCount.bind(this);
    this.decQuantityCount = this.decQuantityCount.bind(this);
    this.recordShoppingCartVal = this.recordShoppingCartVal.bind(this);
    this.onHoverColorChange = this.onHoverColorChange.bind(this);
    this.changeWidthOnStars = this.changeWidthOnStars.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  componentDidMount() {
    this.updatePage(3);
    window.addEventListener('productChanged', (event) => {
      const { productId } = event.detail;
      this.setState({
        productId,
      }, () => {
        this.updatePage(productId);
      });
    });
    window.addEventListener('newReview', (event) => {
      this.newReview(event.detail);
    });
  }

  decQuantityCount() {
    const { productQuant } = this.state;
    this.setState({ productQuantity: productQuant - 1 });
  }

  recordShoppingCartVal() {
    const { shoppingCartVal } = this.state;
    // console.log(Number(document.getElementById('Quantity').innerText));
    const numToAdd = Number(document.getElementById('b_Quantity').innerText);
    this.setState({ shoppingCartVal: shoppingCartVal + numToAdd });
  }

  incQuantityCount() {
    const { productQuant } = this.state;
    this.setState({ productQuantity: productQuant + 1 });
  }

  changeWidthOnStars() {
    const { productReviewAvg } = this.state;
    const newSizePercent = productReviewAvg * 20;
    document.getElementById('b_starColorID').style.width = `${newSizePercent}%`;
  }

  newReview(newReviewRating) {
    const { productReviewCounter, productReviewAvg, productId } = this.state;
    const productCounter = productReviewCounter;
    const totalReviewRating = productReviewAvg * productReviewCounter;
    this.setState({ productReviewCounter: productCounter + 1 }, () => {
      const newReviewRatingTotal = totalReviewRating + newReviewRating.newRating;
      const newReviewAvg = (newReviewRatingTotal / productReviewCounter).toFixed(1);
      this.setState({ productReviewAvg: newReviewAvg }, () => {
        axios.patch('/updateReviewInfo', { newReviewCount: productReviewCounter, newReviewAvg: productReviewAvg, productId }, { baseURL: 'http://ikeaproducts.us-east-2.elasticbeanstalk.com' })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  }


  updatePage(id) {
    axios.get(`/products/${id}`, { baseURL: 'http://ikeaproducts.us-east-2.elasticbeanstalk.com' })
      .then((productInfo) => {
        this.setState({
          productId: productInfo.data[0].id,
          productName: productInfo.data[0].name,
          productDescr: productInfo.data[0].miniDescription,
          productPrice: productInfo.data[0].price.toFixed(2),
          productDealLen: productInfo.data[0].dealLen,
          productRegPrice: productInfo.data[0].regPrice,
          productReviewAvg: productInfo.data[0].reviewAvg.toFixed(1),
          productReviewCounter: productInfo.data[0].reviewCount,
          productBenefit: productInfo.data[0].benefit,
          productSizeOpt: productInfo.data[0].size,
          productColorOpt: productInfo.data[0].color,
          productMattressOpt: productInfo.data[0].mattress,
          productLegsOpt: productInfo.data[0].legs,
          productSlattedBedBaseOpt: productInfo.data[0].slattedBedBase,
          productIkeaFamilySale: productInfo.data[0].ikeaFamilySale,
          productOnSale: productInfo.data[0].onSale,
          productNew: productInfo.data[0].new,
          productNotQuitePerfectBox: productInfo.data[0].notQuitePerfect,
          productAvaliableForDelivery: productInfo.data[0].avaliableForDelivery,
          productAssembly: productInfo.data[0].assembly,
          productSoldSeparateMessage: productInfo.data[0].soldSeparate,
        }, () => {
          this.changeWidthOnStars();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      productId, productName, productDescr, productPrice, productDealLen, productRegPrice,
      productReviewAvg, productReviewCounter, productBenefit, productSizeOpt, productColorOpt,
      productMattressOpt, productLegsOpt, productSlattedBedBaseOpt, productIkeaFamilySale,
      productOnSale, productNew, productSoldSeparateMessage, productQuantity,
      productNotQuitePerfectBox, productAvaliableForDelivery, productAssembly,
    } = this.state;

    const { incQuantityCount, decQuantityCount, recordShoppingCartVal } = this;

    return (
      <div className="b_mainContainer">
        <TopPackage
          pId={productId}
          pName={productName}
          pDescr={productDescr}
          pPrice={productPrice}
          pDealLen={productDealLen}
          pRegPrice={productRegPrice}
          pReviewAvg={productReviewAvg}
          pReviewCounter={productReviewCounter}
          pBenefit={productBenefit}
          pSizeOpt={productSizeOpt}
          pColorOpt={productColorOpt}
          pMattressOpt={productMattressOpt}
          pLegsOpt={productLegsOpt}
          pSlattedBedBaseOpt={productSlattedBedBaseOpt}
          pIkeaFamilySale={productIkeaFamilySale}
          pOnSale={productOnSale}
          pNew={productNew}
          pSoldSeparateMessage={productSoldSeparateMessage}
          displayModal={App.displayModal}
          closeModal={App.closeModal}
          scrollToReviewDrawer={App.scrollToReviewDrawer}
        />

        <MiddlePackage
          pQuantity={productQuantity}
          qInc={incQuantityCount}
          qDec={decQuantityCount}
          pNotQuitePerfectBox={productNotQuitePerfectBox}
          recordShoppingCartVal={recordShoppingCartVal}
        />

        <LastPackage
          pAvaliableForDelivery={productAvaliableForDelivery}
          pAssembly={productAssembly}
          displayDeliveryDrawer={App.displayDeliveryDrawer}
        />
      </div>

    );
  }
}
App.scrollToReviewDrawer = () => { document.body.scrollTop = 1350; };
App.displayModal = (id) => { document.getElementById(id).style.display = 'flex'; };
App.closeModal = (id) => { document.getElementById(id).style.display = 'none'; };
App.displayDeliveryDrawer = () => {
  if (document.getElementById('b_deliveryHiddenDiv').style.display === 'none') {
    document.getElementById('b_deliveryHiddenDiv').style.display = 'flex';
  } else {
    document.getElementById('b_deliveryHiddenDiv').style.display = 'none';
  }
};

export default App;
