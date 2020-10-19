export const initialState = {
  basket: [],
  user: null
};

// Selector

export const TotalBasket = (basket) =>
  // resucer itrates to basket and telly up the total
  // Act as a for loop adding price by tellying
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // By applying this it will delete all the product of same id
      // ...state,
      // basket: state.basket.filter(item => item.id !== action.id)

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if(index >= 0) {
newBasket.splice(index,1);
      }else {
          console.warn(
              `Cant remove product (id: ${action.id}) as it is not in a basket!`
          )
      }
      return{
          ...state,
          basket:newBasket
      }

      case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};
export default reducer;
