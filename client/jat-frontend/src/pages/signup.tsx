import React, { useState } from 'react';
import {
    AuthContainer,
    AuthForm,
    FormGroup,
    Label,
    Input,
    SubmitButton
} from '../styles/AuthStyles.tsx';

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const userData = {
                username,
                email,
                password
            };

            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Signup failed");
            }

            //If successful
            const data = await response.json();
            setSuccessMessage(data.message);

            //Reset form fields
            setUsername("");
            setEmail("");
            setPassword("");

        } catch (error) {
            setErrorMessage(error.message || "An error occurred");
        }
    };

    return (
        <AuthContainer>
            <h1>Sign Up</h1>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
            <AuthForm onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        type="text" 
                        placeholder="Username" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </FormGroup>
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </AuthForm>
        </AuthContainer>
    );
};

export default SignUp;
