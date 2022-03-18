import * as React from 'react';
import MyForm from "././Components/MyForm";
import Counter from "././Components/Counter";
import ChartContainer from "././Components/Chart";
import Appbar from "././Components/Appbar";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <Appbar/>
     <Counter/>
     <ChartContainer/>
     <MyForm/>
    </div>
  );
}

export default App;
