import React from "react";
import GroceryItem from "./GroceryItem";

export default function DisplayArea({
  groceryItems,
  deleteItem,
  deleteAll,
  editItem,
}) {
  return (
    <div>
      {groceryItems.map((item) => {
        return (
          <GroceryItem
            key={item.id}
            {...item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
      <div>
        <button onClick={() => deleteAll()} className="clear_btn">
          Clear Items
        </button>
      </div>
    </div>
  );
}
