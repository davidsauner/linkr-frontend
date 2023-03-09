import {Left, All, Right, StyledForm, StyledInput, StyledButton, StyledLink } from './style'
import React, { useContext } from 'react';
import Context from '../../contexts/Context';
import { useState } from "react"

export default function HomePage() {
    const { email, setEmail,  password, setPassword} = useContext(Context)
    const [disabled, setDisabled] = useState(false)
  

    function entrar(e) {
        if (!email || !password) {
            alert('Todos os campos são obrigatórios!')
            setDisabled(false)
          }
        e.preventDefault()
        setDisabled(true)

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
                        required
                    />
                    <StyledInput
                        data-test="password"
                        name="password"
                        placeholder="password"
                        type="password"
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
    )
}
