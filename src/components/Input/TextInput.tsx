import React from "react";
import TextField from "@mui/material/TextField";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      error={!!error}
      helperText={error}
      fullWidth={fullWidth}
      disabled={disabled}
      variant="outlined"
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#243c2c", // cor do DoeMais
          },
          "&:hover fieldset": {
            borderColor: "#1b2d22",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1b5e20",
          },
        },
      }}
    />
  );
};
