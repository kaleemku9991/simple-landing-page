import react from "react";
import React, { useState , useEffect} from 'react';
import "./Form.css";
import { Button } from "@mui/material";

function Appbar() {
  return (
    <div style={{textAlign:"center"}}>
     <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      ssk
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="//github.io" target="_blank">Github</a>
    <a href="http://stackoverflow.com" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com" target="_blank">LinkedIn</a>
    <a href="https://codepen.io" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net" target="_blank">JsFiddle</a>
    <button>POST BLOG</button>
  </div>
  
</div>
    </div>
  );
}

export default Appbar;


