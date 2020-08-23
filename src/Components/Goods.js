import React from 'react';
import GoodsItem from "./GoodsItem";


const Goods = ({goods, selected, addSelectedProduct, removeSelectedProduct, hoverSelected, addHoverSelectedProduct, removeHoverSelectedProduct}) => {
    if (!goods) return "Loading..."
    else {

        return (
            <div className="goods__wrapper">
                <h1>Ты сегодня покормил кота?</h1>
                <div className="goods_block">
                    {goods.map(item => <GoodsItem key={item.id}
                                                  item={item}
                                                  selected={selected}
                                                  addSelectedProduct={addSelectedProduct}
                                                  removeSelectedProduct={removeSelectedProduct}
                                                  hoverSelected={hoverSelected}
                                                  addHoverSelectedProduct={addHoverSelectedProduct}
                                                  removeHoverSelectedProduct={removeHoverSelectedProduct}/>)}
                </div>

            </div>
        );
    }
}

export default Goods;