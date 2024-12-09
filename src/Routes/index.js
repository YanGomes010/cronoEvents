import {Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import Equipe from "../Pages/Equipe";


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="/dashboard/equipe" element={<Equipe/>}/>
            </Route>
        </Routes>
    )
}