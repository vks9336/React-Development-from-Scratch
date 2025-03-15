export default function ShowData({ items, quantity }) {
  const totalCalories = items.reduce(
    (sum, item) => sum + Number(item.calories) * item.quantity,
    0
  );
  const totalProtein = items.reduce(
    (sum, item) => sum + Number(item.protein) * item.quantity,
    0
  );
  const totalCarbs = items.reduce(
    (sum, item) => sum + Number(item.carbs) * item.quantity,
    0
  );
  const totalFat = items.reduce(
    (sum, item) => sum + Number(item.fat) * item.quantity,
    0
  );

  return (
    <div className="show-data">
      <p>Total Calories : {totalCalories} 🍴</p>
      <p>Total Protein : {totalProtein}g</p>
      <p>Total Carbs : {totalCarbs}g</p>
      <p>Total Fat : {totalFat}g</p>
    </div>
  );
}
