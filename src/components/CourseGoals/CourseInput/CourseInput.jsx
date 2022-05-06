import { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import styled from 'styled-components';

// const FormControl = props => {
//   return (
//     <div className={`${styles['form-control']} ${props.className}`}>
//       {props.children}
//     </div>
//   );
// };

// const StyledFormControl = styled(FormControl)`
//   & label {
//     ${props => props.isInvalid && `color: red;`}
//   }

//   & input {
//     border: 1px solid ${props => props.isInvalid ? 'red' : '#ccc'};
//     ${props => props.isInvalid && `background-color: #f9c0c0;`}
//   }

//   & input:focus {
//     background: ${props => props.isInvalid ? '#f9c0c0' : '#fad0ec'};
//     border-color: ${props => props.isInvalid ? 'red' : '#8b005d'};
//   }
// `;

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
      <div className={`${styles['form-control']} ${!isInputValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text"
          value={enteredValue} onChange={goalInputChangeHandler} placeholder={!isInputValid ? 'Please fill this input' : ''} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;