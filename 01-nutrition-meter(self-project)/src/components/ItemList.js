import Item from "./Item";

export default function ItemList({
  items,
  onDelete,
  onEdit,
  quantity,
  onQuantityChange,
}) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
}
