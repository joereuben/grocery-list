import React, { useState, useEffect, createContext } from "react";

import "./App.css";
import DisplayArea from "./DisplayArea";
import InputArea from "./InputArea";

const LS = "LocalStorage"
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function getStoredList() {
  let list = localStorage.getItem(LS)
  console.log(list)
  if(list)  return JSON.parse(list)
  else return []
}

export const UserContext = createContext()

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(getStoredList());
  const [alert, setAlert] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdded, setIsAdded] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [editingId, setEditingId] = useState("");

  function deleteItem(id) {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
    setAlertMessage("Item Removed From The List");
    setIsAdded(false);
    setAlert(true);
  }

  function deleteAll() {
    setList([]);
    setAlertMessage("All Items Removed");
    setIsAdded(false);
    setAlert(true);
  }

  function updateText(text) {
    setText(text);
    // console.log(text)
  }

  function editItem(id) {
    setIsEditing(true);
    setEditingId(id);
    const groceryItem = list.find((item) => {
      return item.id === id;
    });
    // console.log(groceryItem.name)
    setText(groceryItem.name);
  }

  function addToList() {
    if(text === "") return
    if (!isEditing) {
      const newItem = { id: uid(), name: text };
      setList([...list, newItem]);
      setAlertMessage("Item Added To The List");
    } else {
      const items = list.map((item) => {
        if (item.id === editingId) {
          item.name = text;
        }
        return item;
      });
      setList(items);
      setIsEditing(false);
      setAlertMessage("Item Changed");
    }

    setText("");
    setIsAdded(true);
    setAlert(true);
  }

  useEffect(() => {
    const to = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(to);
    };
  }, [alert]);

  useEffect(() => {  
    localStorage.setItem(LS, JSON.stringify(list))
    
  }, [list]);

  

  return (
    <UserContext.Provider value={list}>

      <div className="container">
        <div className="block">
          <div className="">
            <div className={`alert ${isAdded ? "added" : "removed"}`}>
              <span>{alert && alertMessage}</span>
            </div>
            <div className="">
              <h1>Grocery List</h1>
              <div>
                <code>
                  Designed and developed by <a href="https://freecodecamp.org/reujoe" rel='noopener noreferrer' target="_blank" className="me">Joseph Amofa</a> 
                </code>
              </div>
              <InputArea
                text={text}
                updateText={updateText}
                addToList={addToList}
                isEditing={isEditing}
              />
              <DisplayArea
                
                deleteItem={deleteItem}
                deleteAll={deleteAll}
                editItem={editItem}
              />
            </div>
          </div>
        </div>
      </div>
      
    </UserContext.Provider>

    
  );
}

export default App;
