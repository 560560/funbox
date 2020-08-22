let initialState = {
    goods: [
        {
            id: 0,
            name: "Нямушка",
            species: "с фуа-гра",
            description: "Сказочное заморское яство",
            additionalDescription: "Печень утки разварная с артишоками.",
            weight: "0,5",
            inStore: true,
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
            inStore: true,
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
            inStore: false,
            portions: "100 порций",
            gift: " 5 мышей в подарок заказчик доволен"
        },


    ]
}


const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state


    }
}


export default goodsReducer