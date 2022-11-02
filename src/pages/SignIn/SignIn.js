import styled from "styled-components";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Navigate from "../../components/Navigate";

import { Container } from "../../components/Container";
import { Page } from "../../components/Page";

export default function SignIn() {
    return (
        <Container>
            <Page>
                <Title>Sign-in</Title>
                <Form>
                    <Input type="email" />
                    <Input type="password" />
                    <Button text="Sign-in" />
                </Form>

                <Navigate />
            </Page>
        </Container>
    );
}

const Title = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    font-size: 20px;
    color: #000000;
`;
