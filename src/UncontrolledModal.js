import { useState } from "react";
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

export const UncontrolledModal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <ModalBackground onClick={() => setIsOpen(false)}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                    <button onClick={() => setIsOpen(false)}>Close Modal</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
);
}