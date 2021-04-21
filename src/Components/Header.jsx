import React from "react";
import styled from 'styled-components';
import Logo from '../Assets/site-logo-corebiz-preto-cinza.svg';
import palette from '../Styles/Variables';
import { FaSearch, FaRegUser, FaShoppingCart,FaBars } from 'react-icons/fa';



const Navbar = styled.nav`
width:100%;
min-width:320px;
height:80px;
background-color:${palette.primaryColor};
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width:426px){
    
    display:block;
    height:100px;
}

`;
const ImagenContainer = styled.div`
width:350px;
   height:28px;
img{
   width:196px;
   height:28px;
}
@media (max-width:321px){
    width:150px;
    display:flex;
   justify-content:center;
   margin-top:10px;
   img{
    width:150px;
   justify-content:center;
   margin-left:180px;
   }
   span{
       position:absolute;
       margin-right:70px;
       margin-top:10px;
       font-size:1.8rem;
   }
  
}



@media (min-width:322px) and (max-width:376px){
    width:150px;
    display:flex;
   justify-content:center;
   margin-top:10px;
   img{
    width:150px;
   justify-content:center;
   margin-left:220px;
   }
   span{
       position:absolute;
       margin-right:70px;
       margin-top:10px;
       font-size:1.8rem;
   }
}
@media (min-width:377px) and (max-width:425px){
    width:150px;
    display:flex;
   justify-content:center;
   margin-top:10px;
   img{
    width:150px;
   justify-content:center;
   margin-left:200px;
   }
   span{
       position:absolute;
       margin-right:70px;
       margin-top:10px;
       font-size:1.8rem;
   }
}
@media  (min-width:500px){
    span {
        display:none;
    }
}
`;
const SearchContainer = styled.div`
width:600px;
height:30px;
border-bottom: 1px solid  ${palette.secundaryColor};
span {
width:30px;
}
input{
    width:550px;
    height:28px;
    outline: none;
    border-style: none;
    margin-right:20px;
    ::placeholder {
       
       font-family: 'Nunito', sans-serif;
       font-weight:normal;
    }
}
@media (max-width:321px){
    margin-left:30px;
    width:260px;
   height:28px;
   justify-content:center;
   margin-top:20px;
   input {
       width:210px;
       height:20px ;
   }
}
@media (min-width:322px) and (max-width:376px){
    margin-left:30px;
    width:320px;
   height:28px;
   justify-content:center;
   margin-top:20px;
   input {
       width:270px;
       height:20px ;
   }
}
@media (min-width:377px) and (max-width:425px){
    margin-left:30px;
    width:380px;
   height:28px;
   justify-content:center;
   margin-top:20px;
   input {
       width:320px;
       height:20px ;
   }
}
@media (min-width:427px) and (max-width:1200px){
   
    width:350px;
   height:28px;
   justify-content:center;
   margin-top:20px;
   input {
       width:220px;
       height:20px ;
   }
}
`;
const UserDataContainer = styled.div`
/* margin-right:200px; */
width:300px;
display:flex;
font-size:1.3rem;
a {
    
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
@media (max-width:760px){
    strong {
        display:none;
    }
}
@media (max-width:600px){
    
a{
    position:absolute;
   font-size:1.4rem;
    top:24px;
    left:245px;
   
}

}
@media (min-width:322px) and (max-width:376px){
    a{
    position:absolute;
   font-size:1.4rem;
    top:24px;
    left:295px;
   
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
@media (max-width:376px){
    a{
        p{
        position:absolute;

        top:0px;
        left:200px;
       
    }
    }
   
}


`;


const Header = ({numberCount}) => {
    
    return (
        <>
            <Navbar>
                <ImagenContainer>
                    <img src={Logo} alt="" className="" />
                    <span><FaBars/></span>
                </ImagenContainer>
                 <SearchContainer>
                    <input type="text" className="" placeholder="¿Qué estás buscando?" />
                    <span ><FaSearch /></span>
                </SearchContainer>
                
                <UserDataContainer>
                  <strong><a href="#" className=""><span><FaRegUser /></span>Mi Cuenta</a></strong>

                    <a href="#"><span><FaShoppingCart /></span>
                        <CartContainer><p >{numberCount}</p></CartContainer>
                        </a> 
                </UserDataContainer>
            </Navbar>
        </>
    )
}
export default Header;
