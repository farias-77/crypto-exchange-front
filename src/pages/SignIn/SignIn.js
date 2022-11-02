import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Navigate from "../../components/Navigate";

import { Container } from "../../components/Container";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";

export default function SignIn({ setLoggedIn }) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        const url = `${process.env.REACT_APP_API_BASE_URL}/sign-in`;

        const body = { email, password };

        const promise = axios.post(url, body);

        promise.then((res) => {
            window.localStorage.setItem(
                "userData",
                JSON.stringify({
                    token: res.data.token,
                    role: res.data.role,
                    id: res.data.userId,
                })
            );
            setLoggedIn(true);
            navigate("/home");
        });
        promise.catch(() => {
            alert("Invalid credentials");
        });
    }

    return (
        <Container>
            <Page>
                <Title>Sign-in</Title>
                <Form>
                    <Input
                        type="email"
                        userInfo={email}
                        setUserInfo={setEmail}
                    />
                    <Input
                        type="password"
                        userInfo={password}
                        setUserInfo={setPassword}
                    />
                    <Button text="Sign-in" func={login} />
                </Form>

                <Navigate
                    text={"Don't have an account? Sign-up!"}
                    destination={"sign-up"}
                />
            </Page>
        </Container>
    );
}

const Form = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
