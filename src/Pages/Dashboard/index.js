import { Outlet } from "react-router-dom";
import MenuDashboardComponent from "../../Components/MenuDashboard";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <>
   
      <MenuDashboardComponent />
      <Container>
      <Outlet />
      </Container>
    </>
  );
}

const Container = styled.main`
width:100%;
min-height:76vh;
height:100%;
`