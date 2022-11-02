import styled from "styled-components";

export default function Button({ text }) {
    return <Container>{text}</Container>;
}

const Container = styled.div`
    width: 70%;
    height: 40px;
    margin-top: 20px;

    background-color: #00786a;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #ffffff;
    font-size: 20px;

    cursor: pointer;
`;
