import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { getImages } from "services/getImages"
import { AppStyled } from "components/App.styled"

export const App = () => {
const [query, setQuery] = useState('')
const [images, setImages] = useState([])
const [page, setPage] = useState(1)
const [loader, setLoader] = useState(false)
const [error, setError] = useState(null)
const [totalImg, setTotalImg] = useState(null)

const formSubmitHendle = data =>{   
  setQuery(data)
  setPage(1)
  setImages([]) 
}

const handleLoaderMore = () => {
  setPage(prevState => prevState + 1)    
}

useEffect(() => {
  if (query !== '') {
    setLoader(true);

    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          toast.error('Not a valid request');
        } else {
          if (page === 1) {
            setImages(hits);
          } else {
            setImages((prevImages) => [...prevImages, ...hits]);
          }
          setTotalImg(totalHits);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoader(false));
  }
}, [query, page]);


  return (
    <AppStyled>
    
    <Searchbar onSubmit={formSubmitHendle}/>        
    {error && <p><b>Error. Try again later</b></p>}
    {loader && <Loader/>}            
    {images.length > 0 && <ImageGallery images={images}/>}      
    {images.length > 0 && page < Math.ceil(totalImg/12) && <Button handleLoaderMore={handleLoaderMore}/>}    
    
    <ToastContainer autoClose={3000}/>
    </AppStyled>
)
}
