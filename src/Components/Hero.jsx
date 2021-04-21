import React from "react";
import styled from 'styled-components';
import Banner from '../Assets/banner2.png';
import palette from '../Styles/Variables';
import { FaCircle } from 'react-icons/fa';

const Slider = styled.div`
width:100%;
min-width:320px;

@media (max-width:320px){
    
   width:320px;
 height:250px; 
}

`;

const ImgContainer = styled.div`
width:100%;

img {
    width:100%;
    object-fit:cover;
   
}
 @media (max-width:321px){
    
    width:320px;
  height:250px; 
  img {
    width:320px;
    height:250px; 
    object-fit:cover;
    object-position:16.8%;
   
}
 }
 @media (min-width:322px) and (max-width:376px){ 
    width:375px;
  height:250px; 
  img {
    width:375px;
    height:250px; 
    object-fit:cover;
    object-position:14%;
   
}
 }
 @media (min-width:377px) and (max-width:425px){
    width:425px;
  height:250px; 
  img {
    width:425px;
    height:250px; 
    object-fit:cover;
    object-position:14%;
   
}
 }
 
`;
const CirclesSlider = styled.div`
position :absolute;

top: 260px;
left: calc(100% - 54%);


span {
    
    width:50px;
    height:50px;
    border-radius:20px;
    color:${palette.red};
    margin-left:5px;
   
    
}
@media (max-width:360px){
    top: 320px;
left: calc(100% - 62%);   
}
@media (min-width:375px){
    top: 320px;
left: calc(100% - 60%);   
}
@media (min-width:760px){
    top: 230px;
left: calc(100% - 56%);   
}
@media (min-width:800px){
    top: 350px;
left: calc(100% - 54%);   
}



`;


const Hero = () => {
   

    return (
        < >
            <Slider>
                <ImgContainer>
                    <img src={Banner} alt="" className="" />
                </ImgContainer>
                <CirclesSlider>
                     <span><FaCircle /></span>
                    <span><FaCircle /></span>
                    <span><FaCircle /></span>
                    <span><FaCircle /></span>
                 </CirclesSlider> 
            </Slider>
          
        </>

    )
}
export default Hero;
