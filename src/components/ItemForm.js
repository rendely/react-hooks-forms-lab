import React from "react";

function ItemForm({formData, handleFormChange, onItemFormSubmit}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
