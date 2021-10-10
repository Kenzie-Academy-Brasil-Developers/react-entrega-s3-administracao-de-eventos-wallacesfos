import styled from "styled-components";

export const Card = styled.div `
    background-color: #191820;
    width: 200px;
    height: 300px;
    border-bottom: 2px solid #3a2a69;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px
`;

export const Title = styled.h4`
    text-align: center;
    color: white;
    height: 40px;
`;

export const Button = styled.button`
    margin-top: 20px;
    height: 30px;
    background-color: #6c2cfa;
    color: white;
    border: 0;
    border-radius: 5px;
    width: 100%;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
`

export const Caixa = styled.div`
    height: 150px;
`