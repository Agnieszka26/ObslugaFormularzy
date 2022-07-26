import {useState} from "react";
import {Button} from "react-bootstrap";
import Input from "./Input";
import Summary from "./Summary";

const SignInForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    age: "",
    hobby: "",
  });

  const [collectionOFUser, setCollectionOFUser] = useState([]);
  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const handleSubmit = () => {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const hobby = localStorage.getItem("hobby");
    setStep((prev) => prev + 1);
    setData({
      name,
      age,
      hobby,
    });
    setCollectionOFUser((oldArray) => [...oldArray, data]);
  };
  const toTheStart = () => {
    console.log(data, collectionOFUser);
    setStep(1);
  };

  switch (step) {
    case 1:
      return (
        <>
          <Input field="name" type="text"  />
          <Button onClick={() => handleNextStep()}>Next Step</Button>
        </>
      );

    case 2:
      return (
        <>
          <Input field="age" type="number" />
          <Button onClick={() => handleNextStep()}>Next Step</Button>
        </>
      );
    case 3:
      return (
        <>
          <Input field="hobby"  />
          <Button onClick={() => handleNextStep()}>Next Step</Button>
        </>
      );
    case 4:
      return (
        <>
          <Summary />
          <Button type="submit" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </>
      );
    case 5:
      return (
        <>
          Congrats, your data was successfully updated!
          <Button onClick={() => toTheStart()}>
            To the first step
          </Button>
        </>
      );
    default:
      console.log("step :", step);
  }
};

export default SignInForm;
