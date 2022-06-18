import { TextField } from '@mui/material';

/* eslint-disable-next-line */
export interface TextInputProps {
  name?: string;
  type?: string;
  label?: string;
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput(props: TextInputProps) {
  return (
    <TextField
        name={props.name}
        type={props.type}
        label={props.label}
        color={props.color ?? "primary"}
        size="small"
        InputLabelProps={{
          style: {
            fontWeight: "bold"
          }
        }}
        fullWidth focused margin='normal'
        {...props}
    />
  );
}

export default TextInput;
