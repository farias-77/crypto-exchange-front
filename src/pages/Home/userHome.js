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
    console.log(balance);
    function tradeCoin(action) {
        const amount = prompt(`Enter the amount you want to ${action} in R$`);

        const message = `Hi, I would like to ${action} R$${amount} of LSB please`;
        let win = window.open(
            `https://wa.me/553287047539?text=${encodeURI(message)}`
        );
    }

    return (
        <Container>
            <Page>
                <Title>Your balance</Title>
                <Section>
                    <BalanceInfo>
                        LSB:
                        {balance.linkCoinAmount ? balance.linkCoinAmount : ""}
                    </BalanceInfo>
                    <BalanceInfo>
                        R$: {balance.realAmount ? balance.realAmount : ""}
                    </BalanceInfo>
                </Section>
                <Section>
                    <Button onClick={() => tradeCoin("buy")}>BUY</Button>
                    <Button onClick={() => tradeCoin("sell")}>SELL</Button>
                </Section>
            </Page>
        </Container>
    );
}

const Section = styled.div`
    width: 100%;

    margin-top: 50px;

    display: flex;
    justify-content: space-around;
`;

const BalanceInfo = styled.span`
    font-size: 20px;
`;

const Button = styled.div`
    width: 200px;
    height: 40px;

    border-radius: 6px;
    background-color: #00786a;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;

    cursor: pointer;
`;
