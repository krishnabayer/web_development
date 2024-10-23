import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
  const [username, setusername] = useState();
  const navigate = useNavigate();
  function handleclick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      <h1>Homepage</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <button onClick={handleclick}>go to profile page</button>
    </div>
  );
}
