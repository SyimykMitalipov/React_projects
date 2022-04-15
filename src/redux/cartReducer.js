const initialState = {
    cartItems: []
}


export const cartReducer = (state = initialState, action) => {
    console.log(action.payload , 'payloaddd')
    console.log({...state});
    switch(action.type){
        case 'ADD_TO_CART' : {
            return{
            ...state,cartItems : [...state?.cartItems, action.payload]
            
        }
        
        }
        case 'DELETE_FROM_CART' : {
            return{
            ...state,cartItems : state?.cartItems.filter((obj) => obj.id !== parseInt(action.id))
            
            
            
        }
        
        }
        
        default :  return state
    }

}