import { useState } from "react";

export default function FormList({ onAddOrUpdate, editingItem, quantity }) {
  const [name, setName] = useState(editingItem ? editingItem.name : "");
  const [calories, setCalories] = useState(
    editingItem ? editingItem.calories : ""
  );
  const [protein, setProtein] = useState(
    editingItem ? editingItem.protein : ""
  );
  const [carbs, setCarbs] = useState(editingItem ? editingItem.carbs : "");
  const [fat, setFat] = useState(editingItem ? editingItem.fat : "");

  function isAlphabetic(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !calories || !protein || !carbs || !fat) return;

    if (!isAlphabetic(name)) {
      setName("");
      setCalories("");
      setProtein("");
      setCarbs("");
      setFat("");
      return;
    }

    const updatedItem = {
      id: editingItem ? editingItem.id : crypto.randomUUID(),
      name,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat),
      quantity,
    };

    onAddOrUpdate(updatedItem);

    setName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");
  }

  function handleClear() {
    setName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");
  }

  return (
    <form className="form-list" onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
        />
        <input
          type="number"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          placeholder="Protein(g)"
        />
        <input
          type="number"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
          placeholder="Carbs(g)"
        />
        <input
          type="number"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
          placeholder="Fat(g)"
        />
      </div>
      <div className="buttons">
        <button
          type="submit"
          className={editingItem ? "update-btn" : "add-btn"}
        >
          {editingItem ? "Update Item" : "Add Item"}
        </button>
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      </div>
    </form>
  );
}
