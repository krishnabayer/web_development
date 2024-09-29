export default function Fruit() {
  const fruits = [
    { fruit: "apple", price: 10, emoji: "🍎" },
    { fruit: "banana", price: 4, emoji: "🍌" },
    { fruit: "mango", price: 14, emoji: "🥭" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.fruit}>
            {fruit.fruit} price is {fruit.price} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
