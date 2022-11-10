import React, { useEffect, useState } from "react";

import Router, { useRouter } from "next/router";
import { data } from "../../data/data";
import { useContext } from "react";
import Link from "next/link";
import styles from "./../../styles/QuestionPage.module.css";
import AppContext from "../../context/AppContext";

export default function QestionPage() {
  const [choice, setChoice] = useState(null);
  const [answers, setAnswers] = useState([]);

  const { branch, setDejaVu, checkAnswer } = useContext(AppContext);

  const router = useRouter();

  let { id } = router.query;
  id = Number(id) - 1;

  const handleClick = (e) => {
    const clicked = e.target.closest("h4");

    if (!clicked) return;

    let lis = document.querySelectorAll("h4");
    lis.forEach((sp) => (sp.style.filter = "brightness(0.5)"));

    // const key = clicked.getAttribute("key");
    const selectedAnswer = clicked.innerText;
    clicked.style.filter = "brightness(1)";

    // Getting the index of the selected option to compare it later with the ansers value array
    const selectedAnswerIndex =
      data[branch.id]?.questions[id].options.indexOf(selectedAnswer) + 1;

    setAnswers((prevState) => {
      return prevState.push(Number(selectedAnswerIndex));
    });

    let isAnswerCorrect = checkAnswer(id, answers);

    if (isAnswerCorrect) {
      clicked.classList.add("trueAnswer");
      document.body.style.animationName = "fadeInGreen";
    } else {
      clicked.classList.add("wrongAnswer");
      document.body.style.animationName = "fadeInRed";
    }
  };

  const handleClick2 = (e) => {
    const clicked = e.target.closest("h4");

    if (!clicked) return;

    // const key = clicked.getAttribute("key");
    const selectedAnswer = clicked.innerText;
    clicked.style.backgroundColor = "#4087f7";
    clicked.style.color = "white";

    // Getting the index of the selected option to compare it later with the ansers value array
    const selectedAnswerIndex =
      data[branch.id]?.questions[id].options.indexOf(selectedAnswer) + 1;

    setAnswers((prevState) => {
      return [...prevState, Number(selectedAnswerIndex)];
    });
  };

  const submitAnswers = () => {
    let lis = document.querySelectorAll("h4");
    lis.forEach((sp) => (sp.style.filter = "brightness(0.5)"));

    let isAnswerCorrect = checkAnswer(id, answers);

    if (isAnswerCorrect) {
      document.body.style.animationName = "fadeInGreen";
    } else {
      document.body.style.animationName = "fadeInRed";
    }
  };

  useEffect(() => {
    setDejaVu(branch.id, id);
    setChoice(null);
    document.body.style.animationName = "";
  }, [id]);

  return (
    <div className={styles.card}>
      <div className={styles.btnsContainer}>
        <Link href={"/"}>
          <button className="btn btn__primary">Go Back</button>
        </Link>
      </div>

      <p className={styles.question__id}>
        {Number(id) + 1} / {data[branch.id]?.questions.length}
      </p>

      {data[branch.id]?.questions[id]?.question && (
        <div className={styles.question}>
          <h3 style={{ fontWeight: "500" }}>
            Q: {data[branch.id]?.questions[id]?.question}
          </h3>
          {data[branch.id]?.questions[id]?.string ?? (
            <p>{data[branch.id]?.questions[id]?.string}</p>
          )}
        </div>
      )}

      {data[branch.id]?.questions[id]?.answers.length <= 1 ? (
        <div
          className={styles.field__items}
          onClick={(e) => {
            !choice && handleClick(e);
            setChoice(true);
          }}
        >
          {data[branch.id]?.questions[id]?.options.map((an, index) => {
            return (
              <section key={index} className={styles.page__section}>
                <h4 id="section-1">{an}</h4>
              </section>
            );
          })}
        </div>
      ) : (
        <div
          className={styles.field__items}
          onClick={(e) => {
            handleClick2(e);
          }}
        >
          {data[branch.id]?.questions[id]?.options.map((an, index) => {
            return (
              <section key={index} className={styles.page__section}>
                <h4 id="section-1">{an}</h4>
              </section>
            );
          })}
          <button onClick={submitAnswers}>Submit</button>
        </div>
      )}

      {/* <div className={styles.btnsContainer}>
        {Number(id) !== 0 && (
          <Link href={`/question/${Number(id) - 1}`}>
            <button className="btn btn__secondary">Prev Question</button>
          </Link>
        )}
        {Number(id) !== data[index - 1]?.questions.length - 1 && (
          <Link href={`/question/${Number(id) + 1}`}>
            <button className="btn btn__primary">Next Question</button>
          </Link>
        )}
      </div> */}
    </div>
  );
}
