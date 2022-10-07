import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { data } from "../data/data";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Questions() {
  const { index } = useContext(AppContext);

  const handleClick = (e) => {
    const clicked = e.target.closest("span");

    if (!clicked) return;
    let lis = document.querySelectorAll("span");
    lis.forEach((sp) => sp.classList.remove("active"));

    clicked.classList.add("active");
  };

  return (
    index && (
      <div>
        <h2 className="u-align-center ">please, select a question</h2>
        {index && (
          <div className={styles.row}>
            {data[index - 1].questions.map((qs, i) => {
              return (
                <Link href={`/question/${i}`} key={i}>
                  <span onClick={handleClick} className={styles.num}>
                    {i + 1}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    )
  );
}
