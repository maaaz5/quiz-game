import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { data } from "../../data/data";
import { useContext } from "react";
import Link from "next/link";
import styles from "./../../styles/QuestionPage.module.css";
import AppContext from "../../context/AppContext";

export default function QestionPage() {
  const [choice, setChoice] = useState(null);

  const { index, setDejaVu } = useContext(AppContext);
  const router = useRouter();
  let { id } = router.query;

  const handleClick = (e) => {
    const clicked = e.target.closest("h4");

    if (!clicked) return;

    let lis = document.querySelectorAll("h4");
    lis.forEach((sp) => (sp.style.filter = "brightness(0.5)"));

    // const key = clicked.getAttribute("key");
    const selectedAnswer = clicked.innerText;
    clicked.style.filter = "brightness(1)";

    if (selectedAnswer === data[index - 1]?.questions[id]?.answer[0]) {
      clicked.classList.add("trueAnswer");
      console.log("hol2a");
    } else {
      clicked.classList.add("wrongAnswer");
    }
  };

  useEffect(() => {
    setDejaVu(index, id);
    setChoice(null);
  }, [id]);

  return (
    <div className={styles.card}>
      <Link href={"/"}>Go Back</Link>
      <p className={styles.question__id}>
        {Number(id) + 1} / {data[index - 1]?.questions.length}
      </p>

      {data[index - 1]?.questions[id]?.q && (
        <h3 className={styles.question}>
          Q: {data[index - 1]?.questions[id]?.question}
        </h3>
      )}

      <div
        className={styles.field__items}
        onClick={(e) => {
          !choice && handleClick(e);
          setChoice(true);
        }}
      >
        {data[index - 1]?.questions[id]?.options.map((an, index) => {
          return (
            <section key={index} className={styles.page__section}>
              <h4 id="section-1">{an}</h4>
            </section>
          );
        })}
      </div>
    </div>
  );
}
