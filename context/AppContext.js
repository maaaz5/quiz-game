import { createContext, useState } from "react";
import { useRouter } from "next/router";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(null);

  const router = useRouter();

  const indexNum = (num) => {
    setIndex(num);
  };
  return (
    <AppContext.Provider value={{ index, indexNum }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
