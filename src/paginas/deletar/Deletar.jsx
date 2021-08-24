import * as S from './styledD';
import { Titulo } from '../../componentes/titulo/styledT';
import { Api } from '../../api/Api';
import { useHistory } from 'react-router';
import  Loading  from '../../componentes/loading/Loading' ;
import { useState} from 'react';


export default function Deletar(){

    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const IrParaHome = () => {
        history.push('/');
    }

    const clickHandler = async event => {
        setLoading(true);
        event.preventDefault();

        await Api.buildApiDeleteRequest(Api.deleteAllUrl())
            .catch(e => {console.error('Erro ao tentar realizar a operação: ', e)})
        IrParaHome();
    }

    return(
        <>
            {loading === true ? (
            <Loading/> ) : (
                <>

                <Titulo>Deletar tudo</Titulo>
                <S.Texto>Os dados serão apagados definitivamente. Deseja continuar?</S.Texto>
            
                <S.BotaoArea>
                    <S.Cancelar onClick={IrParaHome}>Cancelar</S.Cancelar>
                    <S.BotaoDelete onClick={clickHandler}>Deletar</S.BotaoDelete>
                </S.BotaoArea>
                
            </>

            ) }
        </>
       


    )
}