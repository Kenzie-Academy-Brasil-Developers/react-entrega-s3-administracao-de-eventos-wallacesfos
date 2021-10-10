import styled from "styled-components";


export const Total = styled.div`
    position: fixed;
    z-index: 10;
    display:flex;
    width: 99vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #0000005a;

`

export const Card = styled.div`
    background-color: #191820;
    width: 270px;
    height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid white;
    z-index: 20;    
`;

export const TextTitle = styled.h2`
    color: #fff;
`