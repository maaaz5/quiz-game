import React, { useState, useEffect } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { data } from "../data/data";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Questions() {
  const router = useRouter();
  const [exisitingBranch, setExisitingBranch] = useState(false);
  const { branch } = useContext(AppContext);

  const handleClick = (e) => {
    const clicked = e.target.closest("span");

    if (!clicked) return;
    let lis = document.querySelectorAll("span");
    lis.forEach((sp) => sp.classList.remove("active"));

    clicked.classList.add("active");
  };

  useEffect(() => {
    if (branch) {
      setExisitingBranch(true);
    } else {
      setExisitingBranch(false);
    }
  }, [branch]);

  return (
    exisitingBranch && (
      <div>
        <h2 className="u-align-center ">please, select a question</h2>
        {exisitingBranch && (
          <div className={styles.row}>
            {data[branch.id]?.questions.map((qs) => {
              return (
                <span
                  key={qs.id}
                  className={qs.dejavu ? styles.dejaVu : styles.num}
                  onClick={(e) => {
                    !qs.dejavu
                      ? router.push(`/question/${qs.id}`)
                      : router.push(`/`);
                    !qs.dejavu && handleClick(e);
                  }}
                >
                  {qs.id}
                </span>
              );
            })}
          </div>
        )}
      </div>
    )
  );
}
