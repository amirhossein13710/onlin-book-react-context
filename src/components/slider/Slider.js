import React,{useContext} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DataContext from "../context/Context";
import "./Slider.css"


const Slider = () => {
  const value = useContext(DataContext)
  const [products,setProducts] = value.products

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3 
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="slider">
      <h2>تازه ترین ها</h2>
      <Carousel responsive={responsive}
      // infinite={true}
      showDots={true}
      >
        {products.slice(3,12).map((book) => {
          return (
              <img src={book.image_url} alt="#"  key={book.id}/>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
