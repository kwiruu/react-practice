import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ControlledModal = ({ isOpen, OnRequestClose, children }) => {
    return isOpen ? (
    isOpen && (
        <ModalBackground onClick={OnRequestClose}>
            <ModalBody onClick={OnRequestClose}>
            <button onClick={OnRequestClose}>Close Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>
    )
) : null;
}