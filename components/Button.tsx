import styled from "@emotion/styled";

const Button = styled.button`
    padding: 10px;
    background-color: grey;
    border-radius: 4px;
    color: white;
    margin-left: .2rem;

    &: hover,
    &: active {
        background: hotpink;
    }
`;

export default Button;
