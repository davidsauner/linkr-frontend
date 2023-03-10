import { Cabecalho, Corpo, Logo, Final, Foto, Conteudo, Postar, Publi, Direita, Esquerda, Link, Descricao, Titulo, FotoPerfil, Form, Botao, Nome, Texto, Site } from './style'
import logo from '../../assets/linkrlogo.png'
import IonIcon from '@reacticons/ionicons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {
    let imagemPerfil = '';
    const [link, setLink] = useState("")
    const [texto, setTexto] = useState("")
    const [todosPosts, setPosts] = useState([])
    const [disabled,setDisabled] = useState("");
    const [textobotao,setBotao] = useState("Publish");

    useEffect(() => {
        const posts = axios.get(`${process.env.REACT_APP_API_URL}`)
        let array = [];
        posts.then(resposta => setPosts(resposta.data.reverse())
            )
    }, [Publish])

    return (
        <div>
            <Cabecalho>
                <Logo src={logo} ></Logo>
                <Final>
                    <IonIcon name="chevron-down-outline" size="large" />
                    <Foto src={imagemPerfil} ></Foto>
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
                            <Form onSubmit={Publish}>
                                <Link type="text" placeholder='http://...' value={link} onChange={e => setLink(e.target.value)} required disabled={disabled}></Link>
                                <Descricao type="text" placeholder='Awesome article about #javascript' value={texto} onChange={e => setTexto(e.target.value)} disabled={disabled}></Descricao>
                                <Botao disabled={disabled}>{textobotao}</Botao>
                            </Form>
                        </Direita>
                    </Postar>
                    {todosPosts.map(teste => (
                        <Publi>
                            <Esquerda>
                                <FotoPerfil></FotoPerfil>
                            </Esquerda>
                            <Direita>
                                <Nome>Juvenal Juvencio</Nome>
                                <Texto>{teste.desc}</Texto>
                                <Site>{teste.link}</Site>
                            </Direita>
                        </Publi>
                    ))}

                </Conteudo>
            </Corpo>


        </div>
         )

         function Publish(e) {
             e.preventDefault();
     
             const dados = {
                 id_usu: "2",
                 link,
                 texto
             }
     
             setDisabled("disabled");
             setBotao("Publishing...");
     
             console.log(dados);
     
             const promise = axios.post(`${process.env.REACT_APP_API_URL}`, dados)
     
     
             promise.then(resposta => {
                 console.log(resposta.data)
                 setDisabled("");
                 setBotao("Publish");
                 setLink("");
                 setTexto("");
             })
     
             promise.catch(err => {
                 console.log(err)
                 alert("There was an error publishing your link")
                 setDisabled("");
                 setBotao("Publish");
             })
     
         }
     
         function Posts(e) {
             e.preventDefault();
             setDisabled("disabled");
             setBotao("Publishing...");
             setLink("");
             setTexto("");
            console.log(todosPosts);
            console.log(disabled);
         }
     }
     