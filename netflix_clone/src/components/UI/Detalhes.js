import styled from "styled-components";

export const DescriptionContainer = styled.div`
    margin-top: ${props => (props.modal ? "-150px" : "0")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: ${props => (props.modal ? "30px" : "0")};
    padding-bottom: ${props => (props.modal ? "30px" : "150px")};
    padding-top: ${props => (props.modal ? "10px" : "70px")};
`;

export const DescriptionDestaque = styled(DescriptionContainer)`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
`;

export const NomeFilme = styled.div`
    font-size: ${props => (props.modal ? "40px" : "60px")};
    font-weight: bold;

    @media (max-Width: 760px){
        font-size: ${props => (props.modal ? "30px" : "40px")};
    }
`;

export const Info = styled.div`
    font-size: 18px;
    margin-top: 15px;

    .destaque--year,
    .destaque--points,
    .destaque--seasons {
        display: inline-block;
        margin-right: 15px;
    }

    .destaque--points {
        font-weight: bold;
    }

    .destaque--points {
        color: #46d369;
    }

    @media (max-Width: 760px){
        font-size: 16px;
    }
`;

export const Overview = styled.div`
    margin-top: 15px;
    font-size: ${props => (props.modal ? "16px" : "20px")};
    color: #999;
    max-width: ${props => (props.modal ? "100%" : "40%")};

    overflow: hidden;
    text-overflow: ellipsis; /* Adicionando "..." ao final*/
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Quantidade de linhas*/
    -webkit-box-orient: vertical;
`;

export const ContainerButtonsModal = styled.div`
    margin-top: 15px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
`;

export const ButtonContainer = styled.div`
    margin-top: 15px;
`;

export const ButtonsDetalhes = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 8px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    cursor: pointer;

    background-color: ${props => (props.primary ? "#FFF" : "#333")};
    color: ${props => (props.primary ? "#000" : "#fff")};

    :hover {
        opacity: 0.7;
    }

    @media (max-Width: 760px){
        font-size: 14px;
        padding: 10px;
    }
`; 