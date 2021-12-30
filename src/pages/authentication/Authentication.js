import { useState } from "react";
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onEmailChange = (event) => setEmail(event.target.value);

  const onPasswordChange = (event) => setPassword(event.target.value);

  const validateInputs = () => {
    if (email.length === 0 || !email.includes("@") || password.length < 8) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };

  const submit = () => {
    validateInputs();
    console.log("submitting--", email, password);
  };
  return (
    <div>
     <Container component="main" maxWidth="xs">
       <h1 style={{margin:"10px", textAlign:"center"}}>Log In</h1>
       <TextField
       margin="normal"
       required
       fullWidth
       onChange={onEmailChange}
       value={email}
       type="text"
       id="email"
       label="Email Address"
       />

       <TextField
       margin="normal"
       required
       fullWidth
       onChange={onPasswordChange}
       value={password}
       type="text"
       id="password"
       label="Password"
       />

       <Button
       onClick={submit}
       type="submit"
       fullWidth
       variant="contained"
       sx={{ mt: 3, mb: 2 }}
       >
        Log In
         </Button>
         <Button
       onClick={submit}
       type="submit"
       fullWidth
       variant="contained"
       sx={{ mt: 0, mb: 2 }}
       >
        Click here to Signup
         </Button>
         {error ? <h4>All fields are mandatory</h4> : ""}



     </Container>
    </div>
  );
}

export default Authentication;