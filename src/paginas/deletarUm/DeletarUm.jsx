import * as S from './styledDU';
import { Titulo } from '../../componentes/titulo/styledT';
import { Api } from '../../api/Api';
import { useHistory } from 'react-router';
import  Loading  from '../../componentes/loading/Loading' ;
import { useState} from 'react';


export default function DeletarUm(props){
    const item = props.location.state;

    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const irParaHome = () =>{
        history.push('/');
    }

    const irParaItem = () =>{
        history.push(`/view/${item._id}`, item);
    }

    const clickHandler = async event =>{
        setLoading(true);
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteUrl(item._id)).catch(e =>{
            console.error('Erro ao tentar deletar o item', e);
        })
        irParaHome();
    }
    
    return(
        <>
            {loading === true ? (
            <Loading/> ) : (
                <>

                <Titulo>Deletar</Titulo>
                <S.Texto>Apagar <span>{item.nome}</span> do banco de dados. Deseja continuar?</S.Texto>
            
                <S.BotaoArea>
                    <S.Cancelar onClick={irParaItem}>Cancelar</S.Cancelar>
                    <S.BotaoDelete onClick={clickHandler}>Deletar</S.BotaoDelete>
                </S.BotaoArea>
                
            </>

            ) }
        </>
       
    )
}