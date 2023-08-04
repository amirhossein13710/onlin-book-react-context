import React, { useContext } from "react";
import { DataContext } from "./context/Context";
import { Link } from "react-router-dom";

const YourLibrary = () => {
  
  const value = useContext(DataContext);
  const [book] = value.book;
  const deleteBook = value.deleteBook;
  const read = value.read;
  {
    if(book.length === 0){
      return <h1 className="empty-book">کتابخانه شما خالی است</h1>
    }
  }
  return (
    <div className="wrraper">
      {book &&
        book.map((item) => {
          return (
            <div className="products-card" key={item.id}>
              <div className="products-title">
                <h6>{item.title}</h6>
              </div>
              <div className="product-img">
                <img src={item.image_url} alt="#" />
              </div>
              <div className="btn-group">
                <Link
                  onClick={() => read(item.id)}
                  className="read-book"
                  to={`/your-library/${item.id}`}
                >
                  خواندن کتاب
                </Link>
                <button
                  className="delete-book"
                  onClick={() => deleteBook(item.id)}
                >
                  حذف از کتابخانه
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YourLibrary;
