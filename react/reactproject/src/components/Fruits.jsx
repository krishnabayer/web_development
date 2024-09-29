import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "apple", price: 10, emoji: "🍎" },
    { name: "banana", price: 4, emoji: "🍌" },
    { name: "mango", price: 14, emoji: "🥭" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
