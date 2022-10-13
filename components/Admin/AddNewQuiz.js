import { useState } from "react";

import styled from "styled-components";

export default function AddNewQuiz({ themes, groups }) {
  const [showThemes, setShowThemes] = useState(false);
  const [showGroups, setShowGroups] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    themes: "",
    groups: "",
  });

  const handleSubmit = async () => {};

  const handleChange = (e) => {};

  const handleShowThemes = () => {
    if (!showThemes) {
      setShowThemes(true);
    } else {
      setShowThemes(false);
    }
  };
  const handleShowGroups = () => {
    if (!showGroups) {
      setShowGroups(true);
    } else {
      setShowGroups(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Quiz Name</Label>
          <Input value={formData.name} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <Label>Quiz Themes</Label>
          <Input />
        </InputContainer>
        <Themes show={showThemes}>
          {themes?.length === 0 ? <div></div> : <div></div>}
        </Themes>
        <InputContainer>
          <Label>Quiz Groups</Label>
          <Input />
        </InputContainer>
        <Groups show={showGroups}>
          {groups?.length === 0 ? <div></div> : <div></div>}
        </Groups>

        <Button type="submit">Create Quiz</Button>
      </form>
    </Container>
  );
}

const Themes = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  display: ${(props) => (props.show ? "flex" : "none")};
`;
const Groups = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

const Container = styled.div`
  width: 50%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-secondary);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-secondary-hover);
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 30px;
  border: 1px solid var(--dark-color);
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 1rem 0;
`;

const Label = styled.div`
  flex: 0.2;
  background-color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  boder: none;
  outline: none;
  font-size: 1.5rem;
  flex: 0.8;
  padding: 0 1rem;
`;
