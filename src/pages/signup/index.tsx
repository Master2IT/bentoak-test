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
import { SignupDto } from "../../dtos/SignupDto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { useState } from "react";
import { Alert } from "@mui/material";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignup = async (data: any) => {
    const signInDto = plainToClass(SignupDto, data);

    const validationErrors = await validate(signInDto);

    if (validationErrors.length > 0) {
      setError(validationErrors[0]?.constraints?.isEmail as string);
      return;
    }

    const users = getFromStorage("users") || [];
    const findUser = users.findIndex((user: any) => user.email === data.email);
    if (findUser !== -1) {
      addToStorage({ key: "user", value: users[findUser].id });
      return navigate("/");
    }

    const id = users.length + 1;
    users.push({ ...data, id });
    addToStorage({ key: "users", value: users });
    addToStorage({ key: "user", value: id });
    navigate("/");
  };

  return (
    <AuthLayout>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit((data) => handleSignup(data))}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          {error && (
            <Grid item xs={12} marginBottom={1}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("firstName", { required: true })}
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              error={!!errors.firstName}
              helperText={errors.firstName && "First Name is required."}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("lastName", { required: true })}
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              error={!!errors.lastName}
              helperText={errors.lastName && "Last Name is required."}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("email", { required: true })}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email && "Email is required."}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("password", { required: true })}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={!!errors.password}
              helperText={errors.password && "password is required."}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
