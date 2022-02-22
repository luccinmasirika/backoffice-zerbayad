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
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    error: "",
  });

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

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
          ),
        250
      );
    });

  const onSubmit = async () => {
    setState({ ...state, loading: true, error: "" });
    const res = await fakeAuth();
    Cookies.set("user", JSON.stringify({firstName: "Fake", lastName: "user"}), { expires: 7 });
    Cookies.set("jwt", res, { expires: 7 });
    setState({ ...state, loading: false, error: "" });
    navigate("/");
  };

  return (
    <Box sx={{bgcolor: 'background.paper'}}>
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
            {state.error && (
              <Typography color="error" textAlign="center">
                {state.error}
              </Typography>
            )}
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                id="email"
                label="Email"
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
                value={state.password}
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
                      {state.showPassword ? <VisibilityOff /> : <Visibility />}
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
              {state.loading ? "Loading..." : "Login"}
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
    </Box>
  );
};

export default Login;
