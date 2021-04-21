import React, { useEffect, useState } from "react";
import { getData } from '../Helpers/Fetchs';

import styled from 'styled-components';

import palette from '../Styles/Variables';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ContainerSubtitle = styled.div`
width:180px;

justify-content: left; 
margin-left:60px;
margin-top:50px;

h1{
   
    color:${palette.secundaryColor};
    font-size:2.0rem;
    font-family:'Nunito', sans-serif;
    font-weight:bold;
    
    
}

@media (max-width:1350px){
    margin-left:5px;
    }
`;
const LineContainer = styled.div`
 justify-content:left;
background-color:${palette.whiteLow};
width:30px;
height: 4px;

margin:10px 25px;

`;
const CardSection = styled.section`
width:100%;

 display:flex;
justify-content:center;
align-items:center;

@media (max-width:1350px){
    width:100%;
    display: flex;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  justify-content:center;
  ::-webkit-scrollbar {
    display: none;
  }

    
}

`;
const CardContainer = styled.div`
width:249px;
height:353px;

 height:auto;


 
 @media (max-width:1350px){
    
    width:160px;
    margin-left:10px;
 

    
}
`;
const ImgContainer = styled.div`
width: 216px;
height: 200px;
justify-content:center;
img {
width: 216px;
height: 200px;
object-fit:cover;
}
@media (max-width:1350px){
     width:160px;
    height:160px;
    
    img{
        width:150px;
    height:150px;
    }
} 

`;
const Content = styled.div`
 text-align: center;
 color:${palette.grayIntense};
    font-family: 'Nunito', sans-serif;
    font-size:1.2rem;
    font-weight:bold;
   :hover {
       background-color:${palette.grayLow};
   }
h3 {
    
    text-transform:uppercase;
    padding:10px;
   
}
span {
    color:${palette.red};
    
}
p{
    padding:3px;
}
button {
    margin-top:5px;
    background-color:${palette.secundaryColor};
    width: 125px;
    height: 32px;
    color: ${palette.primaryColor};
    text-transform:uppercase;
    border-radius:5px;
    border:none;
    margin-bottom:10px;
    
}
@media (max-width:530px){
    h3 {
    font-size:1.0rem;
    text-transform:uppercase;
    padding:10px;
   
}
span {
    color:${palette.red};
    
}
p{
    padding:3px;
    font-size:0.8rem;
}
button {
    margin-top:5px;
    background-color:${palette.secundaryColor};
    width: 75px;
    height: 32px;
    color: ${palette.primaryColor};
    text-transform:uppercase;
    border-radius:5px;
    border:none;
    margin-bottom:10px;
    font-size:0.8rem;
    
}
 

    
}
`;
const PriceContainer = styled.div`
p{
    color:${palette.secundaryColor};
    font-size:1.8rem;
    font-family:'Nunito', sans-serif;
    font-weight:bold;
}
@media (max-width:530px){
    p{
        font-size:1.4rem;
    }
}
`;




const Cards = ({ addCount }) => {
    const [state, setState] = useState({
        loader: false, products: []
        , error: null

    })
//obteniendo los productos de la api 
    useEffect(async () => {
        setState({
            ...state, loader: true,
            error: null
        })
        try {
            const products = await getData()
           
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
// Para el control de las estrellas dentro de las card
    const starts = (number) => {

        if (number === 1) {
            return (<div> <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
            )
        }
        if (number === 2) {
            return (
                <div>
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>)
        }
        if (number === 3) {
            return (
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>)
        }
        if (number === 4) {
            return (
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                </div>)
        }
        if (number === 5) {
            return (
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>)
        }

    };


    return (

        <>
            <ContainerSubtitle>
                <h1 >Más Vendidos</h1>
                <LineContainer></LineContainer>
            </ContainerSubtitle>
            <CardSection>
                {state.loader ? (<div className="lds-hourglass"></div>) : null}
{/* mapeando de la api */}
                {state.products.map((product, index) => (
                   
                        <CardContainer key={index}>
                            <ImgContainer>
                                <img src={product.imageUrl} />
                            </ImgContainer>
                            <Content>
                                <h3>{product.productName}</h3>

                                <span>{starts(product.stars)}</span>

                                <p>de $ {product.listPrice}</p>
                                <PriceContainer>
                                    <p>por $ {product.price}</p>
                                </PriceContainer>
                                <p>o en  de R$ 28,87</p>

                                <button onClick={addCount}>Comprar</button>
                            </Content>
                        </CardContainer>
                    
                )

                )}
            </CardSection>
        </>
    )
}
export default Cards;
