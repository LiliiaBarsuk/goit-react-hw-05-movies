import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('');

    const saveInputValue = e => {
        setSearchValue(e.currentTarget.value.toLowerCase());
    };

    const submitForm = e => {
        e.preventDefault();
        if (searchValue.trim() === '') {
            return
        } 
        onSubmit(searchValue);

    }
    
    return (
        <form onSubmit={submitForm}>
            <input type="text" onChange={saveInputValue}/>
            <button type="submit">Search</button>
        </form>)
}