import * as S from './styledU';
import { useState } from 'react';
import { Titulo } from '../../componentes/titulo/styledT';
import { Api } from '../../api/Api';
import { useHistory } from 'react-router-dom';

export default function UpdateUm(){

    const [nome, setNome] =useState('');
    const [url, setUrl] =useState('');
    const [raca, setRaca] =useState('');
    const [saga, setSaga] =useState('');
    const [forca, setForca] =useState(0);

    const history = useHistory();

    const item = {
        nome: nome,
        url: url,
        raca: raca,
        saga: saga,
        forca: forca
    }

    const submitHandler = async event => { //funcao para lidar com os submits
        event.preventDefault(); //função para que ao submeter um form, a página nao seja atualizada

        const request = await Api.buildApiPostRequest(Api.createUrl(), item).catch(e => {
            console.error('Erro ao tentar adicionar o item ao banco: ', e);
        })

        const result = await request.json();
        const id = result._id; //o id vindo com o underline vem do insomnia
        
        history.push(`/view/${id}`, result);// aqui, empurrei a rota para a view id, que no caso é a pagina LerUm. Defini isso na Main, pondo a rota de view puxando o componente LerUm. 
                                        //o result(é o json vindo do request) é passado como props para O LerUm.
    } 

    return(
       <>
       <Titulo>Criar novo personagem</Titulo>
        <S.Form onSubmit={submitHandler}>
            <S.Label htmlFor="nome">Nome do personagem: </S.Label>
            <S.Input type="text"  id="nome" name="nome" value={item.nome} onChange={ e => setNome(e.target.value) } required></S.Input><br></br>

            <S.Label htmlFor="url_imagem">URL da imagem: </S.Label>
            <S.Input type ="text" id="url_imagem" nome="url_imagem" value={item.url} onChange={ e => setUrl(e.target.value) } required></S.Input><br></br>

            <S.Label htmlFor="raca">Raça do personagem: </S.Label>
            <S.Select id="raca" name="raca" value={item.raca} onChange={ e => setRaca(e.target.value) } required>
                <S.Option value="Androide">Androide</S.Option>
                <S.Option value="Animal">Animal</S.Option>
                <S.Option value="Dragão">Dragão</S.Option>
                <S.Option value="Majin">Majin</S.Option>
                <S.Option value="Namekuseijin">Namekuseijin</S.Option>
                <S.Option value="Terráqueo">Terráqueo</S.Option>
                <S.Option value="Saiyajin">Saiyajin</S.Option>
            </S.Select><br></br>

            <S.Label htmlFor="saga">Saga em que aparece: </S.Label>
            <S.Select id="saga" name="saga" value={item.saga} onChange={ e => setSaga(e.target.value) } required>
                <S.Option value="Saiyajins">Saiyajins</S.Option>
                <S.Option value="Freeza">Freeza</S.Option>
                <S.Option value="Garlic">Garlic</S.Option>
                <S.Option value="Andróides">Andróides</S.Option>
                <S.Option value="Torneio do Outro Mundo">Torneio do Outro Mundo</S.Option>
                <S.Option value="Majin Boo">Majin Boo</S.Option>
                <S.Option value="GT">GT</S.Option>
                
            </S.Select><br></br>

            <S.Label htmlFor="forca">Poder de luta: </S.Label>
            <S.Input type="number" id="forca" name="forca" min="0" max="100" value={item.forca} onChange={ e => setForca(e.target.value) } required></S.Input><br></br>

            <S.Input type="submit" value="Alterar"></S.Input>
        </S.Form>
        </>
    )
}