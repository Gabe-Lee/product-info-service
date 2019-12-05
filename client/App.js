import React from 'react'
import axios from 'axios'
import TopPackage from "./Components/TopPackage.jsx";
import MiddlePackage from "./Components/MiddlePackage.jsx";
import LastPackage from "./Components/LastPackage.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: '',
            productName: '',
            productDescr: '',
            productPrice: '',
            productDealLen: '',
            productRegPrice: '',
            productReviewAvg: '',
            productReviewCounter: '',
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
            productQuantity: 1
        };

        this.incQuantityCount = this.incQuantityCount.bind(this);
        this.decQuantityCount = this.decQuantityCount.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    incQuantityCount() {
       let productQuant = this.state.productQuantity;
       this.setState({productQuantity: productQuant+1})
    }

    decQuantityCount() {
        let productQuant = this.state.productQuantity;
        this.setState({productQuantity: productQuant-1})
    }

    displayModal() {
        console.log('DISPLAYING MODEL');
        document.getElementById('myModal').style.display = 'flex'
    }

    closeModal() {
        console.log('CLOSING MODEL');
        document.getElementById('myModal').style.display = 'none'
    }

    componentDidMount() {
        axios.get('/displayProduct')
            .then((productInfo) => {
                this.setState({productId: productInfo.data[0].id,
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
                                     productSoldSeparateMessage: productInfo.data[0].soldSeparate})
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className='mainContainer'>
                <TopPackage pName={this.state.productName}
                            pDescr={this.state.productDescr}
                            pPrice={this.state.productPrice}
                            pDealLen={this.state.productDealLen}
                            pRegPrice={this.state.productRegPrice}
                            pReviewAvg={this.state.productReviewAvg}
                            pReviewCounter={this.state.productReviewCounter}
                            pBenefit={this.state.productBenefit}
                            pSizeOpt={this.state.productSizeOpt}
                            pColorOpt={this.state.productColorOpt}
                            pMattressOpt={this.state.productMattressOpt}
                            pLegsOpt={this.state.productLegsOpt}
                            pSlattedBedBaseOpt={this.state.productSlattedBedBaseOpt}
                            pIkeaFamilySale={this.state.productIkeaFamilySale}
                            pOnSale={this.state.productOnSale}
                            pNew={this.state.productNew}
                            pSoldSeparateMessage={this.state.productSoldSeparateMessage}
                            displayModal={this.displayModal}
                            closeModal={this.closeModal}/>

                <MiddlePackage pQuantity={this.state.productQuantity}
                               qInc={this.incQuantityCount}
                               qDec={this.decQuantityCount}
                               pNotQuitePerfectBox={this.state.productNotQuitePerfectBox}/>

                <LastPackage pAvaliableForDelivery={this.state.productAvaliableForDelivery}
                             pAssembly={this.state.productAssembly} />
            </div>

        )
    }


}

export default App