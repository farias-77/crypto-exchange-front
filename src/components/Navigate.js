import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Navigate({ text, destination }) {
    const navigate = useNavigate();

    return <Text onClick={() => navigate(`/${destination}`)}>{text}</Text>;
}

const Text = styled.span`
    color: #999999;
    font-size: 20px;
    font-weight: 700;
    text-align: center;

    margin-top: 20px;

    cursor: pointer;
`;
