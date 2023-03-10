import styled from "styled-components"


export const Cabecalho = styled.div`
  background-color: #151515;
  width:100%;
  height:72px;
  color:white;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const Corpo = styled.div`
  background-color: #333333;
  height:100vh;
  color:white;
  display:flex;
  justify-content: center;
`;

export const Logo = styled.img`
height:40px;
margin-left: 28px;
`;

export const Final = styled.div`
display:flex;
align-items: center;
padding-right: 17px;
`;

export const Icone = styled.div`
background-color:white;
width:10px;
height:10px;
`;

export const Foto = styled.img`
width:53px;
height:53px;
margin-left: 16px;
border-radius: 26.5px;
background-color:white;
`;

export const Conteudo = styled.div`
font-size: 43px;
font-weight: bold;
color:#FFFFFF;
padding-top:150px;
`;

export const Postar = styled.div`
width:611px;
height:209px;
background-color: #FFFFFF;
border: rgba(0, 0, 0, 0.25);
border-radius: 16px;
display:flex;
`;

export const Publi = styled.div`
display:flex;
width:611px;
background-color:#171717;
height:auto;
border-radius: 16px;
margin-top: 30px;
`;

export const Esquerda = styled.div`
height:100%;
padding-left: 18px;
padding-top: 16px;
padding-right: 18px;
`;

export const Direita = styled.div`
height:100%;
width:100%;
padding-top: 21px;
`;

export const FotoPerfil = styled.img`
width:50px;
height:50px;
border-radius: 26.5px;
background-color:greenyellow;
`;

export const Link = styled.input`
font-size: 20px;
line-height: 30px;
color:#949494;
border:hidden;
border-radius: 5px;
background-color: #EFEFEF;
padding-left: 12px;
margin-bottom: 5px;
width:100%;

::placeholder{
color:#949494;
font-size: 15px;
line-height: 18px;
}`;

export const Titulo = styled.h1`
font-size: 20px;
color:#707070;
line-height: 24px;
`;

export const Descricao = styled.input`
font-size: 20px;
line-height: 30px;
color:#949494;
border:hidden;
border-radius: 5px;
background-color: #EFEFEF;
padding-left: 12px;
height: 66px;
margin-bottom: 5px;
width: 100%;

::placeholder{
color:#949494;
font-size: 15px;
line-height: 18px;
}
`;

export const Form = styled.form`
display:flex;
flex-direction: column;
height: auto;
padding-right: 22px;
align-items: flex-end;
margin-top: 10px;
`;

export const Botao = styled.button`
width:112px;
height:31px;
background-color: #1877F2;
border:hidden;
border-radius: 5px;
font-size: 14px;
line-height: 16.8px;
color:#FFFFFF;
`;

export const Nome = styled.div`
color:#FFFFFF;
font-size:19px;
line-height:22.8px;
`;

export const Texto = styled.div`
color:#B7B7B7;
font-size:17px;
line-height:20.4px;
`;

export const Site = styled.div`
color:#B7B7B7;
font-size:17px;
line-height:20.4px;
`;


