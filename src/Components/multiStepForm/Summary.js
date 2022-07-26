import { Container } from "react-bootstrap";

const Summary = () => {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  const hobby = localStorage.getItem("hobby");
   return (
    <>
      <Container>
        <h1>Summary:</h1>
        <p> Name: {name}</p>
        <p> Age: {age}</p>
        <p> Hobby: {hobby}</p>

      </Container>
    </>
  );
};

export default Summary;
