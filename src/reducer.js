export const initialState = {
    basket: [
        
    ],
    no: 0,
};

export const getBasketTotal = (basket) => {
    let amount = 0;
    basket.map(item => amount+=parseInt(item.price));
    return amount;
}
export const getBasketOldTotal = (basket) => {
    let amount = 0;
    basket.map(item => amount+=parseInt(item.oldprice));
    return amount;
}

const reducer = (state, action) => {
    //console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                no: state.no + 1
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0) {
                newBasket.splice(index, 1);
            }
            return { ...state,
                basket: newBasket
            };
        default:
            return state;
    }
    
}

export default reducer;