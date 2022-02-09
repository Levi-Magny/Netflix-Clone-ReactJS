import styled from "styled-components";

export const FormLoginContainer = styled.div`
    background-color: rgba(0,0,0, 0.75);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    min-height: 500px;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-top: 80px;
    z-index: 4;
`;

export const FormH1 = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 28px;
    z-index: 5;
`;

export const FormInput = styled.input`
    background: #333;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    height: 50px;
    width: 100%;
    min-width: 314px;
    padding: 0 16px;
    outline: none;
    margin-bottom: 16px;
    transition: .2s;

    &::placeholder {
        color: #8c8c8c;
    }

    &:focus {
        background: #444;
    }
`;
