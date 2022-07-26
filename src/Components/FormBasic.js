import {Container, Form, Button} from "react-bootstrap";
import {useRef, useState, useEffect} from "react";

const users = [
  {
    id: 1,
    email: "Carson@gmail.com",
    password: "XFZHw0nY",
    confirmation_password: "XFZHw0nY",
  },
  {
    id: 2,
    email: "Bernard@gmail.com",
    password: "nFxx2ItlEr",
    confirmation_password: "nFxx2ItlEr",
  },
  {
    id: 3,
    email: "Hartley@gmail.com",
    password: "T66LzKI",
    confirmation_password: "T66LzKI",
  },
  {
    id: 4,
    email: "Aigneis@gmail.com",
    password: "CtcKO4N9rq",
    confirmation_password: "CtcKO4N9rq",
  },
  {
    id: 5,
    email: "Leoine@gmail.com",
    password: "EWRCoKfpAl",
    confirmation_password: "EWRCoKfpAl",
  },
  {
    id: 6,
    email: "Dorella@gmail.com",
    password: "N51Stb8B",
    confirmation_password: "N51Stb8B",
  },
  {
    id: 7,
    email: "Norris@gmail.com",
    password: "uuWc9M7",
    confirmation_password: "uuWc9M7",
  },
  {
    id: 8,
    email: "Murielle@gmail.com",
    password: "Rmjbocuys",
    confirmation_password: "Rmjbocuys",
  },
  {
    id: 9,
    email: "Gabriele@gmail.com",
    password: "PAonrMwcnJza",
    confirmation_password: "PAonrMwcnJza",
  },
  {
    id: 10,
    email: "Marius@gmail.com",
    password: "iHFQf6",
    confirmation_password: "iHFQf6",
  },
];

const FormBasic = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmationPasswordInput = useRef(null);

  const [isCapitalLetter, setIsCapitalLetter] = useState("");
  const [isLowerCase, setIsLowerCase] = useState("");
  const [isDigital, setIsDigital] = useState("");
  const [isSpecialChar, setIsSpecialChar] = useState("");
  const [isMin8Char, setIsMin8Char] = useState("");
  const [isTheSame, setIsTheSame] = useState(false);
  const [isExist, setIsExist] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const {email, password, confirmationPassword} = data;

  useEffect(() => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    uppercaseRegExp.test(password)
      ? setIsCapitalLetter("Hasło zawiera wielką literę. ")
      : setIsCapitalLetter("Hasło nie zawiera wielkiej litery. ");
    lowercaseRegExp.test(password)
      ? setIsLowerCase("Hasło zawiera małą literę. ")
      : setIsLowerCase("Hasło nie zawiera małą litery. ");
    digitsRegExp.test(password)
      ? setIsDigital("Hasło zawiera cyfrę. ")
      : setIsDigital("Hasło nie zawiera cyfry. ");
    specialCharRegExp.test(password)
      ? setIsSpecialChar("Hasło zawiera znak specjalny. ")
      : setIsSpecialChar("Hasło nie zawiera znaku specjalnego. ");
    minLengthRegExp.test(password)
      ? setIsMin8Char("Hasło zawiera ma przynajmniej 8 znaków. ")
      : setIsMin8Char("Hasło nie ma przynajmniej 8 znaków. ");

    password === confirmationPassword
      ? setIsTheSame(true)
      : setIsTheSame(false);
  }, [confirmationPassword, password, isCapitalLetter]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleBlur = () => {
    checkExistUser();
    isExist
      ? (passwordInput.current.disabled = true)
      : (passwordInput.current.disabled = false);
    isExist
      ? (confirmationPasswordInput.current.disabled = true)
      : (confirmationPasswordInput.current.disabled = false);
  };
  const checkExistUser = () => {
    const exist = users.filter((user) => user.email === email);
    exist.length === 0 ? setIsExist(false) : setIsExist(true);
    // console.log("sprwadzam", isExist);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    !isExist && users.push(data);
    console.log(users);
    // checkExistUser();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} method="GET">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            ref={emailInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            ref={passwordInput}
            onChange={handleChange}
          />
          <Form.Text className="text-danger">
            {isCapitalLetter +
              isLowerCase +
              isDigital +
              isSpecialChar +
              isMin8Char}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmationPassword">
          <Form.Label> Confirmation Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmation Password"
            value={confirmationPassword}
            name="confirmationPassword"
            ref={confirmationPasswordInput}
            onChange={handleChange}
          />
          {!isTheSame && (
            <Form.Text className="text-danger">
              Hasła muszą być takie same
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormBasic;
