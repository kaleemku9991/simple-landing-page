import * as React from 'react';
import MyForm from "././Components/MyForm";
import Counter from "././Components/Counter";
import Layer2 from "././Components/Layer2";
import ChartContainer from "././Components/Chart";
import Appbar from "././Components/Appbar";
import Footer from "././Components/Footer";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <Appbar/>
      <Layer2/>
     <Counter/>
     <ChartContainer/>
     <MyForm/>
     <Footer/>
    </div>
  );
}

export default App;
