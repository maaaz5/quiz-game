import { useState } from "react";
import styles from "../styles/Card.module.css";

export default function Card({ qs: { a, q } }) {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <div>
        <h3>{q}</h3>
        <button onClick={() => setVisibility(!visibility)}>
          Show the answer
        </button>
      </div>

      <h4 className={visibility ? "" : "hide"}>{a}</h4>
    </div>
  );
}
