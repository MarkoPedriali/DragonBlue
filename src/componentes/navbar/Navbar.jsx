import logo from './logo.png';
import * as S from './styleds';

export default function Navbar(){
    return(
        <S.Navbar>
            <S.Img src={logo} alt="Dragon Ball"/>
            <S.List>
                <S.ListItem>
                    <S.LinkedPage to="/">Início</S.LinkedPage>
                </S.ListItem>
                <S.ListItem>
                    <S.LinkedPage to="/criar">Criar</S.LinkedPage>
                </S.ListItem>
                <S.ListItem>
                    <S.LinkedPage to="/deletar">Deletar tudo</S.LinkedPage>
                </S.ListItem>
                <S.ListItem>
                    <S.LinkedPage to="/sobre">Sobre</S.LinkedPage>
                </S.ListItem>
            </S.List>
        </S.Navbar>
    )
}