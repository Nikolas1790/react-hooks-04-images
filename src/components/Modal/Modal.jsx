import { useEffect } from "react"
import { ModalOverlay, ModalWindow } from "./Modal.styled"

export const Modal = ({onClose, alt, largeImageURL}) =>{
    const handleBackdropClick = e =>{
        if (e.currentTarget === e.target) {
            onClose();
          }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
    
        return () => {
          window.removeEventListener('keydown', handleKeydown);
        };
      }, []);

      const handleKeydown = e => {
        if (e.code === 'Escape') {
           onClose();
    }}

    return (       
            
        <ModalOverlay className="overlay" onClick={handleBackdropClick}>
        <ModalWindow className="modal">
            <img src={largeImageURL} alt={alt} />
        </ModalWindow>
        </ModalOverlay>
    
)
}




// import { Component } from "react"
// import { ModalOverlay, ModalWindow } from "./Modal.styled"

// export class Modal extends Component {

// componentDidMount() { 
//      window.addEventListener('keydown', this.handleKeydown)
//  } 

//     componentWillUnmount() { 
//        window.removeEventListener('keydown', this.handleKeydown);
//     } 

//     handleKeydown = e => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//     }}
//     handleBackdropClick = e =>{
//         if (e.currentTarget === e.target) {
//             this.props.onClose();
//           }
//     }
    
//     render() {
//         const { largeImageURL, alt } = this.props;
//     return (       
            
//             <ModalOverlay className="overlay" onClick={this.handleBackdropClick}>
//             <ModalWindow className="modal">
//                 <img src={largeImageURL} alt={alt} />
//             </ModalWindow>
//             </ModalOverlay>
        
//     )}}