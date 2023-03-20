import { useState } from "react";
import PropTypes from "prop-types";
import { ButtonStyled, FormStyled, InputStyled } from "./SearchForm.styled";

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
        setSearchValue('');
    }
    
    return (
        <FormStyled onSubmit={submitForm}>
            <InputStyled type="text" onChange={saveInputValue} value={searchValue} placeholder='Enter film title'/>
            <ButtonStyled type="submit">Search</ButtonStyled>
        </FormStyled>)
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}