
import './App.css';
import {useEffect, useState} from "react";
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";


function App() {



  return (
  <div className={'item'}>
      <Users/>
      <hr/>
      <Posts/>
      <hr/>
    <Comments/>
  </div>
  );
}

export default App;
