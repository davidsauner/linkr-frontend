import {Left, All, Right, StyledForm, StyledInput, StyledButton, StyledLink } from './style'

export default function HomePage() {
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
                        name="e-mail"
                        placeholder="e-mail"
                        type="email"
                        required
                    />
                    <StyledInput
                        name="password"
                        placeholder="password"
                        type="password"
                        required
                    />
                    
                    <StyledButton>
                        Log In
                    </StyledButton>

                </StyledForm>

                <StyledLink to="/signup">
                First time? Create an account!
                </StyledLink>
            </Right>
        </All>
    )
}
