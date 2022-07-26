import FormBasic from "./Components/FormBasic";
import SignInForm from "./Components/multiStepForm/SingInForm";
import FormReCaptcha from "./Components/formReChapta/FormReChapta";
import "./App.css";

const App = () => {
  return (
    <>
      <h1> Registration Forms </h1>
      <div style={{height: "100vh"}}>
        <h2> No. 1 </h2>
        <FormBasic />
      </div>
      <div style={{height: "100vh"}}>
        <h2> No. 2 </h2>
        <SignInForm />
      </div>
      <div style={{height: "100vh"}}>
        <h2> No. 3 </h2>
        <FormReCaptcha />
      </div>
    </>
  );
};

export default App;
