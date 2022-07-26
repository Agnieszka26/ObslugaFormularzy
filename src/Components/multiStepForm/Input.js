import {Form} from "react-bootstrap";

const Input = ({field, type, val}) => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    localStorage.setItem(name, value);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{field}</Form.Label>
        {field !== "hobby" ? (
          <Form.Control
            placeholder={field}
            type={type}
            name={field}
            onChange={handleChange}
          />
        ) : (
          <Form.Select name={field} onChange={handleChange}>
            <option>Open this select menu</option>
            <option name={field} value="running">
              running
            </option>
            <option name={field} value="chess">
              chess
            </option>
            <option name={field} value="books">
              books
            </option>
          </Form.Select>
        )}
      </Form.Group>
    </>
  );
};

export default Input;
