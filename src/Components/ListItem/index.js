import styled from "styled-components"

export default function ListItem({imagem}){
    return(
        <Li>
            <img src={imagem} alt="icone"/>
            <p>Inicio</p>
        </Li>
    )
}

const Li = styled.li`
    display: flex;
    width:109px;
    max-width:130px;
padding: 2px 8px;
justify-content: space-around;
align-items: center;
gap: 7px;
border-radius: 6px;
background: #5C4033;
color: #FFF8E7;
font-family: "Roboto Condensed";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`