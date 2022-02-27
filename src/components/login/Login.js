import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { onLogin, onStatusChange } from "redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  email: "admin@azgarden.co.il",
  password: "Flower@Admin",
  showPassword: false,
};

const Login = () => {
  const [state, setState] = React.useState(initialState);

  const { email, password } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async () => {
    dispatch(onStatusChange({loading: true, error: false}))
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(onLogin(user));
      dispatch(onStatusChange({loading: false, error: false}))
      setState(initialState);
      navigate("/");
    } catch (error) {
      dispatch(onStatusChange({error: error?.message, loading: false}))
    }
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Container>
        <Stack
          sx={{ width: 1, minHeight: "100vh" }}
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            elevation={2}
            sx={{
              width: { xs: 1, sm: "70%", md: "50%" },
              mx: "auto",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Stack sx={{ px: { xs: 2, sm: 3, md: 6 }, py: 6 }} spacing={4}>
              {status.error && (
                <Typography color="error" textAlign="center">
                  {status.error}
                </Typography>
              )}
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="email"
                  label="Email"
                  value={email}
                  onChange={handleChange("email")}
                  startAdornment={
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>

                <OutlinedInput
                  id="password"
                  label="Password"
                  type={state.showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChange("password")}
                  startAdornment={
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                variant="contained"
                startIcon={<LoginIcon />}
                onClick={onSubmit}
              >
                {status.loading ? "Loading..." : "Login"}
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
