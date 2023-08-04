import React, { createContext, useState,useEffect } from "react";
import axios from "axios";
import API_URL from "../../data";
export const DataContext = createContext();
export const DataProvider = (props) => {
  
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData(){
    await axios
   .get(API_URL)
    .then((res) => setProducts(res.data))
   .catch((err) => console.log(err.data));
   }
   const [book,setBook] = useState([])
   const addBook = (id)=>{
    const check = book.every(item=>{
      return item.id !== id
    })
      if(check){
        const data = products.filter(product =>{
          return product.id === id
         })
         setBook([...book,...data])
      }else{
        alert("این کتاب در کتابخانه شما موجود است.")
      }
   }
   const deleteBook = (id)=>{
    if(window.confirm("آیا از حذف کتاب مطمعن هستید؟")){
      book.forEach((item,index)=>{
        if(item.id === id){
          book.splice(index,1)
        }
      })
      setBook([...book])
    }
   }
  const value = {
    products: [products,setProducts],
    book : [book,setBook],
    addBook : addBook,
    deleteBook: deleteBook,
  };

  return (
    <DataContext.Provider value={value}>
    {props.children}
    </DataContext.Provider>
  );
};
export default DataContext 