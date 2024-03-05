import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App() {
const [data,setData]=useState([]);
// useEffect(()=>{
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json =>setData(json.products))
// .catch(err=>console.log(err.message))
// },[])
useEffect(()=>{
    async function fetchData(){
      let response= await axios.get('http://dummyjson.com/products');
      setData(response.data.products)
    }
    fetchData();
},[])
// console.log(data);
  return (
    <>
   {
    data.map((value,index)=><ul key={index}><li >{value.title}</li></ul>)
   }
   </>
  )
}
