import {Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import Events from "../Pages/Events";


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="/dashboard/eventos" element={<Events/>}/>
            </Route>
        </Routes>
    )
}