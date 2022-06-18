import styles from './form-group.module.css';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';

/* eslint-disable-next-line */
export interface FormGroupProps {}

export function FormGroup(props: FormGroupProps) {
  return (
    <Card sx={{width: {sx: "100%", lg: "70%"}, p: 2}}>
      <CardContent>
        <Box mb={3}>
          <TextField
            name="email"
            type="email"
            label="Email"
            color="secondary"
            size="small"
            fullWidth focused margin='normal'/>
          <TextField
            name="password"
            type="password"
            label="Password"
            color="secondary"
            size="small"
            fullWidth focused margin='normal' />
          <Typography>
            <Link href="#" fontWeight="bold" underline="none">
              Forgot password?
            </Link>
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{sx: "column", lg: "row"}}
          alignItems={["center", "flex-start"]}
          width="100%"
          justifyContent="space-between"
        >
          <Typography color="primary.dark" fontWeight="bold">
            New user?&nbsp;
            <Link href="#" underline="none" display={["block", "inline-block"]}>
              Create account
            </Link>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none"
            }}
          >
            Log in
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FormGroup;
