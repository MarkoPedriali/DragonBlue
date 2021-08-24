import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Main.scss'
import Navbar from '../../componentes/navbar/Navbar'
import { Container } from '../../componentes/container/styled';
import Ler from '../ler/Ler';
import Criar from '../criar/Criar';
import Deletar from '../deletar/Deletar';
import Sobre from '../sobre/Sobre';
import LerUm from '../lerUm/LerUm';
import { BotaoTema } from '../../componentes/botaotema/StyledTh';
import { GlobalStyles } from '../../componentes/globalStyles/styledGl';
import { lighTheme, darkTheme } from '../../componentes/theme/styled';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function Main(){

    const [tema, setTema] = useState('light');

    const themeToggler = () => {
        tema === 'light' ? setTema('dark') : setTema('light')
    }


    return(
        <>
        <ThemeProvider theme ={ tema ==='light' ? lighTheme : darkTheme}>
        <GlobalStyles/>
        <BrowserRouter>
            <Navbar/>
            <Container> 
                <switch>
                    <Route exact={true} path="/" component={Ler}></Route>
                    <Route path="/criar" component={Criar}></Route>
                    <Route path="/deletar" component={Deletar}></Route>
                    <Route path="/sobre" component={Sobre}></Route>
                    <Route path="/view/:id" component={LerUm}></Route>
                </switch>
                <BotaoTema onClick={themeToggler} className="im im-light-bulb"></BotaoTema>
            </Container>
        </BrowserRouter>
        </ThemeProvider>
        </>
    )
}

//switch no container pq é onde vai haver a mudança de componentes/rotas. enquanto a navbar é estática