import React, {Component} from 'react';
import {connect} from "react-redux";
import Goods from "./Goods";
import {addHoverSelectedProduct, addSelectedProduct, removeHoverSelectedProduct, removeSelectedProduct} from "../redux/goods-reducer";

class GoodsContainer extends Component {

    render() {
        return (
         <Goods {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    goods: state.goodsPage.goods,
    selected: state.goodsPage.selected,
    hoverSelected: state.goodsPage.hoverSelected
})

export default connect(mapStateToProps, {addSelectedProduct, removeSelectedProduct, addHoverSelectedProduct, removeHoverSelectedProduct})(GoodsContainer);