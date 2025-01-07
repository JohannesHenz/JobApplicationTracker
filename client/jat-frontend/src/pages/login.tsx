import React from 'react';
import {
    AuthContainer,
    AuthForm,
    FormGroup,
    Label,
    Input,
    SubmitButton
} from '../styles/AuthStyles.tsx';

const Login = () => {
    return (
        <AuthContainer>
            <h1>Login</h1>
            <AuthForm>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        type="text" 
                        placeholder="Username" 
                        id="username" 
                        required 
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        required 
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        required 
                    />
                </FormGroup>
                <SubmitButton type="submit">Login</SubmitButton>
            </AuthForm>
        </AuthContainer>
    );
};

export default Login;
