import { useEffect } from "react"
import { ModalOverlay, ModalWindow } from "./Modal.styled"

export const Modal = ({onClose, alt, largeImageURL}) =>{
  const handleBackdropClick = e =>{
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
    }}      
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
      
  }, [onClose]);

  return (            
    <ModalOverlay className="overlay" onClick={handleBackdropClick}>
      <ModalWindow className="modal">
        <img src={largeImageURL} alt={alt} />
      </ModalWindow>
    </ModalOverlay>    
  )
}