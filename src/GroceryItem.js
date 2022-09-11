import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function GroceryItem({ id, name, deleteItem, editItem }) {
  return (
    <div className="grocery_item">
      <div>
        <span>{name}</span>
      </div>

      <div>
        <button className="action_btn edit" onClick={() => editItem(id)} title="Edit">
          <AiFillEdit />
        </button>
        <button className="action_btn del" onClick={() => deleteItem(id)} title="Delete">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
