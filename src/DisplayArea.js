import React, {useContext} from "react";
import GroceryItem from "./GroceryItem";
import { UserContext } from "./App";

export default function DisplayArea({
  
  deleteItem,
  deleteAll,
  editItem,
}) {
  
  const list = useContext(UserContext)

  return (
    <div>
      {list.map((item) => {
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
          Clear All Items
        </button>
      </div>
    </div>
  );
}
