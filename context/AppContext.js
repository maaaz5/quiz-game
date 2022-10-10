import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../data/data";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(null);
  const [dashboard, setDashboard] = useState("/add-new-quiz");
  const [quizes,setQuizes] = useState(null)

  const router = useRouter();

  const indexNum = (num) => {
    setIndex(num);
  };

  const setDejaVu = (branchId, questionId) => {
    data[branchId - 1].questions[questionId].dejavu = true;
  };


  const contextProps = {
    index, indexNum, setDejaVu, dashboard, setDashboard,setQuizes
  }

  return (
    <AppContext.Provider
      value={contextProps}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
