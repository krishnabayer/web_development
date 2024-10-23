import { useParams } from "react-router";

export default function Products() {
  const { id } = useParams();
  return <div>Hi hello i am product page - {id} </div>;
}
