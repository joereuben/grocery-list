import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import DisplayArea from './DisplayArea'
import InputArea from './InputArea'

function App() {

  const [item, setItem] = useState("")
  const [list, setList] = useState([])
  const [alert, setAlert] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")


  function deleteItem(id) {
    const newList = list.filter((item)=>{
      return item.id !== id
    })
    setList(newList)
  }

  function deleteAll() {
    setList([])
  }
  return (
    <div className="">
      <div className="">
        <div className="">
          <span>{alertMessage}</span>
        </div>
        <div className="">
          <h3>Grocery List</h3>
          <InputArea/>
          <DisplayArea/>
        </div>
      </div>
    </div>
  );
}

export default App;
