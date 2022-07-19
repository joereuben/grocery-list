import React from 'react'
import GroceryItem from './GroceryItem'

export default function DisplayArea({groceryItems}) {
  return (
    <div>
      {groceryItems.map((item)=>{
        return <GroceryItem key={item.id} item={item}/>
      })}
      <div>
        <button>Clear Items</button>
      </div>
    </div>

  )
}
