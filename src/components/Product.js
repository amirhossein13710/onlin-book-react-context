import React, { useState,useContext} from "react";
import { DataContext } from "./context/Context";
import { Link } from "react-router-dom";
const Product = () => {
  const value = useContext(DataContext)
  const [products,setProducts] = value.products
  const addBook = value.addBook
  const [visible,setVisible] = useState(5)
  const showMoreItem = ()=>{
    setVisible(visible + 3)
  }
  return (
    <>
      <h1 className="eg-book">نمونه کتاب با زبان انگلیسی</h1>
    <div className="container">
      <div className="products">
        {products.slice(2,visible).map((product) => {
          return (
            <div className="products-card" key={product.id}>
              <div className="products-title">
                <h6>{product.title}</h6>
              </div>
              <div className="product-img">
                <img src={product.image_url} alt="#" />
              </div>
              <div className="numpage-rate">
                <Link className="product-details" to={`/product/${product.id}`}>مشاهده جزییات</Link>
                <p>امتیاز:{product.rating}</p>
              </div>
              <button className="add-book" onClick={()=>addBook(product.id)}>اضافه کردن به کتابخانه</button>
            </div>
          );
        })}
        <button className="show-more" onClick={showMoreItem}>دیدن نمونه های بیشتر</button>
      </div>
    </div>
    </>
  );
};
export default Product;