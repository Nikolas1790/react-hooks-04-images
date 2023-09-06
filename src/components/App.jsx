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
  // this.setState(() => ({query: data, page: 1, images: [] }))     
}

const handleLoaderMore = () => {
  setPage(prevState => prevState + 1)
  // this.setState(prevState => ({page: prevState.page + 1}))       
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

// useEffect(()=>{
//   if(query === '' ){
//     setLoader(true)
//   }
//     // setLoader(true)
//     // this.setState({ loader: true})
      
//     getImages(query, page)
//    .then(({hits, totalHits}) => {          
//     if(hits.length === 0){
//       return toast.error('Not a valid request');
//     }
//     setImages(hits)
//     setTotalImg(totalHits)
//     // this.setState({ images: hits, totalImg: totalHits})})
//    .catch(error => setError(error))
//    .finally(() => setLoader(false));
   
// },[query, loader, error, images,page])})

// useEffect(()=>{
//   if(page > 1 ){
//     setLoader(true)
//     // this.setState({ loader: true})
      
//     getImages(query, page)
//    .then(({hits}) => {          
//     setImages(prevState => [...prevState, ...hits])
//     // setImages(hits)
//     // setTotalImg(totalHits)
//     // this.setState({ images: hits, totalImg: totalHits})})
//    .catch(error => setError(error))
//    .finally(() => setLoader(false));
//    return;
// },[page])}})


// componentDidUpdate(prevProps, prevState) {        
//   if(this.state.query !== prevState.query ){
//       this.setState({ loader: true})
      
//       getImages(this.state.query, this.state.page)
//      .then(({hits, totalHits}) => {          
//       if(hits.length === 0){
//         return toast.error('Not a valid request');
//       }
//       this.setState({ images: hits, totalImg: totalHits})})
//      .catch(error => this.setState({error}))
//      .finally(() => this.setState({loader: false}));
//      return;
//   }


//   if (prevState.query !== this.state.query || prevState.page !== this.state.page){
//       this.setState({ loader: true})

//       getImages(this.state.query, this.state.page)
//       .then(({hits}) => {            
//         this.setState({ images: [...prevState.images, ...hits]})})
//       .catch(error => this.setState({error}))
//       .finally(() => this.setState({loader: false}))                   
//   }      
// }  
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

// export class App extends Component {
//   state = {
//     query:'',
//     images: [],
//     page:1,

//     loader: false,
//     error: null,
//     totalImg: null,    
//     }

//   componentDidUpdate(prevProps, prevState) {        
//       if(this.state.query !== prevState.query ){
//           this.setState({ loader: true})
          
//           getImages(this.state.query, this.state.page)
//          .then(({hits, totalHits}) => {          
//           if(hits.length === 0){
//             return toast.error('Not a valid request');
//           }
//           this.setState({ images: hits, totalImg: totalHits})})
//          .catch(error => this.setState({error}))
//          .finally(() => this.setState({loader: false}));
//          return;
//       }


//       if (prevState.query !== this.state.query || prevState.page !== this.state.page){
//           this.setState({ loader: true})

//           getImages(this.state.query, this.state.page)
//           .then(({hits}) => {            
//             this.setState({ images: [...prevState.images, ...hits]})})
//           .catch(error => this.setState({error}))
//           .finally(() => this.setState({loader: false}))                   
//       }      
//     }     
      

//     handleLoaderMore = () => {
//       this.setState(prevState => ({page: prevState.page + 1}))       
//     }
//     formSubmitHendle = data =>{      
//       this.setState(() => ({query: data, page: 1, images: [] }))     
//     }
  
//   render(){
//       const {images, loader, totalImg, error, page } = this.state
//   return (
//       <AppStyled>
      
//       <Searchbar onSubmit={this.formSubmitHendle}/>        
//       {error && <p><b>Error. Try again later</b></p>}
//       {loader && <Loader/>}            
//       {images.length > 0 && <ImageGallery images={images}/>}      
//       {images.length > 0 && page < Math.ceil(totalImg/12) && <Button handleLoaderMore={this.handleLoaderMore}/>}    
      
//       <ToastContainer autoClose={3000}/>
//       </AppStyled>
//   )}
// };

// import { Component } from "react"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Searchbar } from "./Searchbar/Searchbar"
// import { ImageGallery } from "./ImageGallery/ImageGallery"
// import { Button } from "./Button/Button"
// import { Loader } from "./Loader/Loader"
// import { getImages } from "services/getImages"
// import { AppStyled } from "components/App.styled"


// export class App extends Component {
//   state = {
//     query:'',
//     images: [],
//     page:1,

//     loader: false,
//     error: null,
//     totalImg: null,    
//     }

//   componentDidUpdate(prevProps, prevState) {        
//       if(this.state.query !== prevState.query ){
//           this.setState({ loader: true})
          
//           getImages(this.state.query, this.state.page)
//          .then(({hits, totalHits}) => {          
//           if(hits.length === 0){
//             return toast.error('Not a valid request');
//           }
//           this.setState({ images: hits, totalImg: totalHits})})
//          .catch(error => this.setState({error}))
//          .finally(() => this.setState({loader: false}));
//          return;
//       }


//       if (prevState.query !== this.state.query || prevState.page !== this.state.page){
//           this.setState({ loader: true})

//           getImages(this.state.query, this.state.page)
//           .then(({hits}) => {            
//             this.setState({ images: [...prevState.images, ...hits]})})
//           .catch(error => this.setState({error}))
//           .finally(() => this.setState({loader: false}))                   
//       }      
//     }     
      

//     handleLoaderMore = () => {
//       this.setState(prevState => ({page: prevState.page + 1}))       
//     }
//     formSubmitHendle = data =>{      
//       this.setState(() => ({query: data, page: 1, images: [] }))     
//     }
  
//   render(){
//       const {images, loader, totalImg, error, page } = this.state
//   return (
//       <AppStyled>
      
//       <Searchbar onSubmit={this.formSubmitHendle}/>        
//       {error && <p><b>Error. Try again later</b></p>}
//       {loader && <Loader/>}            
//       {images.length > 0 && <ImageGallery images={images}/>}      
//       {images.length > 0 && page < Math.ceil(totalImg/12) && <Button handleLoaderMore={this.handleLoaderMore}/>}    
      
//       <ToastContainer autoClose={3000}/>
//       </AppStyled>
//   )}
// };
