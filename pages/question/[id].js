import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../../data/data";
import { useContext } from "react";
import Link from "next/link";
import AppContext from "../../context/AppContext";

export default function qestionPage() {
  const [visibility, setVisibility] = useState(false);
  const { index } = useContext(AppContext);
  const router = useRouter();
  let { id } = router.query;

  return (
    <div>
      <h3>{data[index - 1]?.questions[id]?.q}</h3>
      <button onClick={() => setVisibility(!visibility)}>
        Show the answer
      </button>
      <h4 className={visibility ? "" : "hide"}>
        {data[index - 1]?.questions[id]?.a}
      </h4>
    </div>
  );
}
