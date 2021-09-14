import styled from 'styled-components';

export const ItemMovie = styled.div`
    display: inline-block;
    width: 150px;

    img {
        width: 100%;
        transform: scale(.9);
        transition: ease .2s;
    }

    img:hover {
        transform: scale(1);
        cursor: pointer;
    }
`;
export const Title = styled.h2`
    margin: ${props => (!props.modal ? '0px' : '30px')} 0px ${props => (!props.modal ? '0px' : '20px')} ${props => (!props.modal ? '30px' : '0px')};
`; 