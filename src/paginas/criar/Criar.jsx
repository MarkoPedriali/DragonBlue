import * as S from './styledC'

export default function Criar(){
    return(
        <S.Form>
            <S.Label for="nome">Nome do personagem: </S.Label>
            <S.Input type="text"  id="nome" name="nome"></S.Input><br></br>

            <S.Label for="url_imagem">URL da imagem: </S.Label>
            <S.Input type ="text" id="url_imagem" nome="url_imagem"></S.Input><br></br>

            <S.Label for="raca">Raça do personagem: </S.Label>
            <S.Select id="raca" name="raca">
                <S.Option value="man">Man</S.Option>
                <S.Option value="girl">Girl</S.Option>
            </S.Select><br></br>

            <S.Label for="saga">Saga em que aparece: </S.Label>
            <S.Select id="saga" name="saga">
                <S.Option value="man">Man</S.Option>
                <S.Option value="girl">Girl</S.Option>
            </S.Select><br></br>

            <S.Label for="forca">Poder de luta: </S.Label>
            <S.Input type="number" id="forca" name="forca" min="0"></S.Input><br></br>

            <S.Input type="submit" value="Cadastrar"></S.Input>
        </S.Form>
    )
}