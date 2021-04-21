import React from "react";
import styled from 'styled-components';
import Logo from '../Assets/site-logo-corebiz-preto-cinza2.svg';
import Vtex from '../Assets/vtex-1.svg';
import palette from '../Styles/Variables';
import { FaEnvelope, FaHeadset } from 'react-icons/fa';

const FooterSection = styled.section`
width:100%;
height:213px;
display:flex;
background-color:${palette.secundaryColor};
color:${palette.primaryColor};
justify-content:space-around;
align-items:center;
font-family:'Nunito', sans-serif;
@media (max-width:530px){
    
    flex-wrap: wrap;
    height:auto;
    width:auto;
    
}

`;
const LeftContainer = styled.div`
width:200px;
height: 160px;
h1{
   margin-bottom:5px;
   text-align:left;
   letter-spacing: 1.5px;
}

p{
    margin-bottom:5px;
    text-align:left;
}

@media (max-width:530px){
    width:220px;
   justify-content:left;
   margin-right:70px;
   margin-bottom:20px;
    h1{
        margin-top:20px;
    }
    p{
        font-size:1.2rem;  
    }
}
`;
const CenterContainer = styled.div`
display:block;
width:300px;
height: 130px;
color:${palette.primaryColor};
button {
width:250px;
height: 38px;
padding:5px;
margin-bottom:20px;
border-radius:5px;
text-transform:uppercase;
font-size:1.2rem;
font-family:'Nunito', sans-serif;
font-weight:bold;
border:none;
text-align:left;


span {
   
margin:  0 20px;
}

}

`;

const RightContainer = styled.div`
width:230px;
height:70px;
display:inline-block;
a{
    display:block;
    text-decoration:none;
    font-size:1.0rem;
    color:${palette.primaryColor};

}
img {
    width:70px;

}
`;

const Content = styled.div`

margin-left:10px;
display:inline-block;
width:90px;




`;
const SpanContainer =styled.div`
margin-left:25px;

display:inline-block;
`;

const LineContainer = styled.div`
background-color:${palette.primaryColor};
width:30px;
height: 4px;
margin-bottom:10px;
`;
const Footer = () => {

    return (
        <>
            <FooterSection>

                <LeftContainer>
                    <h1>Ubicación</h1>
                 <LineContainer></LineContainer>
                    <p>
                        Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                    <p> Alphavile SP</p>
                    <p>
                        brasil@corebiz.ag
                            </p>
                    <p>+55 11 3090 1039</p>
                </LeftContainer>
                <CenterContainer>
                    <button className=""><span><FaEnvelope /></span><SpanContainer>Contactanos</SpanContainer> </button>
                    <button className=""><span><FaHeadset /></span>Habla con un consultor</button>
                </CenterContainer>
                <RightContainer>
                    <Content>
                    <a href="#" className="">Desarrollado por </a><img src={Logo} alt="" />
                    </Content>
                    <Content>
                    <a href="#" className="">Powered by </a> <img src={Vtex} alt="" />
                    </Content>
                </RightContainer>

            </FooterSection>
        </>
    )
}
export default Footer;