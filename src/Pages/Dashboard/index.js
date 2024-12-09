import { Outlet } from "react-router-dom";
import MenuDashboardComponent from "../../Components/MenuDashboard";

export default function Dashboard() {
  return (
    <>
      <MenuDashboardComponent />
      <Outlet />
    </>
  );
}
