import { useContext } from "react";
import styled from "styled-components";

import Header from "../../components/Admin/Header";
import AddNewQuiz from "../../components/Admin/AddNewQuiz";
import Quizes from "../../components/Admin/Quizes";
import Themes from "../../components/Admin/Themes";
import Questions from "../../components/Admin/Questions";
import Groups from "../../components/Admin/Groups";

import AppContext from "../../context/AppContext";

const BACKEND_URL = process.env.BACKEND_URL;

export default function AdminPage({ quizes, themes, groups }) {
  const { dashboard, setQuizes } = useContext(AppContext);

  return (
    <AdminPageContainer>
      <Header />
      <Dashboard>
        {dashboard === "/add-new-quiz" && <AddNewQuiz />}
        {dashboard === "/quizes" && <Quizes />}
        {dashboard === "/themes" && <Themes themes={themes} />}
        {dashboard === "/questions" && <Questions />}
        {dashboard === "/groups" && <Groups groups={groups} />}
      </Dashboard>
    </AdminPageContainer>
  );
}

export async function getServerSideProps() {
  // Fetching Quizes
  const quizRes = await fetch(`${BACKEND_URL}/quiz/all`);
  const quizData = await quizRes.json();
  const quizes = quizData.data;

  // Fetching Themes
  const themesRes = await fetch(`${BACKEND_URL}/theme/all`);
  const themesData = await themesRes.json();
  const themes = themesData.data;

  // Fetching Groups
  const groupsRes = await fetch(`${BACKEND_URL}/group/all`);
  const groupsData = await groupsRes.json();
  const groups = groupsData.data || null;

  return {
    props: {
      quizes,
      themes,
      groups,
    },
  };
}

const AdminPageContainer = styled.div`
  margin: 2rem;

  display: flex;
  flex-direction: column;
`;

const Dashboard = styled.main`
  min-height: 60vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
