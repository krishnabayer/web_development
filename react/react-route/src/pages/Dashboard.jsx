import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
