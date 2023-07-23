import { useState } from "react";
import { useGlobalContext } from "../Context";
const Search = () =>{
    const [text, setText] = useState('')
    const {setSearchTerm,fetchRandomMeal} = useGlobalContext()
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = () =>{
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

    return(
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={text} placeholder="Type favorite meal" className="form-input"/>
                <button type="submit" className="btn">search</button>
                <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>surprisee me</button> 
            </form>
        </header>
    )
}

export default Search;