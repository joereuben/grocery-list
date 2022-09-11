import React from "react";

export default function InputArea({ text, updateText, addToList, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addToList();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={(e) => updateText(e.target.value)}
          placeholder="e.g. Apple"
        />
        <button className="submit" type="submit">{isEditing ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}
