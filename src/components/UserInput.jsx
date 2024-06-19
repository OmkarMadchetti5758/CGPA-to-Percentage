import { useState } from "react";
export default function UserInput() {
  const [cgpa, setCgpa] = useState();
  const [percentage, setPercentage] = useState();
  let per;
  function handleInput(event) {
    const integerCGPA = +event.target.value;
    setCgpa(integerCGPA);
  }

  function handleClick() {
    setPercentage(cgpa * 9.5);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Enter CGPA</label>
          <input type="number" value={cgpa} onChange={handleInput} />
        </p>
        <p>
          <label>Percentage %</label>
          <input type="number" disabled value={percentage} />
        </p>
      </div>
      <button onClick={handleClick}>Calculate</button>
    </section>
  );
}
