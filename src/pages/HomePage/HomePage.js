import { Cabecalho,Corpo,Logo,Final,Icone,Foto,Conteudo,Postar,Publi,Direita,Esquerda,Link,Descricao,Titulo,FotoPerfil,Form,Botao,Nome,Texto,Site} from './style'
import logo from '../../assets/linkrlogo.png'
import IonIcon from '@reacticons/ionicons';

export default function HomePage() {
    let imagemPerfil = '';

    return (
        <div>
            <Cabecalho>
                <Logo src = {logo} ></Logo>
                <Final>
                    <IonIcon name="chevron-down-outline" size="large"/>
                    <Foto src= {imagemPerfil} ></Foto>
                </Final>
            </Cabecalho>
            <Corpo>
                <Conteudo>
                    Timeline
                    <Postar>
                        <Esquerda>
                            <FotoPerfil></FotoPerfil>
                        </Esquerda>
                        <Direita>
                            <Titulo>What are you going to share today?</Titulo>
                            <Form>
                                <Link type="url" placeholder='http://...'></Link>
                                <Descricao type="text" placeholder='Awesome article about #javascript'></Descricao>
                                <Botao>Publish</Botao>
                            </Form>
                        </Direita>
                    </Postar>
                    <Publi>
                        <Esquerda>
                            <FotoPerfil></FotoPerfil>
                        </Esquerda>
                        <Direita>
                            <Nome>Juvenal Juvencio</Nome>
                            <Texto>Muito maneiro esse tutorial</Texto>
                            <Site></Site>
                        </Direita>
                    </Publi>
                </Conteudo>
            </Corpo>


        </div>
    )
}
