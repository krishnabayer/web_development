import { useLocation } from "react-router-dom";

export default function profile() {
  const location = useLocation();
  const { username } = location.state || {};
  return (
    <div>
      <h1>profile</h1>
      <h2>my name : {username}</h2>
    </div>
  );
}
