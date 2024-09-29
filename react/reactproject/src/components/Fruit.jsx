export default function Fruit({ name, price, emoji }) {
  console.log({ name, price, emoji });
  return (
    <li>
      {emoji} {name} : {price}
    </li>
  );
}
