import React from 'react'

export default function GroceryItem({item}) {
  return (
    <div>
      <p>{item.name}</p>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}
