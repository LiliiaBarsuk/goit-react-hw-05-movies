import styled from '@emotion/styled';

export const FormStyled = styled.form`
   width: 460px;
   margin-bottom: 20px;
   margin-left: auto;
   margin-right: auto; 
`;

export const InputStyled = styled.input`
    min-width: 300px;
    padding: 10px 15px;
    border-radius: 50px;
    border: 1px solid #5C5C5C; 
    background-color: #1F1F1F; 
    color: #EAEAEA;
    font-size: 16px;
    
    &::placeholder {
      color: #5C5C5C;
    };
     
    
`;

export const ButtonStyled = styled.button`
  min-width: 100px; 
  margin-left: 20px;
  padding: 10px 15px; 
  border-radius: 50px;
  border: 2px solid #5C5C5C; 
  background-color: #080808;
  color: #EAEAEA;
  font-size: 16px;
`;