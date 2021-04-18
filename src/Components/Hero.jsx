import React, { useEffect, useState } from "react";
import { getData } from '../Api/Fetchs';
import styled from 'styled-components';
import Banner from '../Assets/banner.png';
import palette from '../Styles/Variables';
import { FaCircle } from 'react-icons/fa';

const Slider = styled.div`
width:100%;
min-width:320px;
`;

const ImgContainer = styled.div`

width:100%;


img {
    
    
    width:100% ;
    object-fit:scale-down;
   
}
`;
const CirclesSlider = styled.div`
width:200px;
position:absolute;
top:340px;
left:550px;


span {
    width:50px;
    height:50px;
    border-radius:20px;
    color:${palette.red};
    margin-left:5px;
   
    
}

`;
const CirclesGray = styled.div`

color:${palette.basicGray};
`;

const Hero = () => {
    const [state, setState] = useState({
        loader: false, products: []
        , error: null

    })

    useEffect(async () => {
        setState({
            ...state, loader: true,
            error: null
        })
        try {
            const products = await getData()
            console.log(products);
            setState({
                ...state, loader: false,
                error: null
                , products
            })
        }
        catch (error) {
            setState({
                ...state, loader: false,
                error: null

            })
        }
    }, [])


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
