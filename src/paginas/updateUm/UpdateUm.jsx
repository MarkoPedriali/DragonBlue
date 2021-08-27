import * as S from './styledU';
import { useState } from 'react';
import { Titulo } from '../../componentes/titulo/styledT';
import { Api } from '../../api/Api';
import { useHistory } from 'react-router-dom';
import Loading from '../../componentes/loading/Loading';

export default function UpdateUm(props){
    console.log(props)
    const state = props.location.state;

    const [nome, setNome] =useState(state.name);
    const [url, setUrl] =useState(state.url);
    const [raca, setRaca] =useState(state.raca);
    const [saga, setSaga] =useState(state.saga);
    const [forca, setForca] =useState(state.forca);

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const item = {
        nome: nome,
        url: url,
        raca: raca,
        saga: saga,
        forca: forca
    }



    const submitHandler = async event => { //funcao para lidar com os submits
        setLoading(true);
        event.preventDefault(); //função para que ao submeter um form, a página nao seja atualizada

        const request = await Api.buildApiPutRequest(Api.updateUrl(state._id), item).catch(e => {
            console.error('Erro ao tentar atualizar o item ao banco: ', e);
        })

        const result = await request.json();
        const id = result._id; 
        
        history.push(`/view/${id}`, item); 
                                        
    } 

    return(
       <>
       {
           loading ===true ? <Loading/> :
        <>
       <Titulo>Atualizar personagem</Titulo>
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
        }
        </>
    )
}