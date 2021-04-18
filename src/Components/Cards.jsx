import React, { useEffect, useState } from "react";
import { getData } from '../Api/Fetchs';
import styled from 'styled-components';

import palette from '../Styles/Variables';
import { FaStar, FaRegStar } from 'react-icons/fa';
const CardSection = styled.section`
 display:flex;
h1 {
    color:${palette.secundaryColor};
    font-size:2.0rem;
    font-family:'Nunito', sans-serif;
    font-weight:bold;
   
}
`;
const CardContainer = styled.div`
width:216px;
height:353px;

`;
const ImgContainer = styled.div`
width: 216px;
height: 200px;
img {
    width: 216px;
height: 200px;
}
`;
const Content = styled.div`
 text-align: center;
 color:${palette.grayIntense};
    font-family: 'Nunito', sans-serif;
    font-size:1.2rem;
    font-weight:bold;
   
h3 {
    
    text-transform:uppercase;
    padding:10px;
   
}
span {
    color:${palette.red};
    margin-left:5px;
    padding:3px;
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
}
`;
const PriceContainer = styled.div`
p{
    color:${palette.secundaryColor};
    font-size:1.8rem;
    font-family:'Nunito', sans-serif;
    font-weight:bold;
}
`;


const Cards = () => {
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

    const starts = [];
    // for (var i = 1; i <= 5; i++) {
    //     const path = <FaStar />
    //     if (i > product.starts) {
    //         path = <FaRegStar />

    //     }
    //     starts.push((<span>{path}</span>))
    // }
    
    return (
        <>
            <CardSection>
                {state.loader ? (<h1>cargando</h1>) : null}
                <h1 >Más Vendidos</h1>
                {state.products.map((product, index) => (
                    
                    <CardContainer key={index}>
                        <ImgContainer>
                            <img src={product.imageUrl} />
                        </ImgContainer>
                        <Content>
                            <h3>{product.productName}</h3>
                             {starts}
                            <p>de $400,00</p>
                            <PriceContainer>
                                <p>{product.price}</p>
                            </PriceContainer>
                            <p>o en 9x de R$ 28,87</p>
                            <button className="">Comprar</button>
                        </Content>
                    </CardContainer>
                )

                )}
            </CardSection>
        </>
    )
}
export default Cards;
