import styled from "styled-components"
import usuario from "../../images/usuario.svg"
import ListItem from "../../Components/ListItem"
import contratos from "../../images/contratos.svg"
import equipe from "../../images/equipe.svg"
import eventos from "../../images/eventos.svg"
import orcamento from "../../images/orcamento.svg"
import icon from "../../images/Icon.svg"
import sair from "../../images/sair.svg"

export default function Dashboard() {
    

    return (
        <MenuDashboard>
            <ContainerUser>
                <img style={{opacity:0.6}} src={usuario} alt="foto usuario" />
                <p>Yan Gomes Macêdo</p>
            </ContainerUser>
            <Ul>
                <ListItem title="Inicio" imagem={icon} />
                <ListItem title="Contratos" imagem={contratos} />
                <ListItem title="Equipe" imagem={equipe} />
                <ListItem title="Eventos" imagem={eventos} />
                <ListItem title="Orçamento" imagem={orcamento} />
                <Li>
                <img src={sair} alt="icone" />
                <p>Sair</p>
                </Li>
            </Ul>
        </MenuDashboard>
    )
}

const MenuDashboard = styled.div`
display:flex;
align-items:center;
Justify-content:space-between;
width: 100%;

padding: 20px 10px;
height: 34px;
height:100%;
flex-shrink: 0;
background-color: #FFDB83;
`

const ContainerUser = styled.div`
display:flex;
align-items:center;
Justify-content:center;
gap:9px;
`

const Li = styled.li`
    display: flex;
    width:100%;
    max-width:80px;
    padding: 4px 4px;
    justify-content: space-around;
    align-items: center;
    gap: 7px;
    border-radius: 6px;
    background: #FF5733;
    color: #FFF8E7;
    font-family: "Roboto Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Ul = styled.ul`
    display:flex;
    gap:16px;
    flex-wrap: wrap;
    min-width:52%;
    Justify-content:end;
`