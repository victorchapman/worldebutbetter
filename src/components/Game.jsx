import { useState, useEffect } from "react";
import "../App.css";

export default function Game() {
  const [answer, setAnswer] = useState(["h", "e", "l", "l", "o"]);
  const [input, setInput] = useState([]);
  const [something, setSomething] = useState(false);

  const handleSubmit = (e) => {
    e.preventdefault();
    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; i < input.length; j++) {
        if (answer[i] === input[j]) {
          setSomething(true);
        }
      }
    }
  };
  const handleChange = (current) => {
    setInput([current.split("")]);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);
  useEffect(() => {
    console.log(something);
  }, [something]);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          maxLength="5"
          className="hello"
          onChange={(e) => handleChange(e.target.value)}
          type="text"
        />
        <input type="submit" />
      </form>
      <p>{something}</p>
    </div>
  );
}
