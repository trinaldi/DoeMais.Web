import React from "react";
import {
  Box,
  Paper,
  Stack,
  TextField,
  FormControl,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import logo from "@/assets/logo.png";
import { TextInput } from "../Input/TextInput";

interface LoginFormProps {
  error?: string;
  email: string;
  password: string;
  loading: boolean;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({
  error,
  email,
  password,
  loading,
  setEmail,
  setPassword,
  onSubmit,
}: LoginFormProps) {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#243c2c",
        width: "100vw",
        height: "100vh",
      }}
      onSubmit={onSubmit}
    >
      <Paper
        elevation={6}
        sx={{
          bgcolor: "white",
          p: 6,
          borderRadius: 4,
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={3} alignItems="center">
            <Box
              component="img"
              src={logo}
              alt="DoeMais Logo"
              sx={{ height: 70, width: 92 }}
            />
          </Stack>
          <Typography variant="h2" color="textPrimary">DoeMais</Typography>
          <TextInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <TextInput
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <FormControl fullWidth error>
              <FormHelperText sx={{ textAlign: "center" }}>
                {error}
              </FormHelperText>
            </FormControl>
          )}

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Manter-me conectado"
            />
          </FormGroup>

          <Button variant="contained" color="warning" type="submit" fullWidth disabled={loading}>
            Login
          </Button>

          <Link underline="none" href="#" color="textSecondary">
            Esqueci minha senha
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
}
