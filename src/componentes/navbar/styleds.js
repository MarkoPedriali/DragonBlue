import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Navbar = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100vw;
    background-color: #e76a24;
    -webkit-box-shadow: 7px 7px 24px 3px rgba(0,0,0,0.61); 
    box-shadow: 7px 7px 24px 3px rgba(0,0,0,0.61);
    padding: 0 2rem;

    @media(max-width: 580px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Img = styled.img `
    width: 10rem;
    padding: 0.5rem 0;

`;

export const List = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 430px){
        flex-direction: column;
    }
`;

export const ListItem = styled.li `
    list-style: none;
    padding: 1.2rem 1rem;
    @media(max-width: 430px){
        flex-direction: column;
    }

    &:hover{
        background-color: #b15019;
    }
`;

export const LinkedPage =styled(Link) `
    text-decoration: none;
`;