import styled from "styled-components";

export default function AddNewQuiz() {
  return (
    <Container>
      <InputContainer>
        <Label>Quiz Name</Label>
        <Input />
      </InputContainer>
      <InputContainer>
        <Label>Quiz Themes</Label>
        <Input />
      </InputContainer>
      <InputContainer>
        <Label>Quiz Groups</Label>
        <Input />
      </InputContainer>

      <Button>Create Quiz</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
