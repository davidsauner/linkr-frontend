import {Left, All, Right, StyledForm, StyledInput, StyledButton, StyledLink } from './style'
import React, { useContext } from 'react';
import Context from '../../contexts/Context';
import { useState } from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";

export default function HomePage() {
    const { email, setEmail,  password, setPassword} = useContext(Context)
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();
  

    function entrar(e) {
        e.preventDefault()
        setDisabled(true)

        if (!email || !password) {
            alert('Todos os campos são obrigatórios!')
          }               

        const URL = `${process.env.REACT_APP_API_URL}/signin`

        const dadosCadastro = {email, password }

        const promessa = axios.post(URL, dadosCadastro)

        promessa.then(res => {
            navigate('/timeline')
            setDisabled(false)
        })

        promessa.catch(res => {
            setDisabled(false)
            alert('Confira novamente todos os campos preenchidos!')
            setEmail("")
            setPassword("")
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
                        name="e-mail"
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
                    
                    <StyledButton
                    data-test="login-btn"
                    onClick={entrar}
                    disabled={disabled}>
                        Log In
                    </StyledButton>

                </StyledForm>

                <StyledLink 
                to="/signup"
                data-test="sign-up-link"
                >
                First time? Create an account!
                </StyledLink>
            </Right>
        </All>
    )}