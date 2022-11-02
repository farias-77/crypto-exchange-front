import styled from "styled-components";
import { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Navigate from "../../components/Navigate";

import { Container } from "../../components/Container";
import { Page } from "../../components/Page";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <Button text="Sign-in" />
                </Form>

                <Navigate />
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

const Title = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    font-size: 25px;
    color: #000000;
`;
