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

export default function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");

    function signUp() {
        const url = `${process.env.REACT_APP_API_BASE_URL}/sign-up`;

        const body = { email, password, confirmPassword, fullName };

        const promise = axios.post(url, body);

        promise.then((res) => {
            navigate("/");
        });
        promise.catch((res) => {
            console.log(res);
            alert(res.response.data);
        });
    }

    return (
        <Container>
            <Page>
                <Title>Sign-up</Title>
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
                    <Input
                        type="confirm password"
                        userInfo={confirmPassword}
                        setUserInfo={setConfirmPassword}
                    />
                    <Input
                        type="full name"
                        userInfo={fullName}
                        setUserInfo={setFullName}
                    />
                    <Button text="Sign-up" func={signUp} />
                </Form>

                <Navigate
                    text={"Already have an account? Sign-in!"}
                    destination={""}
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
