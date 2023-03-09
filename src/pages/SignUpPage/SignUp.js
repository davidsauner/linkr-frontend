import { Left, All, Right, StyledForm, StyledInput, StyledButton, StyledLink } from './style'
import React, { useContext } from 'react';
import Context from '../../contexts/Context';
import { useState } from "react"

export default function SignUp() {
    const { email, setEmail, username, setUserName, password, setPassword, pictureUrl, setpictureUrl } = useContext(Context)
    const [disabled, setDisabled] = useState(false)
  

    function cadastrar(e) {
        if (!email || !username || !password || pictureUrl) {
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
                    <StyledInput
                        data-test="username"
                        name="username"
                        placeholder="username"
                        type="text"
                        required
                    />

                    <StyledInput
                        data-test="picture-url"
                        name="pictureUrl"
                        placeholder="picture url"
                        type="url"
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