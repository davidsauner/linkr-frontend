import { Left, All, Right, StyledForm, StyledInput, StyledButton, StyledLink } from './style'
import React, { useContext } from 'react';
import Context from '../../contexts/Context';
import { useState } from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";

export default function SignUp() {
    const { email, setEmail, username, setUserName, password, setPassword, pictureurl, setpictureurl } = useContext(Context)
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault()
        if (!email || !username || !password || pictureurl) {
            alert('Todos os campos são obrigatórios!')
            setDisabled(false)
        }

        const URL = `${process.env.REACT_APP_API_URL}/signup`

        const dadosCadastro = {email, username, password, pictureurl }

        const promessa = axios.post(URL, dadosCadastro)

        promessa.then(res => {
            navigate('/')
            setDisabled(false)
        })

        promessa.catch(res => {
            setDisabled(false)
            alert('Confira novamente todos os campos preenchidos!')
            setEmail("")
            setUserName("")
            setPassword("")
            setpictureurl("")

        })

    }
    return (
        <All>
            <Left>
                <h1>linkr</h1>
                <h2>save, share and discover</h2>
                <h2> the best links on the web</h2>
            </Left>
            <Right>
                <StyledForm>

                    <StyledInput
                        data-test="email"
                        name="email"
                        placeholder="e-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <StyledInput
                        data-test="password"
                        name="password"
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <StyledInput
                        data-test="username"
                        name="username"
                        placeholder="username"
                        type="text"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />

                    <StyledInput
                        data-test="picture-url"
                        name="pictureUrl"
                        placeholder="picture url"
                        type="url"
                        value={pictureurl}
                        onChange={e => setpictureurl(e.target.value)}
                        required
                    />
                    <StyledButton
                        data-test="sign-up-btn"
                        onClick={cadastrar}
                        disabled={disabled}
                    >
                        Sign Up
                    </StyledButton>

                </StyledForm>

                <StyledLink
                    to="/"
                    data-test="login-link"
                >
                    Switch back to log in
                </StyledLink>
            </Right>
        </All>
    )
}