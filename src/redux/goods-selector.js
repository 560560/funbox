export const getGoodsSelector = (state) => {
    let preparedGoods = [...state.goodsPage.goods]

    return preparedGoods
}