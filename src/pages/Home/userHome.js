import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import useToken from "../../hooks/useToken";
import useId from "../../hooks/useId";

import { Container } from "../../components/Container";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";

export default function UserHome() {
    const userId = useId();
    const token = useToken();

    const [balance, setBalance] = useState({});

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/wallet/${userId}`;

        const promise = axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });

        promise
            .then((res) => {
                setBalance({ ...res.data });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Page>
                <Title>Your balance</Title>
                <Balance>
                    <BalanceInfo>
                        LSB:{" "}
                        {balance.linkCoinAmount ? balance.linkCoinAmount : ""}
                    </BalanceInfo>
                    <BalanceInfo>
                        R$: {balance.realAmount ? balance.realAmount : ""}
                    </BalanceInfo>
                </Balance>
            </Page>
        </Container>
    );
}

const Balance = styled.div`
    width: 100%;

    margin-top: 50px;

    display: flex;
    justify-content: space-around;
`;

const BalanceInfo = styled.span``;
