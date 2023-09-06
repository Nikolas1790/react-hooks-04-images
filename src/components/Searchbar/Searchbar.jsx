import { SearchBarStyled, SearchFormBtn, SearchFormBtnLable, SearchFormInput, SearchFormStyled } from "components/App.styled";
import { useState } from "react";
import { toast } from "react-toastify"; 

export const Searchbar = ({onSubmit}) => {

  const [query, setQuery] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()    
    if(!query.trim()){
       return toast.error("Please, enter your query in the search bar :)");
    }
    onSubmit(query);
    setQuery('')

  }

  const handleChange = ({target: {value}}) =>{
    setQuery(value)
 
  }

  return(
    <SearchBarStyled>
        <header className="searchbar">
            <SearchFormStyled
             className="form" 
            onSubmit={handleSubmit}
             >
            <SearchFormBtn type="submit" className="button">
            <SearchFormBtnLable className="button-label">Search</SearchFormBtnLable>
            </SearchFormBtn>

            <SearchFormInput
                className="input"
                type="text"
                name="query"                        
               placeholder="Search images and photos"
               value={query}
               onChange={handleChange}
            />                    
            </SearchFormStyled>
        </header>
        
    </SearchBarStyled>
)
}

// export class Searchbar extends Component {
//     state = {
//         query:'',
//         }
    
//       handleChange = ({target: {value}}) =>{
//         this.setState({query: value})
//       }

//       handleSubmit = (e) =>{
//         e.preventDefault()    
//         if(!this.state.query.trim()){
//            return toast.error("Please, enter your query in the search bar :)");
//         }
//         this.props.onSubmit(this.state.query);
//         this.setState({
//           query: ''
//         })

//       }

//     render() {
//         return(
//             <SearchBarStyled>
//                 <header className="searchbar">
//                     <SearchFormStyled
//                      className="form" 
//                     onSubmit={this.handleSubmit}
//                      >
//                     <SearchFormBtn type="submit" className="button">
//                     <SearchFormBtnLable className="button-label">Search</SearchFormBtnLable>
//                     </SearchFormBtn>

//                     <SearchFormInput
//                         className="input"
//                         type="text"
//                         name="query"                        
//                        placeholder="Search images and photos"
//                        value={this.state.query}
//                        onChange={this.handleChange}
//                     />                    
//                     </SearchFormStyled>
//                 </header>
                
//             </SearchBarStyled>
//         )
//     }
// }

// import { SearchBarStyled, SearchFormBtn, SearchFormBtnLable, SearchFormInput, SearchFormStyled } from "components/App.styled";
// import { Component } from "react";
// import { toast } from "react-toastify"; 


// export class Searchbar extends Component {
//     state = {
//         query:'',
//         }
    
//       handleChange = ({target: {value}}) =>{
//         this.setState({query: value})
//       }

//       handleSubmit = (e) =>{
//         e.preventDefault()    
//         if(!this.state.query.trim()){
//            return toast.error("Please, enter your query in the search bar :)");
//         }
//         this.props.onSubmit(this.state.query);
//         this.setState({
//           query: ''
//         })

//       }

//     render() {
//         return(
//             <SearchBarStyled>
//                 <header className="searchbar">
//                     <SearchFormStyled
//                      className="form" 
//                     onSubmit={this.handleSubmit}
//                      >
//                     <SearchFormBtn type="submit" className="button">
//                     <SearchFormBtnLable className="button-label">Search</SearchFormBtnLable>
//                     </SearchFormBtn>

//                     <SearchFormInput
//                         className="input"
//                         type="text"
//                         name="query"                        
//                        placeholder="Search images and photos"
//                        value={this.state.query}
//                        onChange={this.handleChange}
//                     />                    
//                     </SearchFormStyled>
//                 </header>
                
//             </SearchBarStyled>
//         )
//     }
// }