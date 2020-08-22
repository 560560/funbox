import React, {Component} from 'react';
import {connect} from "react-redux";
import Goods from "./Goods";
import {getGoodsSelector} from "../redux/goods-selector";

class GoodsContainer extends Component {

    render() {
        return (
         <Goods {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    goods: getGoodsSelector(state)
})

export default connect(mapStateToProps, {})(GoodsContainer);