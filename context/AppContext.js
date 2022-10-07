import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../data/data";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(null);

  const router = useRouter();

  const indexNum = (num) => {
    setIndex(num);
  };

  const setDejaVu = (branchId, questionId) => {
    data[branchId - 1].questions[questionId].dejavu = true;
  };

  return (
    <AppContext.Provider value={{ index, indexNum, setDejaVu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
