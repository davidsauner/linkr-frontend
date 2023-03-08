import { Left, All, Right, StyledForm, StyledInput, StyledButton, StyledLink } from './style'

export default function SignUp() {
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
                    <StyledInput
                        name="username"
                        placeholder="username"
                        type="text"
                        required
                    />

                    <StyledInput
                        name="pictureUrl"
                        placeholder="picture url"
                        type="url"
                        required
                    />
                    <StyledButton>
                        Sign Up
                    </StyledButton>

                </StyledForm>

                <StyledLink to="/">
                    Switch back to log in
                </StyledLink>
            </Right>
        </All>
    )
}