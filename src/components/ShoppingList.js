import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchKeyword] = useState("");
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  function handleSearchChange(event){
    setSearchKeyword(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFormChange(event){
    const key = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData, [key]: value
    })    
  }

  function onItemFormSubmit(event){
    event.preventDefault();
    addItem(formData);
    setFormData({
      id: uuid(),
      name: "",
      category: "Produce"
    })
  }
  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm formData={formData} handleFormChange={handleFormChange} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} searchKeyword={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.filter((item) => (
           item.name.match(search) || search === ""
        )
        ).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
