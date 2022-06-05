export const increment = (val)=>({
    type:"inc",
    payload: val,
});
export const decrement = ()=>({
    type:"dec"
});