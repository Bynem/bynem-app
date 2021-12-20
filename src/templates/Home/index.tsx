import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'

export default function Home() {
    return (
        <>
            <Head />
            <S.Content>
                <S.Title>Simulados</S.Title>
                <S.SubTitle>Estude utilizando o sistema de simulados totalmente grátis</S.SubTitle>
                <S.Tools>
                    <S.divInput>
                        <S.Input></S.Input>
                    </S.divInput>
                    <S.divButton>
                        <S.Button>Criar Simulado</S.Button>
                    </S.divButton>
                </S.Tools>
            </S.Content>
            <Footer bottom={true} />
        </>
    )
}