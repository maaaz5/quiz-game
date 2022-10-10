import { useState, useContext } from "react";
import styled from "styled-components";

import AppContext from "../../context/AppContext";

export default function Header() {
  const [selectedCard, setselectedCard] = useState(1);
  const { dashboard, setDashboard } = useContext(AppContext);

  return (
    <HeaderContainer>
      <CardContainer>
        <CardD
          clicked={dashboard === "/add-new-quiz"}
          onClick={() => setDashboard("/add-new-quiz")}
        >
          <p>Add New Quiz</p>
        </CardD>
        <CardD
          clicked={dashboard === "/quizes"}
          onClick={() => setDashboard("/quizes")}
        >
          <p> Quizes</p>
        </CardD>
        <CardD
          clicked={dashboard === "/themes"}
          onClick={() => setDashboard("/themes")}
        >
          <p> Themes</p>
        </CardD>
        <CardD
          clicked={dashboard === "/questions"}
          onClick={() => setDashboard("/questions")}
        >
          <p> Questions</p>
        </CardD>
        <CardD
          clicked={dashboard === "/groups"}
          onClick={() => setDashboard("/groups")}
        >
          <p> Groups</p>
        </CardD>
      </CardContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardD = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.clicked ? "var(--color-secondary)" : "white"};
  color: ${(props) => (props.clicked ? "white" : "black")};
  cursor: pointer;

  p {
    font-size: 2rem;
  }

  &:hover {
    box-shadow: 5px 5px 60px rgba(0, 0, 0, 0.4);
    background-color: var(--color-secondary);
    color: white;
  }
`;
