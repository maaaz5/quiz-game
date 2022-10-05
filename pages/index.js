import { useState } from "react";
import Card from "../components/card";
import { data } from "../data/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [index, setIndex] = useState(null);
  return (
    <div>
      <main>
        <h2 className="u-align-center ">please, select a category</h2>
        <ul
          className={styles.list}
          onClick={(e) => {
            const clicked = e.target.closest("li");

            if (!clicked) return;
            let lis = document.querySelectorAll("li");
            lis.forEach((li) => li.classList.remove("active"));

            clicked.classList.add("active");
            setIndex(clicked.value);
          }}
        >
          {data.map((dt) => (
            <li className={styles.list__item} key={dt.id} value={dt.id}>
              <p className={styles.icon}>{dt?.icon}</p>
              {dt.branch}
            </li>
          ))}
        </ul>
        {/* checking first if there a branch is selected before dispalying any questions */}

        {/* {index && (
          <div>
            {data[index - 1].questions.map((qs, i) => {
              return <Card qs={qs} key={i} />;
            })}
          </div>
        )} */}
      </main>
    </div>
  );
}
