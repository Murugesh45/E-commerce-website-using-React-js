const pro={
    products:[],
    cart:[]
}

const reducer1=(state=pro,action)=>{

     if(action.type==="products"){
            state={
                ...state,
                products:action.value
            }
        }else if(action.type==="Cart"){
        state={
            ...state,
            cart: [...state.cart,action.value]
        }
     }else if(action.type==="remove"){
        state={
            ...state,
            cart: state.cart.filter((pro)=>pro.id!=action.value)
        }
     }
    return state
}
export default reducer1