import React, { useEffect, useRef, useState } from "react";
import { useCart,useDispatchCart } from "./ContextReducer";

export default function Card(props) {
let dispatch=useDispatchCart();
let data=useCart();
const priceRef = useRef();
let options = props.options;
let priceOptions = Object.keys(options);
const[qty,setqty]=useState("1")
const [size,setsize]=useState("")
const handleAddToCart= async()=>{
  let food = []
  for (const item of data) {
    if (item.id === props.foodItem._id) {
      food = item;

      break;
    }
  }
  if (food !== []) {
    if (food.size === size) {
      await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
      return
    }
    else if(!food.size !== size){
      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
       return 
    }// console.log(data);
    return
}
await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
}
let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
useEffect(()=>{
  setsize(priceRef.current.value)
},[])
  return (
    <div>
      <div className="card m-3 bg-dark text-success " style={{ width: "16rem", maxHeight: "410px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text text-success test-sm-start"> Barbequed pieces of Paneer/Chicken/Mutton were added.</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded"  onChange={(e)=>setqty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
             {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option> 
              })}
            </select>
            <div className=" d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
        <button className="btn btn-success justify-center ms-5 " onClick={handleAddToCart}>Add to Card</button>
        </div>
       </div>
    </div>
  );
}
