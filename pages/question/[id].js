import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../../data/data";
import { useContext } from "react";
import Link from "next/link";
import styles from "./../../styles/QuestionPage.module.css";
import AppContext from "../../context/AppContext";

export default function QestionPage() {
  // const [visibility, setVisibility] = useState(false);
  const { index } = useContext(AppContext);
  const router = useRouter();
  let { id } = router.query;

  useEffect(() => {}, [id]);

  return (
    <div className={styles.card}>
      {data[index - 1]?.questions[id]?.q && (
        <h3 className={styles.question}>
          Q: {data[index - 1]?.questions[id]?.q}
        </h3>
      )}

      {/* <button onClick={() => setVisibility(!visibility)}>
        Show the answer
      </button> */}

      <div className={styles.field__items}>
        {data[index - 1]?.questions[id]?.a.map((an, index) => {
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
