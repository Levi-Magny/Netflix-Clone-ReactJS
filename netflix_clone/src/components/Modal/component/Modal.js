import React from 'react';
import styled from 'styled-components';

const ModalBack = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    overflow-y: scroll;
    
`;
const OuterContainer = styled.div`
    width: 40vw;
`;

const Container = styled.div`
    background-color: #2f2f2f;
    width: 100%;
`;

function Modal(){
    return(
        <ModalBack>
            <OuterContainer>
                <Container>
                    <div></div>
                </Container>
            </OuterContainer>
        </ModalBack>
    );
}

export default Modal;