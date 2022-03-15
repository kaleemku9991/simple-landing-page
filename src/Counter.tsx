import react from "react";
import React, { useState , useEffect} from 'react';
import "./Form.css";
import { Button } from "@mui/material";



const Counter = () => {

const [count,setCount]=useState(0);
const [advice, setAdvice] = useState("");

const check =useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.slip.advice);
            setAdvice(json.slip.advice);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);


  return(
    <div>
      <div className="app-main">
      <p>You Click  {count}</p>
      <Button variant="contained" onClick={ ()=> setCount(count+1)}>Click me</Button>
      <h2>{advice}</h2>
      </div>
    </div>
 );
}

export default Counter;