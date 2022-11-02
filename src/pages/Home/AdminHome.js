import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import useToken from "../../hooks/useToken";

import { Container } from "../../components/Container";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";

export default function Admin() {
    const token = useToken();

    const [wallets, setWallets] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/allwallets`;

        const promise = axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });

        promise
            .then((res) => {
                setWallets([...res.data]);
            })
            .catch((err) => console.log(err));
    }, [refresh]);

    function updateWallet(walletId) {
        const linkAmount = prompt("Enter LSB amount");
        const realAmount = prompt("Enter R$ amount");

        updateDatabase(walletId, linkAmount, realAmount);
    }

    function updateDatabase(walletId, linkCoinAmount, realAmount) {
        const url = `${process.env.REACT_APP_API_BASE_URL}/wallet/${walletId}`;

        const promise = axios.put(
            url,
            { linkCoinAmount, realAmount },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        promise
            .then(() => setRefresh((prevState) => !prevState))
            .catch((err) => console.log(err));
    }

    return (
        <Container>
            <Page>
                <Title>Wallets</Title>
                <Section>
                    {wallets.length > 0 ? (
                        wallets.map((wallet, index) => {
                            return (
                                <Wallet
                                    onClick={() => updateWallet(wallet.id)}
                                    key={index}
                                >
                                    <h4>{wallet.users.fullName}</h4>
                                    <h4>LSB: {wallet.linkCoinAmount / 100}</h4>
                                    <h4>R$: {wallet.realAmount / 100}</h4>
                                </Wallet>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </Section>
            </Page>
        </Container>
    );
}

const Section = styled.div`
    width: 100%;

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wallet = styled.div`
    width: 400px;
    height: 50px;
    padding-left: 10px;
    margin-bottom: 20px;

    border-radius: 6px;
    border: 1px solid #000000;

    display: flex;
    align-items: center;

    cursor: pointer;

    > h4 {
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;
