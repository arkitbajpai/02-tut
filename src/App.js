
//import './App.css';
import From from './Form';
import { useState, useEffect } from 'react';
import List from './List';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType,setReqType] = useState("users");
  const [items, setItems] = useState([]);
  useEffect(() => {

   const fetchItems = async () => {
    try{
    const resposne = await fetch(`${API_URL}${reqType}`);
    const data= await resposne.json();
    setItems(data);
    }catch(err){
      console.error(err); 
    }
   }

    fetchItems();
  },[reqType])
  return (
    <div className="App">
      <From reqType={reqType} setReqType={setReqType}/>
      <List items={items}/>
    </div>
  );
}

export default App;
