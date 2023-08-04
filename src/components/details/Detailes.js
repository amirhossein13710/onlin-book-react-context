import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";

const Detailes = () => {
  const [singleData, setSingleData] = useState("");
  const { id } = useParams();
  // const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    await axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => setSingleData(res.data))
      .catch((err) => console.log(err.data));
  }

  return (
    <div className="singleData-card" key={singleData.id}>
      <div className="singleData-title">
        <img src={singleData.image_url} alt="#" />
        <h4>نویسنده : {singleData.authors}</h4>
        <h6>{singleData.title}</h6>
        <p>
          {
            singleData.description
          }
            {/* dont working !!!!!!!!
            readMore 
            ? singleData.description 
            : `${singleData.description.substring(0,150)}`
            <button onClick={()=>setReadMore(!readMore)}>
              {
                readMore ? "نمایش کمتر" : "نمایش بیشتر"
              }
            </button> */}
        </p>
      </div>
      <div className="about-book">
        <p>تعداد صفحات : {singleData.num_pages}</p>
        <p>امتیاز : {singleData.rating}</p>
      </div>
    </div>
  );
};

export default Detailes;
