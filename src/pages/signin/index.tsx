import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AuthLayout from "../../layouts/auth";
import { useForm } from "react-hook-form";
import { addToStorage, getFromStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { SigninDto } from "../../dtos/SigninDto";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignin = async (data: SigninDto) => {
    const signInDto = plainToClass(SigninDto, data);

    const validationErrors = await validate(signInDto);

    if (validationErrors.length > 0) {
      setError(validationErrors[0]?.constraints?.isEmail as string);
      return;
    }

    const users = getFromStorage("users") || [];
    const findUser = users.findIndex(
      (user: any) =>
        user.email.toLowerCase() === data.email.toLowerCase() &&
        data.password == user.password
    );
    if (findUser === -1) {
      return setError("User not found!");
    }

    if (users.length) {
      addToStorage({ key: "user", value: users[findUser].id });
      navigate("/");
    }
  };

  return (
    <AuthLayout>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit((data: any) => handleSignin(data))}
        noValidate
        sx={{ mt: 1 }}
      >
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          {...register("email", { required: true })}
          error={!!errors.email}
          helperText={errors.email && "Email is required."}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          {...register("password", { required: true })}
          error={!!errors.password}
          helperText={errors.password && "Password is required."}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
