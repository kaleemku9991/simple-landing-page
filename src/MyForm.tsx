import * as React from "react";
import  "./Form.css";



function MyForm() {
  return (
  <div className="main">
    <div className="fl">
      <label>Name: </label>
      <input/>
    </div>
    <div className="fl">
      <label>FName: </label>
      <input/>
    </div>
    <div className="fl">
      <label>Email: </label>
      <input/>
    </div>
    <div className="fl">
      <label>Pass: </label>
      <input/>
    </div>


  </div>);
};
export default MyForm;