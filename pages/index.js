import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/card";
import { data } from "../data/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [index, setIndex] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz Game</title>
        <meta name="description" content="A quiz game made for a school" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <select
          name="branchs"
          id="branchs"
          onChange={(e) => {
            console.log("hello");
            setIndex(e.target.value);
            console.log(index);
          }}
        >
          <option disabled selected>
            Select a branch
          </option>
          {data.map((dt) => (
            <option key={dt.id} value={dt.id}>
              {dt.branch}
            </option>
          ))}
        </select>
        {index && (
          <div>
            {data[index].questions.map((qs, i) => {
              return <Card qs={qs} key={i} />;
            })}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
