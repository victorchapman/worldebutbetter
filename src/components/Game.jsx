import { useState, useEffect } from "react";
import "../App.css";

export default function Game() {
  const [answer, setAnswer] = useState("hello");
  const [input, setInput] = useState([]);

  const handleChange = (current) => {
    setInput([current.split("")]);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div>
      <input
        maxlength="5"
        className="hello"
        onChange={(e) => handleChange(e.target.value)}
        type="text"
      />
    </div>
  );
}
