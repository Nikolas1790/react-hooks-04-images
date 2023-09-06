import { useState } from "react"
import { ImageGalleryOne, ImageGalleryOneImg } from "./ImageGalleryItem.styled"
import { Modal } from "components/Modal/Modal";


export const ImageGalleryItem = ({img}) => {
    const [showModal, setShowModal] = useState(false)

    const { webformatURL, largeImageURL, tags } = img;


    const toggleModal = () => {    
        setShowModal(!showModal)
       }

    return (
        <>            
            <ImageGalleryOne className="gallery-item" onClick={toggleModal} >
                <ImageGalleryOneImg src={webformatURL} alt={tags}/>
            </ImageGalleryOne>
            {showModal && <Modal onClose={toggleModal} alt={tags} largeImageURL={largeImageURL}/>}
        </>
    )  
}




