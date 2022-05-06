import { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    ${props => props.isInvalid && `color: red;`}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.isInvalid ? 'red' : '#ccc'};
    ${props => props.isInvalid && `background-color: #f9c0c0;`}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: ${props => props.isInvalid ? '#f9c0c0' : '#fad0ec'};
    border-color: ${props => props.isInvalid ? 'red' : '#8b005d'};
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputValid, setInputValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setInputValid(false);
      return;
    };

    setInputValid(true);
    props.onAddGoal(enteredValue);

    return setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isInvalid={!isInputValid}>
        <label>Course Goal</label>
        <input type="text"
          value={enteredValue} onChange={goalInputChangeHandler} placeholder={!isInputValid ? 'Please fill this input' : ''} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;