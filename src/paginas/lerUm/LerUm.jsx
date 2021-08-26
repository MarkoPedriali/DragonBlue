import { Titulo } from "../../componentes/titulo/styledT";
import * as LU from './styledLU';
import Power from "../../componentes/power/Power";
import { useHistory } from "react-router";

export default function LerUm(props){  //props vem da Criar.


    const item = props.location.state; 

    const history = useHistory();

    const deleteHandler = async event => {
        event.preventDefault();
        history.push(`/delete/${item._id}`, item);
    };

    return(
        <>
        <Titulo>{item.nome}</Titulo>
        <LU.Card>
            <LU.ImgBloco>
                <LU.Img src={item.url} alt="Personagem"/>
            </LU.ImgBloco>
            <LU.PowerArea>
            <LU.Texto><strong>Poder</strong></LU.Texto>
                <Power value={item.forca}></Power> {/*pasando o parametro para o componente power*/} 
            </LU.PowerArea>

            <LU.Texto><strong>Raça: {item.raca}</strong></LU.Texto>
            <LU.Texto><strong>Saga: {item.saga}</strong></LU.Texto>

            <LU.AreaBotao>
                <LU.BEditar>Editar</LU.BEditar>
                <LU.BDeletar onClick={deleteHandler}>Deletar</LU.BDeletar>
            </LU.AreaBotao>
        </LU.Card>

        </>
    )
}