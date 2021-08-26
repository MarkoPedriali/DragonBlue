import * as S from './styled'
import { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import  Card  from '../../componentes/card/Card';

export default function Ler(){

    const [data,setData] = useState([]);
    
    useEffect (() => {
        async function fetchAPi(){ //fetchapi é uma função que criei
            let response = await Api.buildApiGetRequest(
                Api.readAllUrl()
            ).catch(e =>{
                console.error('Erro ao tentar recuperar item do banco de dados:', e);
            })

            response = await response.json();
            setData(response);
        } 

        fetchAPi();

    },[]) 


    return(
        <>
        {
            data.length > 0 ? (
            
                <S.CardAread>
                    {
                        data.map( (item) => (
                            <S.Linked to ={{ pathname:`/view/${item._id}`, state: item }} key={item._id}>
                                <Card url={item.url} nome={item.nome}/> {/*componente*/}
                            </S.Linked>
                        ))
                    }
                </S.CardAread>
            ): (
                <S.CardAread>
                    <S.Vazio>Não há personagens cadastrados</S.Vazio>
                </S.CardAread>
            )
        }
        </>
    )
}