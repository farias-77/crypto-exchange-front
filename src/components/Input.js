import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

export default function Input({ type, userInfo, setUserInfo }) {
    return (
        <Container>
            <h5>{type}</h5>
            <DebounceInput
                value={userInfo}
                onChange={(e) => setUserInfo(e.target.value)}
                debounceTimeout={250}
                placeholder={`Enter your ${type}`}
                type={type === "confirm password" ? "password" : type}
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;

    > input {
        width: 100%;
        height: 40px;
        padding-left: 10px;

        border-radius: 6px;
        border: 1px solid #ededed;

        font-size: 15px;
        color: #000000;

        ::placeholder {
            color: #9c9c9c;
            font-size: 15px;
        }
    }

    > h5 {
        font-size: 18px;
        margin-bottom: 8px;
    }
    margin-top: 25px;
`;
