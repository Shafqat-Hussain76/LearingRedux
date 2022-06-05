const initState = 10;

const reducer = (state = initState, action)=>{
    switch(action.type) {
        case "inc": {
            return state+ action.payload;  
        }
        case "dec": {
            return state-1;  
        }
        default: return state;
    }
}
export default reducer;