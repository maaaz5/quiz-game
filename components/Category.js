import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { data } from "../data/data";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useRouter } from "next/router";

export default function Category() {
  const [index, setIndex] = useState(null);
  const router = useRouter();

  const { indexNum } = useContext(AppContext);

  return (
    <>
      <h2 className="u-align-center ">please, select a category</h2>
      <ul
        className={styles.list}
        onClick={(e) => {
          const clicked = e.target.closest("li");

          if (!clicked) return;
          let lis = document.querySelectorAll("li");
          lis.forEach((li) => li.classList.remove("active"));

          clicked.classList.add("active");
          indexNum(clicked.value);
          router.push("/");
        }}
      >
        {data.map((dt) => (
          <li className={styles.list__item} key={dt.id} value={dt.id}>
            <p className={styles.icon}>{dt?.icon}</p>
            {dt.branch}
          </li>
        ))}
      </ul>
    </>
  );
}
