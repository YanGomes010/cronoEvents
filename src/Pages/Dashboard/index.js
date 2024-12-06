import styled from "styled-components"
import usuario from "../../images/usuario.svg"
import ListItem from "../../Components/ListItem"

export default function Dashboard(){
    return(
        <MenuDashboard>
            <div>
                    <img src={usuario} alt="foto usuario"/>
                    <p>Yan Gomes Macêdo</p>
                </div>
            <ul>
                <ListItem imagem={usuario}/>
            </ul>
        </MenuDashboard>
    )
}

const MenuDashboard = styled.div`
width: 100%;
height: 34px;
flex-shrink: 0;
background-color: #FFDB83;

`