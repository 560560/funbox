const ADD_SELECTED_PRODUCT = "goods-reducer/ADD_SELECTED_PRODUCT"
const REMOVE_SELECTED_PRODUCT = "goods-reducer/REMOVE_SELECTED_PRODUCT"
const ADD_HOVER_OUT_SELECTED_PRODUCT = "goods-reducer/ADD_HOVER_OUT_SELECTED_PRODUCT"
const REMOVE_HOVER_OUT_SELECTED_PRODUCT = "goods-reducer/REMOVE_HOVER_OUT_SELECTED_PRODUCT"

let initialState = {
    goods: [
        {
            id: 0,
            name: "Нямушка",
            species: "с фуа-гра",
            description: "Сказочное заморское яство",
            additionalDescription: "Печень утки разварная с артишоками.",
            weight: "0,5",
            inStock: true,
            portions: "10 порций",
            gift: "мышь в подарок"
        },
        {
            id: 1,
            name: "Нямушка",
            species: "с рыбой",
            description: "Сказочное заморское яство",
            additionalDescription: "Головы щучьи с чесноком да свежайшая сёмгушка.",
            weight: "2",
            inStock: true,
            portions: "40 порций",
            gift: "2 мыши в подарок"
        },
        {
            id: 2,
            name: "Нямушка",
            species: "с курой",
            description: "Сказочное заморское яство",
            additionalDescription: "Филе из цыплят с трюфелями в бульоне.",
            weight: "5",
            inStock: true,
            portions: "100 порций",
            gift: " 5 мышей в подарок заказчик доволен"
        },


    ],
    selected: [],
    hoverSelected: []
}


const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SELECTED_PRODUCT:
            return {
                ...state,
                selected: [...state.selected, action.id]
            }

        case REMOVE_SELECTED_PRODUCT:
            return {
                ...state,
                selected: [...state.selected.filter(item => item !== action.id)]
            }

        case ADD_HOVER_OUT_SELECTED_PRODUCT:
            return {
                ...state,
                hoverSelected: [...state.hoverSelected, action.id]
            }

        case REMOVE_HOVER_OUT_SELECTED_PRODUCT:
            return {
                ...state,
                hoverSelected: [...state.hoverSelected.filter(item => item !== action.id)]
            }
        default:
            return state


    }
}


/*ACTION CREATORS*/

export const addSelectedProduct = (id) => {
    return {type: ADD_SELECTED_PRODUCT, id}
}

export const removeSelectedProduct = (id) => {
    return {type: REMOVE_SELECTED_PRODUCT, id}
}


export const addHoverSelectedProduct = (id) => {
    return {type: ADD_HOVER_OUT_SELECTED_PRODUCT, id}
}

export const removeHoverSelectedProduct = (id) => {
    return {type: REMOVE_HOVER_OUT_SELECTED_PRODUCT, id}
}


export default goodsReducer