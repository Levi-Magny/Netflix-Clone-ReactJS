import styled from "styled-components";

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: ${props => (props.modal ? "100px" : "150px")};
    padding-top: ${props => (props.modal ? "50px" : "70px")};
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
    font-weight: bold;
    margin-top: 15px;

    .destaque--year,
    .destaque--points,
    .destaque--seasons {
        display: inline-block;
        margin-right: 15px;
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
    max-width: ${props => (props.modal ? "85%" : "40%")};

    overflow: hidden;
    text-overflow: ellipsis; /* Adicionando "..." ao final*/
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Quantidade de linhas*/
    -webkit-box-orient: vertical;
`;