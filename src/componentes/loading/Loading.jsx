import animacao from './animacao.svg';
import * as L from './styledL';

export default function Loading(){
    return(
        <L.Spinner>
            <L.Img src={animacao}/>
        </L.Spinner>
    )
}