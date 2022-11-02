import { IoIosLogOut } from "react-icons/io";
import styled from "styled-components";

import { Container } from "../../components/Container";

export default function Header({ loggedIn, setLoggedIn }) {
    function logout() {
        window.localStorage.removeItem("userData");
        setLoggedIn(false);
    }

    return (
        <Container>
            <Navbar>
                <Title>(LOGO CRYPTOEXCHANGE)</Title>
                {loggedIn ? <IoIosLogOut onClick={logout} /> : <></>}
            </Navbar>
        </Container>
    );
}

const Navbar = styled.div`
    width: 100%;
    max-width: 800px;
    height: 100px;

    background-color: #00786a;
    border-radius: 0 0 8px 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    > svg {
        position: absolute;
        right: 30px;

        font-size: 30px;
        color: white;

        cursor: pointer;
    }
`;

const Title = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: #ffffff;

    text-align: center;

    cursor: pointer;
`;
