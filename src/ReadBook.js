import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    const {id} = useParams()
    const [reading,setReading] = useState("")
    console.log(reading)
    useEffect(()=>{
        fetchData()
      },[])
      async function fetchData(){
        await axios
       .get(`https://example-data.draftbit.com/books/${id}`)
        .then((res) => setReading(res.data))
       .catch((err) => console.log(err.data));
       }
  return (
    <div className="main" key={reading.id}>
      <h1>{reading.title}</h1>
      <p>{reading.description}</p>
    </div>
  );
};

export default ReadBook;
