import { useState } from "react";
import Form from "./Form";
import ItemList from "./ItemList";
import Logo from "./Logo";
import ShowData from "./ShowData";

export default function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleAddOrUpdate(item) {
    if (editingItem) {
      setItems((prevItems) =>
        prevItems.map((i) => (i.id === item.id ? item : i))
      );
      setEditingItem(null);
    } else {
      setQuantity(1);
      setItems((prevItems) => [
        ...prevItems,
        { ...item, id: crypto.randomUUID(), quantity: quantity },
      ]);
    }
    setShowForm(false);
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEdit(item) {
    setEditingItem(item);
    setShowForm(true);
  }

  function handleAddNew() {
    setEditingItem(null);
    setShowForm(true);
  }

  function handleQuantityChange(id, newQuantity) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  return (
    <div className="container">
      <Logo />
      {!showForm && (
        <button className="add-btn" onClick={handleAddNew}>
          Add New Item
        </button>
      )}
      {showForm && (
        <Form
          onAddOrUpdate={handleAddOrUpdate}
          editingItem={editingItem}
          quantity={quantity}
        />
      )}
      <ItemList
        items={items}
        onDelete={handleDelete}
        onEdit={handleEdit}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <ShowData items={items} />
    </div>
  );
}
