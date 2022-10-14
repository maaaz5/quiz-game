import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../data/data";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [branch, setBranch] = useState({
    id: null,
    name: null,
  });
  const [index, setIndex] = useState(null);
  const [dashboard, setDashboard] = useState("/add-new-quiz");

  const router = useRouter();

  const indexNum = (num) => {
    setIndex(num);
  };

  const setDejaVu = (branchId, questionId) => {
    if (!data[branchId]?.questions) {
      router.push("/");
      return;
    }

    data[branchId].questions[questionId].dejavu = true;
  };

  const checkAnswer = (question, answers) => {
    // If the question has multiple correct answers
    if (answers.length > 1) {
      // Sorting both the answers array so that we can compare them correctly
      let userAnswers = answers.sort();
      let questionAnswers = data[branch.id].questions[question].answers.sort();

      let correctAnswers = [];

      for (let i = 0; i < questionAnswers.length; i++) {
        if (questionAnswers[i] === userAnswers[i]) {
          correctAnswers.push(true);
        } else {
          correctAnswers.push(false);
        }
      }

      let areAllTrue = correctAnswers.every((a) => a === true);

      if (areAllTrue) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("user : ", answers);
      // If the question has only one correct answer
      let isCorrect =
        data[branch.id].questions[question].answers[0] === answers[0];

      if (isCorrect) {
        return true;
      } else {
        return false;
      }
    }
  };

  const contextProps = {
    index,
    indexNum,
    setDejaVu,
    dashboard,
    setDashboard,
    data,
    branch,
    setBranch,
    checkAnswer,
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContext;
