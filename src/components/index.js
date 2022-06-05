import React from "react";
import { increment, decrement } from "../Actions/index";
import { useSelector, useDispatch } from "react-redux";

const Apps =()=>{
    const dispatch = useDispatch();
    const list = useSelector((e)=>e.reducer);
    return(
        <>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <input value={list} />
        <button onClick={()=>dispatch(increment(10))}>+</button>
        </>
    )
}
export default Apps;