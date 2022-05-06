import { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
      <div className={!isInputValid ? 'form-control invalid' : 'form-control'}>
        <label>Course Goal</label>
        <input type="text"
          value={enteredValue} onChange={goalInputChangeHandler} placeholder={!isInputValid ? 'Please fill this input' : ''
          } />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;