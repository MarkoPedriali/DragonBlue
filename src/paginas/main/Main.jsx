import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Main.scss'
import Navbar from '../../componentes/navbar/Navbar'
import { Container } from '../../componentes/container/styled';
import Ler from '../ler/Ler';
import Criar from '../criar/Criar';
import Deletar from '../deletar/Deletar';
import Sobre from '../sobre/Sobre';

export default function Main(){
    return(
        <>
        
        <BrowserRouter>
            <Navbar/>
            <Container> 
                <switch>
                    <Route exact={true} path="/" component={Ler}></Route>
                    <Route path="/criar" component={Criar}></Route>
                    <Route path="/deletar" component={Deletar}></Route>
                    <Route path="/sobre" component={Sobre}></Route>
                </switch>
            </Container>
        </BrowserRouter>
        </>
    )
}

//switch no container pq é onde vai haver a mudança de componentes/rotas. enquanto a navbar é estática