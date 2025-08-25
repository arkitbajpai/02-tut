import logo from './logo.svg';
import './App.css';
import From from './Form';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [req,type,setReqType] = useState("users");
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
  },{reqType})
  return (
    <div className="App">
      <From reqType={reqType} setReqType={setReqType}/>
    </div>
  );
}

export default App;
