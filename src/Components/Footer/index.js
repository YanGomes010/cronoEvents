import styled from "styled-components"


export default function Footer(){
    return(
        <Rodape className="rodape">
            <p>Desenvolvido por Yan</p>
        </Rodape>
    )
}

const Rodape = styled.footer`
background-color:#FFC300;
width:100%;
height:109px;
display:flex;
justify-content:center;
align-items:center;
`