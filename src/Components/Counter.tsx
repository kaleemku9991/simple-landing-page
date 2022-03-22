import react from "react";
import React, { useState , useEffect} from 'react';
import "./Form.css";
import { Button } from "@mui/material";
import logo from '../images/section5-pic.png';



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
      <h2 className="advice-h2">{advice}</h2>

      <Button variant="contained" onClick={ ()=> {
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
      }}>Click me</Button>

        
      </div>
 
    </div>
 );
}

export default Counter;