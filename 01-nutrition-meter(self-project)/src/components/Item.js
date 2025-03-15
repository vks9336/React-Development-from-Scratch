export default function Item({
  item,
  onDelete,
  onEdit,
  quantity,
  onQuantityChange,
}) {
  function handleDelete() {
    onDelete(item.id);
  }

  function handleAddQuantity() {
    onQuantityChange(item.id, item.quantity + 1);
  }

  function handleMinusQuantity() {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  }

  return (
    <div className="item-card">
      <div>
        <h3>{item.name}</h3>
        <p>Calories : {item.calories}</p>
        <p>Protein : {item.protein}g</p>
        <p>Carbs : {item.carbs}g</p>
        <p>Fat : {item.fat}g</p>
      </div>
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={handleMinusQuantity}>
          -
        </button>
        <span>{item.quantity}</span>
        <button className="quantity-btn" onClick={handleAddQuantity}>
          +
        </button>
      </div>
      <div>
        <button className="edit-btn" onClick={() => onEdit(item)}>
          Edit
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
