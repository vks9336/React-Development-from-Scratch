export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">Start adding items to your list 🚀</footer>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  const percentPacked = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {percentPacked === 100
        ? "You got everthing! Ready to go ✈️"
        : `💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${
            percentPacked > 0 ? percentPacked : 0
          }%)`}
    </footer>
  );
}
