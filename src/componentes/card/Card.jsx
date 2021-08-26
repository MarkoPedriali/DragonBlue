import * as Crd from './styledCrd';

export default function Card(props){
    return(
        <Crd.CardArea>
            <Crd.CardImg src={props.url}></Crd.CardImg>
            <Crd.Nome>{props.nome}</Crd.Nome>
        </Crd.CardArea>
    )
}