import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const FormReCaptcha = () => {
  const captchaKEY = process.env.REACT_APP_SECRET_KEY;
  const captchaRef = useRef();
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    os: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const [isCapchaOK, setCapchaOK] = useState(false);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    isCapchaOK ? console.log(formValues) : console.log("error");
    setCapchaOK(false);
    setFormValues(defaultValues);
  };
  const onChange = () => {
    setCapchaOK(true);
  };

  return (
    <>
      <Box padding={3}>
        <FormControl sx={{width: "50%"}}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            name="first_name"
            id="firstName"
            aria-describedby="my-helper-text"
            value={formValues.first_name}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box padding={3}>
        <FormControl sx={{width: "50%"}}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            name="last_name"
            id="lastName"
            aria-describedby="my-helper-text"
            value={formValues.last_name}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box padding={3}>
        <FormControl sx={{width: "50%"}}>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            name="email"
            id="email"
            aria-describedby="my-helper-text"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box padding={3}>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
            row
          >
            <FormControlLabel
              key="male"
              value="male"
              control={<Radio size="small" />}
              label="Male"
            />
            <FormControlLabel
              key="female"
              value="female"
              control={<Radio size="small" />}
              label="Female"
            />
            <FormControlLabel
              key="other"
              value="other"
              control={<Radio size="small" />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box padding={3}>
        <FormControl sx={{width: "50%"}}>
          <InputLabel htmlFor="os">Your favorite system</InputLabel>
          <Select
            id="os"
            name="os"
            value={formValues.os}
            onChange={handleInputChange}
          >
            <MenuItem key="mac" value="mac">
              Mac
            </MenuItem>
            <MenuItem key="windows" value="windows">
              Windows
            </MenuItem>
            <MenuItem key="linux " value="linux">
              Linux
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      {!isCapchaOK && (
        <Typography> Please, prove you are not a robot</Typography>
      )}
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
        ref={captchaRef}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
};
export default FormReCaptcha;
