import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem
          setFoodId={setFoodId}
          foodData={foodData}
          food={food}
          key={food.id}
        />
      ))}
    </div>
  );
}
