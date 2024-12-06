import styled from "styled-components"
import logo from "../../images/logo.svg"


export default function Header(){
    return(
        <Cabecalho className="header">
            <img src={logo} alt="logo CronoEventos"/>
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
background-color:#FFC300;
width:100%;
height:109px;
display:flex;
justify-content:center;
align-items:center;
`