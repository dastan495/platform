// import React from "react";
// import "./style.css";
// import { useAuth } from "../context/AuthContex";

// export default function Registr() {
//   const { auth, setAuth } = useAuth();
//   const {
//     email,
//     password,
//     emailError,
//     passwordError,
//     hasAccount,
//     setPassword,
//     setEmail,
//     setHasAccount,
//     handleLogin,
//     handleSignup,
//   } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };
//   return (
//     <div>
//       <div className="parent">
//         <div className="main">
//           <h2>КНУ им.Жусупа Баласагынова</h2>
//           <form action="">
//             <div>
//               <input type="text" placeholder="Пользователь" />
//             </div>
//             <div>
//               <input type="text" placeholder="Пароль" />
//             </div>
//             <button>ВОЙТИ</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../context/AuthContex";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Registr = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const {
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setPassword,
    setEmail,
    setHasAccount,
    handleLogin,
    handleSignup,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      className="auth"
      sx={{
        // marginTop: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "10%",
          width: { xs: "90%", sm: "80%", md: "50%", lg: "30%" },
          height: "fit-content",
          backgroundColor: "#5e5e5e",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          padding: { xs: 2, sm: 5 },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            // margin: "16%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginLeft: "7%",
              color: "white",
              width: "100%",
              margin: "0 auto",
              fontSize: "20px",
            }}
          >
            КНУ им.Жусупа Баласагынова
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ width: "90%", margin: "4%", mt: "5%" }}
          >
            {/* <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 11, sm: 14 },
                // paddingTop: "12px",
              }}
            >
              Пользователь
            </Typography> */}

            <TextField
              className="input-email"
              required
              sx={{ width: "100%" }}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="пользователь"
              // ===========
              helperText={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Password
              </Typography>
              <TextField
                className="input-password"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                // ===============
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                sx={{ borderRadius: "0" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 0.2,
                }}
              >
                {" "}
              </Box>
            </Box>
            {hasAccount ? (
              <Button
                // onClick={() => navigate("/")}
                className="button_sign_in"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontWeight: 600,
                  backgroundColor: "black",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid green",
                    color: "green",
                    boxShadow: "none",
                  },
                }}
                onClick={() => {
                  navigate("/");
                  //   Navigate("/");
                  handleLogin();
                  setAuth(!auth);
                }}
              >
                Войти
              </Button>
            ) : (
              <Button
                className="button_register"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontWeight: 600,
                  backgroundColor: "black",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid green",
                    color: "green",
                    boxShadow: "none",
                  },
                }}
                onClick={() => {
                  navigate("/");

                  //   Navigate("/");
                  setAuth(!auth);
                  handleSignup();
                }}
              >
                {" "}
                <Link to={"/"}></Link>
                регистрация
              </Button>
            )}

            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item>
                {hasAccount ? (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    className="auth-link"
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Don't have an account? Register now"}
                  </Link>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    className="auth-link"
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Already have an account? Log In"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          id="line"
        ></Box>
      </Box>
    </Box>
  );
};

export default Registr;
