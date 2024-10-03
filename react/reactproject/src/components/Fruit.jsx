export default function Fruit({ name, price, emoji }) {
  console.log({ name, price, emoji });
  return price > 5 ? (
    <li>
      {emoji} {name} : {price}
    </li>
  ) : (
    ""
  );
}
