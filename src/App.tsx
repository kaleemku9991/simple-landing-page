import * as React from 'react';
import MyForm from "./MyForm";
import Counter from "./Counter";
import ChartContainer from "./Chart";

function App() {
  return (
    <div style={{textAlign:"center"}}>
     <Counter/>
     <MyForm/>
     <ChartContainer/>
    </div>
  );
}

export default App;
