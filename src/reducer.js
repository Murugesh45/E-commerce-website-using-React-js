const initial={
    isLogined: false,
    
}


const reducer=(state=initial,action)=>{
        if(action.type==="login"){
            state={
                isLogined:action.value
            }
        }else if(action.type==="logout"){
            state={
                isLogined:action.value

            }
        }

    return state

}
export default reducer;