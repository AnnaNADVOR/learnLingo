import CloseButton from "../Buttons/CloseButton/CloseButton"

const ModalContainer = ({children, closeModal}) => {
    return <div>
        <CloseButton click={closeModal} />
        {children}
    </div>
}

export default ModalContainer; 
