import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardAread= styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;  

export const Linked= styled(Link)`
    text-decoration: none;
`;  

export const Vazio= styled.h3`
    color: #e76a24;
    background-color: #ffffff;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
`;  