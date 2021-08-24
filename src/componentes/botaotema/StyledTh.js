import styled from "styled-components";

export const BotaoTema = styled.i` 
    padding: 0.6rem;
    background-color: #01080a;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    position: fixed;
    bottom: calc(100vw - 98vw);
    right: 2vw;
    transition: 200ms;

    &:hover{
        background-color: #041f26;
    }
`;