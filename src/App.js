import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(params) {
  const [stepTracker, setStepTracker] = useState(0);

  function StepIncrease(params) {
    setStepTracker((s) => s + count);
  }
  function StepDecrease(params) {
    setStepTracker((s) => s - count);
  }
  const [count, setCount] = useState(3);

  function calculateFutureDate() {
    const today = new Date(); // Start with today's date
    today.setDate(today.getDate() + stepTracker); // Add the stepTracker days to the date
    return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  }

  return (
    <div>
      <button onClick={StepDecrease}>-</button>
      Step {stepTracker}
      <button onClick={StepIncrease}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      Count:{count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>
        {stepTracker} days from now is {calculateFutureDate()}{" "}
      </p>
      <p className="last">made by erkan aka Market.js</p>
    </div>
  );
}

//DESCRIPTIONS

// new Date(): This creates a new date object with the current date and time.

// getDate(): This method gets the day of the month for the specified date according to local time, as an integer from 1 to 31.

/* setDate(number): This sets the day of the month for a specified date according to local time.
 The number you pass in can be from 1 to 31, but if you pass a number outside this range, it will adjust the month and year accordingly. 
For example, if today is January 31st and you call setDate(32), it will set the date to February 1st. */

/* getMonth(): Returns the month of the specified date according to local time, as a zero-based value (where zero indicates the first month, January). 
So, to display the month correctly, you need to add 1 to the result of getMonth(). */

// getFullYear(): Returns the year of the specified date according to local time.

// setFullYear(year, [month], [date]): Sets the full year for a specified date according to local time.
// Optionally, you can also specify the month and date.
