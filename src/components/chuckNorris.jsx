import { useEffect, useState } from "react";

function DadChuck() {
  const [chuck, setChuck] = useState("chuck here");

  useEffect(() => {
    getChuck();
  }, []);

  const getChuck = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setChuck(data.value);
  };

  return (
    <div className="container">
      <h1>Chuck Norris Facts</h1>
      <p className="joke">{chuck}</p>
      <button type="button" className="btn" onClick={getChuck}>
        Get Another Chuck Norris fact
      </button>
    </div>
  );
}

export default DadChuck;