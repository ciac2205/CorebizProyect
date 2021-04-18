import React from "react";
import styled from 'styled-components';
import Logo from '../Assets/site-logo-corebiz-preto-cinza.svg';
import palette from '../Styles/Variables';
import { FaSearch, FaRegUser, FaShoppingCart } from 'react-icons/fa';
const Navbar = styled.nav`
width:100%;
min-width:320px;
height:80px;
background-color:${palette.primaryColor};
display:flex;
justify-content:space-around;
align-items:center;
`;
const ImagenContainer = styled.div`
width:350px;
   height:28px;
img{
   width:196px;
   height:28px;
}
`;
const SearchContainer = styled.div`
width:600px;
height:30px;
border-bottom: 1px solid  ${palette.secundaryColor};
span {
  
 
   
   
}
input{
    width:550px;
    height:28px;
    outline: none;
    border-style: none;
    margin-right:30px;
    ::placeholder {
       
       font-family: 'Nunito', sans-serif;
       font-weight:normal;
    }
}
`;
const UserDataContainer = styled.div`
margin-right:200px;
font-size:1.3rem;
a {
    text-decoration: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    background:transparent;
    color:${palette.grayIntense};
    margin-left:10px;
    
    span{
        color:${palette.secundaryColor};
        margin-right:5px;
        
    }
}
`;
const CartContainer = styled.div`
display:inline-block;
width:14px;
    height: 14px;;
    border-radius:10px;
    background-color:${palette.red};
   
  
    
p{
    
    font-size:1.0rem;
    color:${palette.primaryColor};
      
}
`;


const Header = () => {
    return (
        <>
            <Navbar>
                <ImagenContainer>
                    <img src={Logo} alt="" className="" />
                </ImagenContainer>
                <SearchContainer>
                    <input type="text" className="" placeholder="¿Qué estás buscando?" />
                    <span ><FaSearch /></span>
                </SearchContainer>
                <UserDataContainer>
                    <a href="#" className=""><span><FaRegUser /></span>Mi Cuenta</a>

                    <a href="#"><span><FaShoppingCart /></span>
                        <CartContainer><p >1</p></CartContainer></a>
                </UserDataContainer>
            </Navbar>
        </>
    )
}
export default Header;
