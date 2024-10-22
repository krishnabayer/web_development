import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>
      <Outlet />
    </div>
  );
}
